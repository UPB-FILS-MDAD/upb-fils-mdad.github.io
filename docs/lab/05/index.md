---
sidebar_position: 6
slug: /lab/05
---

# 05 - Broadcasts

Broadcasts are a messaging mechanism that allows apps or the Android system to send and receive messages (**Intents**) to inform about events or actions. These messages are delivered to components (usually **BroadcastReceivers**) that are designed to respond to them. For example, the Android system sends broadcasts when various system events occur, such as system boot or device charging. Apps also send custom broadcasts, for example, to notify other apps of something that might interest them (for example, new data download).


:::note

Generally speaking, broadcasts can be used as a messaging system across apps and outside of the normal user flow. However, you must be careful not to abuse the opportunity to respond to broadcasts and run jobs in the background that can contribute to a slow system performance.

:::

Differences between Broadcasts and Simple Intents

| Aspect    | Broadcast                                   | Simple Intent                                        |
|-----------|---------------------------------------------|------------------------------------------------------|
| Nature    | Event\-based, many\-to\-many\.              | Task\-based, one\-to\-one\.                          |
| Recipient | Multiple registered receivers\.             | Single targeted component\.                          |
| Usage     | Notify multiple components about an event\. | Perform a direct action \(e\.g\., start a screen\)\. |
| Scope     | System\-wide or app\-wide\.                 | App\-specific or inter\-component\.                  |


## Types of broadcasts
Generally when we think of broadcasts we can classify as such:


- [System broadcasts](#system-broadcasts) 
- [Custom broadcasts](#custom-broadcasts)
   - [Implicit broadcasts](#implicit-broadcasts) 
   - [Explicit broadcasts](#explicit-broadcasts)


### System broadcasts
System broadcasts are events sent by the Android operating system to inform apps about system-level changes or events. The system automatically sends broadcasts when various system events occur, such as when the system switches in and out of Airplane Mode. All subscribed apps receive these broadcasts.



Examples:

- Device State Events:
    - `android.intent.action.BOOT_COMPLETED` (Device boot finished).
    - `android.intent.action.BATTERY_LOW` (Low battery warning).
- Connectivity Events:
    - `android.net.conn.CONNECTIVITY_CHANGE` (Network connectivity changes).
- Hardware Changes:
    - `android.hardware.action.NEW_PICTURE` (New picture taken with the camera).
    - `android.intent.action.HEADSET_PLUG` (Headset plugged or unplugged).
- App-Specific Events:
    - `android.intent.action.PACKAGE_ADDED` (A new app is installed).
    - `android.intent.action.PACKAGE_REMOVED` (An app is uninstalled).
  
:::info

For a complete list of system broadcast actions, see the [`BROADCAST_ACTIONS.TXT`](https://chromium.googlesource.com/android_tools/+/refs/heads/master/sdk/platforms/android-28/data/broadcast_actions.txt) file in the Android SDK.

:::

### Custom broadcasts

Custom broadcasts are app-defined messages sent to inform components within the same app or other apps about specific events. Any component can be a sender (e.g., an Activity or Service).

Examples:

- An app sends a broadcast when a download completes.
- Notify other parts of the app when a user logs in.
- Custom events between apps, such as collaboration between different apps in the same ecosystem.

The app can send custom broadcasts in two ways

1. **Using standard Custom Broadcasts**: Sent using `sendBroadcast()` and delivered to all matching receivers.
   
2. **Using ordered Broadcasts**: Sent using `sendOrderedBroadcast()` and delivered to receivers one at a time in priority order.

#### Sending a custom broadcast

```kotlin
val intent = Intent("com.example.MY_CUSTOM_BROADCAST")
intent.putExtra("message", "Hello from Broadcast!")
sendBroadcast(intent)
```


#### Implicit broadcasts
An implicit broadcast is sent using an Intent that does not specify a target component (i.e., it uses an implicit Intent). Instead, it declares an action string (and optionally data) that describes the broadcast event. Any BroadcastReceiver registered to listen for that action will receive the broadcast.

:::info

Implicit broadcasts (broadcasts that do not specify a target component) used to wake up apps in earlier versions of Android. However, starting with **Android 8.0 (Oreo)**:

- Most implicit broadcasts are restricted to improve performance and save battery life.
- Apps can no longer register manifest-declared BroadcastReceivers for implicit broadcasts unless they are on a whitelist (e.g., `BOOT_COMPLETED`, `SMS_RECEIVED`).
- Dynamic receivers (registered programmatically in running components) still work but won't wake up a stopped app.

:::


##### Protecting Your BroadcastReceiver:

If not carefully used, implicit broadcasts can pose a security risk, as other apps could potentially receive or send them.

For external broadcasts, you can enforce permissions:

```kotlin
sendBroadcast(intent, "com.example.MY_PERMISSION")
```
For local broadcasts use LocalBroadcastManager for broadcasts within your app to prevent other apps from receiving them.

```kotlin
val localBroadcastManager = LocalBroadcastManager.getInstance(context)
val intent = Intent("com.example.ACTION_MY_BROADCAST")
localBroadcastManager.sendBroadcast(intent)
```


#### Explicit broadcasts

An explicit broadcast is sent using an Intent that explicitly specifies the target component (e.g., a BroadcastReceiver within your app or another app).

If a broadcast explicitly targets a component (e.g., a specific BroadcastReceiver in another app), the system will start the target app (if it's not already running) to deliver the broadcast.
This works because the Intent clearly identifies the recipient, so Android ensures the broadcast is handled.

```kotlin
val intent = Intent()
intent.setClass(this, ExplicitBroadcastReceiver::class.java)
intent.putExtra("message", "Hey!")
sendBroadcast(intent)
```


## Registering a broadcast and Broadcast receivers
A `BroadcastReceiver` in Android is a component that responds to broadcast messages sent by the Android system or other applications.

You can register broadcast receivers in two main ways:

1. Static Registration (Declared in the *AndroidManifest.xml*).
2. Dynamic Registration (Registered at runtime in code using `Context.registerReceiver()`).


#### When to Use Static vs. Dynamic Registration?

| Criteria             | Static Registration                                                      | Dynamic Registration                         |
|----------------------|--------------------------------------------------------------------------|----------------------------------------------|
| Scope                | Works even if the app is not running.                                    | Only works when the app/component is active. |
| Use Case             | System-wide broadcasts (e.g., battery status, boot completed).           | App-specific or short-lived broadcasts.      |
| Setup                | Defined in the manifest.                                                 | Registered programmatically at runtime.      |
| Lifecycle Management | Automatically managed by the system.                                     | Must be manually managed by the developer.   |
| Performance Impact   | May increase resource usage if many receivers are statically registered. | Efficient for app-specific scenarios.        |



### Static registration

This method is used when the receiver needs to respond to broadcasts even when the app is not running (e.g., system-level broadcasts).

Steps:

1. Define the receiver class by extending BroadcastReceiver and overriding onReceive.
2. Register the receiver in the AndroidManifest.xml file with an `<intent-filter>`.

Example:

```kotlin
class BatteryLevelReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        if (intent.action == Intent.ACTION_BATTERY_LOW) {
            // Respond to the broadcast
            Toast.makeText(context, "Battery is low!", Toast.LENGTH_SHORT).show()
        }
    }
}
```

In *AndroidManifest.xml*:

```xml
<application>
    <receiver android:name=".BatteryLevelReceiver"
    android:exported="true">
        <intent-filter>
            <action android:name="android.intent.action.BATTERY_LOW"/>
        </intent-filter>
    </receiver>
</application>
```

:::warning

Beginning with Android 8.0 (API level 26), the system imposes additional restrictions on manifest-declared receivers.

If your app targets Android 8.0 or higher, you cannot use the manifest to declare a receiver for most implicit broadcasts (broadcasts that don't target your app specifically). You can still use a context-registered receiver when the user is actively using your app.

:::

:::note

Static registration cannot be used for custom or app-specific broadcasts when the app is running in the foreground.

:::

### Dynamic registration

This method is used when the receiver should only listen for broadcasts while the app or a specific component (e.g., activity, service) is running.
Steps:

1. Define the receiver class.
2. Register and unregister the receiver in code using registerReceiver() and unregisterReceiver().

Example:

```kotlin
class MainActivity : AppCompatActivity() {
    private lateinit var receiver: BroadcastReceiver

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        //Define receiver class
        receiver = object : BroadcastReceiver() {
            override fun onReceive(context: Context, intent: Intent) {
                if (intent.action == "com.example.CUSTOM_BROADCAST") {
                    val message = intent.getStringExtra("message")
                    Toast.makeText(context, "Received: $message", Toast.LENGTH_SHORT).show()
                }
            }
        }

        

        // Register the receiver

        val intentFilter = IntentFilter("com.example.CUSTOM_BROADCAST")
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            registerReceiver(receiver, intentFilter, RECEIVER_EXPORTED)
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        // Unregister the receiver
        unregisterReceiver(receiver)
    }
}

```
:::note

The receiver stops listening when the app or component is destroyed.

::::





## Exercises

Make an app that can:

1. Receive the `android.intent.action.AIRPLANE_MODE` system broadcast using a dynamically registered broadcast receiver. Display in the logs the state of the airplane mode.
2. Send a custom explicit broadcast the extras `"Hello from explicit broadcast!"`. And statically register a receiver that will display the message in a Toast.
3. Use an `EditText` + `Button` to send the hash of the input message using an **implicit** broadcast. Make sure to use a separate thread for the message hashing. Add a dynamic broadcast receiver and display the hashed message in a Toast.

:::note 

Use can use this function to hash the message

```kotlin
    private fun hashMessage(input: String): String {
        val bytes = MessageDigest.getInstance("SHA-256").digest(input.toByteArray())
        return bytes.joinToString("") { "%02x".format(it) }
    }
```
:::

Make a separate app that:

4. Receives the custom broadcasted message from *exercise 3* and displays that message in a textView.