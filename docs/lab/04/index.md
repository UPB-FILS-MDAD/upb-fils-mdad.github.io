---
sidebar_position: 5
slug: /lab/04
---

# 04 - Persistent storage

## Android filesystem

Android uses a file system that's similar to disk-based file systems on other platforms.
In the Android file system, there are usually six main partitions found on every device. Some devices may come with a couple of additional partitions, which differ from model to model, but six primary partitions are found on every Android device.
| Partition   | Description                                                                                     | Can apps save files here? |
|-------------|-------------------------------------------------------------------------------------------------|-----------|
| /boot       | Contains the kernel and ramdisk, essential for booting the device.                              |No |
| /system     | Houses the Android OS and pre-installed system apps; critical for the device's operation.       |No | 
| /recovery   | Allows booting into recovery mode for backups, factory resets, and maintenance tasks.           |No |
| /data       | Stores user data, including apps, settings, contacts, and messages.                             |Yes (App Sandbox - This is the primary location for app-specific data. Each app has a private directory here (`/data/data/<package_name>`)). |
| /cache      | Holds frequently accessed app data to improve performance and free up space.                    |Yes (Limited) |
| /misc       | Stores miscellaneous system settings like USB configuration and carrier ID.                     |No |

Other common partions include :

| Partition   | Description                                                                                     | Can apps save files here? |
|-------------|-------------------------------------------------------------------------------------------------|-----------|
| /sdcard     | User-accessible storage for files and data; can refer to internal or external SD cards.         | Yes (Scoped Access) |
| /sd-ext     | An additional SD card partition for storing app data, often used with custom ROMs or mods.      | Yes (with Custom ROMs)


## Types of application data storage

Android provides several ways to store data, each suitable for different purposes.


- **App-specific storage**: Store files that are meant for your app's use only, either in dedicated directories within an internal storage volume or different dedicated directories within external storage. Use the directories within internal storage to save sensitive information that other apps shouldn't access.
- **Shared storage**: Store files that your app intends to share with other apps, including media, documents, and other files.
- **Preferences**: Store private, primitive data in key-value pairs.
- **Databases**: Store structured data in a private database using the Room persistence library.



<details>
  <summary>More about data/files types</summary>

|     | Type of content | Access method | Permissions needed | Can other apps access? | Files removed on app uninstall? |
| --- | --- | --- | --- | --- | --- |
| [App-specific files](/training/data-storage/app-specific) | Files meant for your app's use only | From internal storage, `getFilesDir()` or `getCacheDir()`          From external storage, `getExternalFilesDir()` or `getExternalCacheDir()` | Never needed for internal storage          Not needed for external storage when your app is used on devices that run Android 4.4 (API level 19) or higher | No  | Yes |
| [Media](/training/data-storage/shared/media) | Shareable media files (images, audio files, videos) | `MediaStore` API | `READ_EXTERNAL_STORAGE` when accessing other apps' files on Android 11 (API level 30) or higher          `READ_EXTERNAL_STORAGE` or `WRITE_EXTERNAL_STORAGE` when accessing other apps' files on Android 10 (API level 29)          Permissions are required for **all** files on Android 9 (API level 28) or lower | Yes, though the other app needs the `READ_EXTERNAL_STORAGE` permission | No  |
| [Documents and other files](/training/data-storage/shared/documents-files) | Other types of shareable content, including downloaded files | Storage Access Framework | None | Yes, through the system file picker | No  |
| [App preferences](/training/data-storage/shared-preferences) | Key-value pairs | [Jetpack Preferences](/guide/topics/ui/settings/use-saved-values) library | None | No  | Yes |
| Database | Structured data | [Room](/training/data-storage/room) persistence library | None | No  | Yes |

</details>


 ### App-Specific Storage

App-specific storage refers to files stored in directories dedicated to your app, either in internal storage (private to your app) or external storage (visible but scoped to your app starting from Android 10).

The `use` and `useLines` constructs are Kotlin features that ensure resources such as streams or buffers are closed properly after usage, avoiding memory leaks. For reading operations, a buffered reader is employed, which wraps an input stream to improve performance by reading chunks of data into memory instead of processing it byte by byte.


 - Internal Storage: Use this for sensitive information, as only your app can access these files.
   - Writing to internal storage
    ```kotlin
    fun writeToInternalStorage(filename: String, content: String) {
        openFileOutput(filename, Context.MODE_PRIVATE).use {
            it.write(content.toByteArray())
        }
    }
    ```
    - Reading from internal storage
    ```kotlin
    fun readFromInternalStorage(filename: String): String {
        return openFileInput(filename).bufferedReader().useLines { it.joinToString() }
    }
    ```


 - External Storage: Suitable for non-sensitive files.
  A `File` object encapsulates the file path and is combined with `FileOutputStream` to perform write operations, while `FileInputStream` with a buffered reader is used to read data in a structured way.



   - Writing to external storage
    ```kotlin
    fun writeToExternalStorage(filename: String, content: String) {
        if (Environment.MEDIA_MOUNTED == Environment.getExternalStorageState()) {
            val file = File(getExternalFilesDir(null), filename)
            FileOutputStream(file).use {
                it.write(content.toByteArray())
            }
        }
    }
    ```
   - Reading from external storage
    ```kotlin
    private fun readFromExternalStorage(filename: String): String {
        val file = File(getExternalFilesDir(null), filename)
        return if (file.exists()) {
            FileInputStream(file).bufferedReader().useLines { it.joinToString() }
        } else {
            "File not found"
        }
    }
    ```
    :::info

    Additional permission have to be specified in the `AndroidManifest.xml` file.

    ```xml
     <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    ```

    :::

### Shared Storage

Shared storage is for files like media (images, videos, audio) and documents that can be accessed by other apps.
MediaStore API is used to store and retrieve files while respecting scoped storage policies on Android 10+.

- Writing to shared storage
  
  `ContentResolver` is used to interact with the shared storage through `MediaStore`.
    A `ContentValues` object stores file metadata like:

    File name (`DISPLAY_NAME`).
    File type (`MIME_TYPE`).
    Path to save the file (`RELATIVE_PATH`).

    `insert()` creates a new file entry in the shared storage, and its Uri is returned.
    `openOutputStream()` writes the content to the file, wrapped in a use block to ensure the stream is closed automatically.
    `flush()` ensures all data is saved to the file system.
    ```kotlin

    fun writeTextFile(context: Context, fileName: String, fileContent: String) {
        val resolver = context.contentResolver
        val contentValues = ContentValues().apply {
            put(MediaStore.MediaColumns.DISPLAY_NAME, fileName)
            put(MediaStore.MediaColumns.MIME_TYPE, "text/plain")
            put(MediaStore.MediaColumns.RELATIVE_PATH, "Documents/")  // Path for shared storage
        }

        val fileUri: Uri? = resolver.insert(MediaStore.Files.getContentUri("external"), contentValues)
        fileUri?.let {
            resolver.openOutputStream(it)?.use { outputStream ->
                outputStream.write(fileContent.toByteArray())
                outputStream.flush()
            }
        }
    }
    ```

- Reading from shared storage
  
  `ContentResolver` queries the `MediaStore` to find the file by its name.
    The query returns a `Cursor` that:
    - Checks if the file exists using `moveToFirst()`.
    - Retrieves the file’s path using the DATA column.

    A File object reads the file using `readText()` to get its content.
    ```kotlin

    fun readTextFile(context: Context, fileName: String): String? {
        val resolver = context.contentResolver
        val projection = arrayOf(MediaStore.MediaColumns.DISPLAY_NAME, MediaStore.MediaColumns.DATA)
        val selection = "${MediaStore.MediaColumns.DISPLAY_NAME} = ?"
        val selectionArgs = arrayOf(fileName)
        val uri: Uri = MediaStore.Files.getContentUri("external")

        resolver.query(uri, projection, selection, selectionArgs, null)?.use { cursor ->
            if (cursor.moveToFirst()) {
                val filePath = cursor.getString(cursor.getColumnIndexOrThrow(MediaStore.MediaColumns.DATA))
                return filePath?.let {
                    return File(it).readText()
                }
            }
        }
        return null  // Return null if file not found
    }
    ```

### Preferences

Preferences allow you to store private, primitive data (e.g., String, int, boolean) in key-value pairs using SharedPreferences.
Suitable for lightweight data like user settings, flags, or configuration.

- writing to preferences
    ```kotlin
    fun saveToSharedPreferences(key: String, value: String) {
        with(sharedPreferences.edit()) {
            putString(key, value)
            apply()
        }
    }
    ```

- reading from preferences
    ```kotlin
    fun readFromSharedPreferences(key: String): String? {
        return sharedPreferences.getString(key, "")
    }
    ```


### Databases

For structured data, you can use Room, a persistence library that provides an abstraction over SQLite. 

There are three major components in Room:

*   The [database class](/reference/kotlin/androidx/room/Database) that holds the database and serves as the main access point for the underlying connection to your app's persisted data.
    ```kotlin
    @Database(entities = [User::class], version = 1)
    abstract class AppDatabase : RoomDatabase() {
        abstract fun userDao(): UserDao
    }
    ```
*   [Data entities](/training/data-storage/room/defining-data) that represent tables in your app's database.
    ```kotlin
    @Entity
    data class User(
        @PrimaryKey val uid: Int,
        @ColumnInfo(name = "first_name") val firstName: String?,
        @ColumnInfo(name = "last_name") val lastName: String?
    )
    ```
*   [Data access objects (DAOs)](/training/data-storage/room/accessing-data) that provide methods that your app can use to query, update, insert, and delete data in the database.
    ```kotlin
    @Dao
    interface UserDao {
        @Query("SELECT * FROM user")
        fun getAll(): List<User>

        @Query("SELECT * FROM user WHERE uid IN (:userIds)")
        fun loadAllByIds(userIds: IntArray): List<User>

        @Query("SELECT * FROM user WHERE first_name LIKE :first AND " +
            "last_name LIKE :last LIMIT 1")
        fun findByName(first: String, last: String): User

        @Insert
        fun insertAll(vararg users: User)

        @Delete
        fun delete(user: User)
    }
    ```

Using the database

```kotlin
val db = Room.databaseBuilder(
        applicationContext,
        AppDatabase::class.java, "database-name"
    ).build()
```

```kotlin
val userDao = db.userDao()
val users: List<User> = userDao.getAll()
```

:::info

You also need to:

- Add the required Room dependencies in your build.gradle file:

    ```gradle
    plugins {
        ...
        id("com.google.devtools.ksp") version "1.9.24-1.0.20"
    }
    ```
    Make sure your kotlin version is '1.9.24'


    ```gradle
    dependencies {

        val room_version = "2.6.1"

        ksp("androidx.room:room-compiler:$room_version")
        implementation("androidx.room:room-ktx:$room_version")

        ...
    }
    ```
:::


## Exercises 


Create an app with a MainActivity that does the following:

1.  Usea a **sharedPreferences** to save a boolean which indicates which theme should be loaded when the app starts (Light or Dark). Use toggle button to swich between themes.
2.  Create a 'student' table in a **room database** that has the following columns: `Name`, `Year`, `MeanGrade`. Insert a few entries in the database. And display them in the `MainActivity`
3.  Write to the internal **app-specific storage** a .txt file that contains a list with all the students sorted alphabetically. 
4.  Write to the **shared storage** a .txt file that contains a list with all the students sorted by MeanGrade. 

:::info

Use the [Device File Explorer](https://developer.android.com/studio/debug/device-file-explorer) to view the .txt files.

:::

