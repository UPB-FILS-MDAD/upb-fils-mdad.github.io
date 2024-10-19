---
sidebar_position: 1
slug: /lab/01
---

# 01 - Layouts

## Layouts
import LinearVSRelative from './images/linear_vs_relative.png';


In Android, layouts are used to define the structure and arrangement of the user interface (UI) elements on the screen. A layout is a container that holds UI components like buttons, text views, and images. It organizes these components either in a specific arrangement or based on user-defined constraints. Android provides several types of layouts, each with a different method for positioning UI elements. Some examples are: Linear Layout, Relative Layout, Grid Layout, Constraint Layout.

<img src={LinearVSRelative} height="200" alt="Linear Layout vs Relative Layout"/>


### <a href="https://developer.android.com/develop/ui/views/layout/linear">Linear layout</a>

Arranges its children in a single row (horizontal) or column (vertical). It creates a scrollbar if the length of the window exceeds the length of the screen.

#### Example

````xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
   android:layout_width="match_parent"
   android:layout_height="match_parent"
   android:paddingLeft="16dp"
   android:paddingRight="16dp"
   android:orientation="horizontal"
   android:gravity="center">

   <!-- Include other widget or layout tags here. These are considered
           "child views" or "children" of the linear layout -->

 </LinearLayout>
````

#### Width and Height attributes

Attributes <a href="https://developer.android.com/reference/android/view/ViewGroup.LayoutParams#attr_android:layout_height">```android:layout_height```</a> and <a href="https://developer.android.com/reference/android/view/ViewGroup.LayoutParams#attr_android:layout_width">```android:layout_width```</a> are used to specify the size of an element. This attributes are required for any view inside of a containing layout manager. Their value may be a fixed dimension (such as **"12dp"**) for a constant size or one of the special constants from the table below.

<table>
<tr>
<td>```match_parent```</td><td>Will force the view to expand to take up as much space as is available within the layout element it's been placed in (its parent), minus the parent's padding, if any.</td>
</tr>
<tr>
<td>```wrap_content```</td><td>The view wll be large enough to fit its own internal content, taking its own padding into account.</td>
</tr>
</table>

#### Specific attributes for LinearLayout

<table>
<tr valign="top">
<td><a href="https://developer.android.com/reference/android/R.styleable#LinearLayout_orientation">```android:orientation```</a></td><td>used to specify whether the child views are displayed in a column or in a row</td>
</tr>

<tr valign="top">
<td><a href="https://developer.android.com/reference/android/R.styleable#LinearLayout_gravity">```android:gravity```</a></td><td>specifies how an object should position its content, on both the X and Y axes, within its own bounds</td>
</tr>

<tr valign="top">
<td><a href="https://developer.android.com/reference/android/R.styleable#LinearLayout_Layout_layout_weight">```android:layout_weight```</a></td><td>Indicates how much of the extra space in the LinearLayout is allocated to the view associated with these LayoutParams.</td>
</tr>


## Views

### <a href="https://developer.android.com/reference/android/widget/TextView">TextView</a>

A user interface element that displays text to the user.

#### Example

````xml
 <LinearLayout
      xmlns:android="http://schemas.android.com/apk/res/android"
      android:layout_width="match_parent"
      android:layout_height="match_parent">
    <TextView
        android:id="@+id/text_view_id"
        android:layout_height="wrap_content"
        android:layout_width="wrap_content"
        android:text="@string/hello" />
 </LinearLayout>
````

#### ```android:id``` attribute

Allows you to identify an element (either a layout of a view) either in the xml file (when using relative based layouts) or in the Activity (to bind to the view and control it or change its attributes). It is recommended to add it for the views that you want to have access to in the Activity (for example: if you want to change the displayed text or if you want to receive click callbacks from buttons).

####  ```android:text``` attribute

Allows to specify the text to be displayed by the view element. Is also available for buttons or other views displaying a text.

### <a href="https://developer.android.com/reference/android/widget/EditText"> EditText</a>

A user interface element for entering and modifying text.

#### Example

````xml
 <EditText
     android:id="@+id/plain_text_input"
     android:layout_height="wrap_content"
     android:layout_width="match_parent"
     android:inputType="text"/>
````

#### ```android:inputType``` attribute

This attribute must be specified for each EditText element. For example, for plain text, the input type will be  ```"text"```.

Choosing the input type configures the keyboard type that is shown, acceptable characters, and appearance of the edit text. For example, if you want to accept a secret number, like a unique pin or serial number, you can set inputType to ```"numericPassword"```. An inputType of ```"numericPassword"``` results in an edit text that accepts numbers only, shows a numeric keyboard when focused, and masks the text that is entered for privacy.
</table>

### <a href="https://developer.android.com/reference/android/widget/Button">Button</a>

A user interface element the user can tap or click to perform an action.

#### Example

````xml
 <Button
     android:id="@+id/first_button"
     android:layout_height="wrap_content"
     android:layout_width="wrap_content"
     android:text="@string/self_destruct" />
````

````kotlin
class MainActivity : AppCompatActivity() {
    private lateinit var first_button: Button;
    private lateinit var second_button: Button;

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // First method of adding a click listener
        first_button = findViewById(R.id.first_button);
        first_button.setOnClickListener {
            val toast = Toast.makeText(this, "Hello World!", Toast.LENGTH_LONG);
            toast.show();
        }

        // Second method of adding a click listener
        second_button = findViewById(R.id.second_button);
        val listener = object: View.OnClickListener {
            override fun onClick(p0: View?) {
                val toast = Toast.makeText(this@MainActivity, "Hello World!", Toast.LENGTH_LONG);
                toast.show();
            }
        }
        second_button.setOnClickListener(listener)
    }
}
````

### <a href="https://developer.android.com/develop/ui/views/components/radiobutton">Radio Button</a>

Radio buttons let the user select one option from a set of mutually exclusive options

#### Example

````xml
<?xml version="1.0" encoding="utf-8"?>
<RadioGroup
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:orientation="vertical">
    <RadioButton android:id="@+id/radio_pirates"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Pirates"/>
    <RadioButton android:id="@+id/radio_ninjas"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Ninjas"/>
</RadioGroup>
````

````kotlin
findViewById<RadioButton>(R.id.radio_pirates).setOnCheckedChangeListener { buttonView, isChecked ->
    Log.d("RADIO", "Pirates is checked: $isChecked")
}

findViewById<RadioButton>(R.id.radio_ninjas).setOnCheckedChangeListener { buttonView, isChecked ->
    Log.d("RADIO", "Ninjas is checked: $isChecked")
}
````

## Logs

System logs are the most important information that DDMS can provide.
System logs describe all the actions performed by the device, the exceptions that occurred, and the information required for troubleshooting. The logs will appear in the panel named LogCat (do not confuse with Console). Each message in this list is accompanied by the following data:

<table>
<tr>
<td>Type of message</td>
<tr><td>**I** </td><td>Information</td><td>informative message</td></tr>
<tr><td>**D** </td><td>Debug</td><td>useful debugging message</td></tr>
<tr><td>**W** </td><td>Warning</td><td>warning message (exceptions that are not very important and do not have an important impact on the component appear as such messages)</td></tr>
<tr><td>**E** </td><td>Error</td><td>error message (exceptions that break a component appear as such messages)</td></tr>
<tr><td>**V** </td><td>Verbose</td><td>additional information displayed by the programs (generally on request, they are used to detect problems generally resulting from misconfiguration of programs)</td></tr>
</tr>

<tr>
<td>Time</td><td>Date and time at which the message was written</td>
</tr>

<tr>
<td>PID</td><td>The ID of the prosses that generated the message</td>
</tr>

<tr>
<td>Tag</td><td>Label or category of message (useful for filters)</td>
</tr>

<tr>
<td>Message</td><td>The actual message</td>
</tr>
</table>

#### Example

import Logs from './images/logs.png';

````kotlin
class MainActivity : AppCompatActivity() {
    private lateinit var firstButton: Button
    private lateinit var secondButton: Button
    private lateinit var editText: EditText

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // First method of adding a click listener
        firstButton = findViewById(R.id.btn)
        firstButton.setOnClickListener {
            BUTTON_PRESS_COUNTER += 1;
            Log.d(TAG, "Pressed this button $BUTTON_PRESS_COUNTER times");
        }
    }

    companion object {
        var BUTTON_PRESS_COUNTER = 0;
        var TAG = "MainActivity"
    }
}
````

##### Logcat

<img src={Logs} height="200" alt="Logcat"/>

## Exercices

import BMILayout from "./images/bmi_layout.png";

1. Use the layout elements explained in the lab to design an `xml` layout looking similar to the one below.

<img src={BMILayout} height="400" alt="BMILayout"/>

2. Create the `MainActivity` file associated to the `xml` layout and bind all the needed elements of the layout (for example: the button might be needed to add a click listener to it).

3. In `onCreate` function, write logs (`Verbose`, `Debug`, `Info`, `Warning`, `Error`). View them with the `Logcat`.

4. Add a click listener for the *Calculate* button that logs all the information entered by the user.

5. Override al the lifecycle methods and add logs on each one. The log message must contain a message specific to the event triggered. For example in the onCreate() callback you can write "onCreate has been called". Run your app and see the order in the callbacks get triggered.

6. When pressing the calculate button, gather all the information from the user and compute the BMI by the following formula ```BMI = weight / height_squared```. Display the resulting BMI on the screen, along with an indication about the BMI of the user.