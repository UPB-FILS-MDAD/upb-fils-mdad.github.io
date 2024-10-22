"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[436],{1982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>h,default:()=>j,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var i=n(4848),a=n(8453);const r=n.p+"assets/images/linear_vs_relative-ed2290530506468cb698990331e04be5.png",s=n.p+"assets/images/project_structure1-2a05a7e09f765c04da7ab04f4ef53da0.png",d=n.p+"assets/images/project_structure2-a615b70c400e53ff06b2d878b89ac77a.png",o=n.p+"assets/images/logs-2dfcdcac73d09ff65188ad16ac46c9a8.png",l=n.p+"assets/images/bmi_layout-830eebdd76a8193e4c7bb69614e80766.png",c={sidebar_position:1,slug:"/lab/01"},h="01 - Layouts",u={id:"lab/01/index",title:"01 - Layouts",description:"View",source:"@site/docs/lab/01/index.md",sourceDirName:"lab/01",slug:"/lab/01",permalink:"/docs/lab/01",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-MDAD/upb-fils-mdad.github.io/edit/main/docs/lab/01/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/lab/01"},sidebar:"tutorialSidebar",previous:{title:"00 - Introduction to Kotlin and Android Studio",permalink:"/docs/lab/00"}},x={},p=[{value:"<a>View</a>",id:"view",level:2},{value:"Layouts",id:"layouts",level:2},{value:"<a>Linear layout</a>",id:"linear-layout",level:3},{value:"Example",id:"example",level:4},{value:"Width and Height attributes",id:"width-and-height-attributes",level:4},{value:"Specific attributes for LinearLayout",id:"specific-attributes-for-linearlayout",level:4},{value:"Views",id:"views",level:2},{value:"<a>TextView</a>",id:"textview",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>android:id</code> attribute",id:"androidid-attribute",level:4},{value:"<code>android:text</code> attribute",id:"androidtext-attribute",level:4},{value:"<a> EditText</a>",id:"-edittext",level:3},{value:"Example",id:"example-2",level:4},{value:"<code>android:inputType</code> attribute",id:"androidinputtype-attribute",level:4},{value:"<a>Button</a>",id:"button",level:3},{value:"Example",id:"example-3",level:4},{value:"<a>Radio Button</a>",id:"radio-button",level:3},{value:"Example",id:"example-4",level:4},{value:"Project structure",id:"project-structure",level:2},{value:"Logs",id:"logs",level:2},{value:"Example",id:"example-5",level:4},{value:"Logcat",id:"logcat",level:5},{value:"Exercices",id:"exercices",level:2}];function m(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"01---layouts",children:"01 - Layouts"})}),"\n",(0,i.jsx)(t.h2,{id:"view",children:(0,i.jsx)("a",{href:"https://developer.android.com/reference/android/view/View",children:"View"})}),"\n",(0,i.jsxs)(t.p,{children:["This class represents the basic building block for user interface components. A View occupies a rectangular area on the screen and is responsible for drawing and event handling. Any other UI components (eg: buttons, text fields, etc) are extentions of the ",(0,i.jsx)(t.code,{children:"View"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Views also respond to user actions. For instance, when a user taps a button (which is a View), the event is handled in the View. If you want to trigger something when the user taps a button, the View is also exposing listeners (callbacks) for such events."}),"\n",(0,i.jsx)(t.h2,{id:"layouts",children:"Layouts"}),"\n","\n",(0,i.jsx)(t.p,{children:"In Android, layouts are used to define the structure and arrangement of the user interface (UI) elements on the screen. A layout is a container that holds UI components like buttons, text views, and images. It organizes these components either in a specific arrangement or based on user-defined constraints. Android provides several types of layouts, each with a different method for positioning UI elements. Some examples are: Linear Layout, Relative Layout, Grid Layout, Constraint Layout."}),"\n",(0,i.jsx)("img",{src:r,height:"200",alt:"Linear Layout vs Relative Layout"}),"\n",(0,i.jsx)(t.h3,{id:"linear-layout",children:(0,i.jsx)("a",{href:"https://developer.android.com/develop/ui/views/layout/linear",children:"Linear layout"})}),"\n",(0,i.jsx)(t.p,{children:"Arranges its children in a single row (horizontal) or column (vertical). It creates a scrollbar if the length of the window exceeds the length of the screen."}),"\n",(0,i.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"\n   android:layout_width="match_parent"\n   android:layout_height="match_parent"\n   android:paddingLeft="16dp"\n   android:paddingRight="16dp"\n   android:orientation="horizontal"\n   android:gravity="center">\n\n   \x3c!-- Include other widget or layout tags here. These are considered\n           "child views" or "children" of the linear layout --\x3e\n\n </LinearLayout>\n'})}),"\n",(0,i.jsx)(t.h4,{id:"width-and-height-attributes",children:"Width and Height attributes"}),"\n",(0,i.jsxs)(t.p,{children:["Attributes ",(0,i.jsx)("a",{href:"https://developer.android.com/reference/android/view/ViewGroup.LayoutParams#attr_android:layout_height",children:(0,i.jsx)(t.code,{children:"android:layout_height"})})," and ",(0,i.jsx)("a",{href:"https://developer.android.com/reference/android/view/ViewGroup.LayoutParams#attr_android:layout_width",children:(0,i.jsx)(t.code,{children:"android:layout_width"})})," are used to specify the size of an element. This attributes are required for any view inside of a containing layout manager. Their value may be a fixed dimension (such as ",(0,i.jsx)(t.strong,{children:'"12dp"'}),") for a constant size or one of the special constants from the table below."]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.code,{children:"match_parent"})}),(0,i.jsx)("td",{children:"Will force the view to expand to take up as much space as is available within the layout element it's been placed in (its parent), minus the parent's padding, if any."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.code,{children:"wrap_content"})}),(0,i.jsx)("td",{children:"The view wll be large enough to fit its own internal content, taking its own padding into account."})]})]}),"\n",(0,i.jsx)(t.h4,{id:"specific-attributes-for-linearlayout",children:"Specific attributes for LinearLayout"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{valign:"top",children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"https://developer.android.com/reference/android/R.styleable#LinearLayout_orientation",children:(0,i.jsx)(t.code,{children:"android:orientation"})})}),(0,i.jsx)("td",{children:"used to specify whether the child views are displayed in a column or in a row"})]}),(0,i.jsxs)("tr",{valign:"top",children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"https://developer.android.com/reference/android/R.styleable#LinearLayout_gravity",children:(0,i.jsx)(t.code,{children:"android:gravity"})})}),(0,i.jsx)("td",{children:"specifies how an object should position its content, on both the X and Y axes, within its own bounds"})]}),(0,i.jsxs)("tr",{valign:"top",children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"https://developer.android.com/reference/android/R.styleable#LinearLayout_Layout_layout_weight",children:(0,i.jsx)(t.code,{children:"android:layout_weight"})})}),(0,i.jsx)("td",{children:"Indicates how much of the extra space in the LinearLayout is allocated to the view associated with these LayoutParams."})]}),(0,i.jsx)(t.h2,{id:"views",children:"Views"}),(0,i.jsx)(t.h3,{id:"textview",children:(0,i.jsx)("a",{href:"https://developer.android.com/reference/android/widget/TextView",children:"TextView"})}),(0,i.jsx)(t.p,{children:"A user interface element that displays text to the user."}),(0,i.jsx)(t.h4,{id:"example-1",children:"Example"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:' <LinearLayout\n      xmlns:android="http://schemas.android.com/apk/res/android"\n      android:layout_width="match_parent"\n      android:layout_height="match_parent">\n    <TextView\n        android:id="@+id/text_view_id"\n        android:layout_height="wrap_content"\n        android:layout_width="wrap_content"\n        android:text="@string/hello" />\n </LinearLayout>\n'})}),(0,i.jsxs)(t.h4,{id:"androidid-attribute",children:[(0,i.jsx)(t.code,{children:"android:id"})," attribute"]}),(0,i.jsx)(t.p,{children:"Allows you to identify an element (either a layout of a view) either in the xml file (when using relative based layouts) or in the Activity (to bind to the view and control it or change its attributes). It is recommended to add it for the views that you want to have access to in the Activity (for example: if you want to change the displayed text or if you want to receive click callbacks from buttons)."}),(0,i.jsxs)(t.h4,{id:"androidtext-attribute",children:[(0,i.jsx)(t.code,{children:"android:text"})," attribute"]}),(0,i.jsx)(t.p,{children:"Allows to specify the text to be displayed by the view element. Is also available for buttons or other views displaying a text."}),(0,i.jsx)(t.h3,{id:"-edittext",children:(0,i.jsx)("a",{href:"https://developer.android.com/reference/android/widget/EditText",children:" EditText"})}),(0,i.jsx)(t.p,{children:"A user interface element for entering and modifying text."}),(0,i.jsx)(t.h4,{id:"example-2",children:"Example"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:' <EditText\n     android:id="@+id/plain_text_input"\n     android:layout_height="wrap_content"\n     android:layout_width="match_parent"\n     android:inputType="text"/>\n'})}),(0,i.jsxs)(t.h4,{id:"androidinputtype-attribute",children:[(0,i.jsx)(t.code,{children:"android:inputType"})," attribute"]}),(0,i.jsxs)(t.p,{children:["This attribute must be specified for each EditText element. For example, for plain text, the input type will be  ",(0,i.jsx)(t.code,{children:'"text"'}),"."]}),(0,i.jsxs)(t.p,{children:["Choosing the input type configures the keyboard type that is shown, acceptable characters, and appearance of the edit text. For example, if you want to accept a secret number, like a unique pin or serial number, you can set inputType to ",(0,i.jsx)(t.code,{children:'"numericPassword"'}),". An inputType of ",(0,i.jsx)(t.code,{children:'"numericPassword"'})," results in an edit text that accepts numbers only, shows a numeric keyboard when focused, and masks the text that is entered for privacy."]})]}),"\n",(0,i.jsx)(t.h3,{id:"button",children:(0,i.jsx)("a",{href:"https://developer.android.com/reference/android/widget/Button",children:"Button"})}),"\n",(0,i.jsx)(t.p,{children:"A user interface element the user can tap or click to perform an action."}),"\n",(0,i.jsx)(t.h4,{id:"example-3",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:' <Button\n     android:id="@+id/first_button"\n     android:layout_height="wrap_content"\n     android:layout_width="wrap_content"\n     android:text="@string/self_destruct" />\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'class MainActivity : AppCompatActivity() {\n    private lateinit var first_button: Button;\n    private lateinit var second_button: Button;\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n\n        // First method of adding a click listener\n        first_button = findViewById(R.id.first_button);\n        first_button.setOnClickListener {\n            val toast = Toast.makeText(this, "Hello World!", Toast.LENGTH_LONG);\n            toast.show();\n        }\n\n        // Second method of adding a click listener\n        second_button = findViewById(R.id.second_button);\n        val listener = object: View.OnClickListener {\n            override fun onClick(p0: View?) {\n                val toast = Toast.makeText(this@MainActivity, "Hello World!", Toast.LENGTH_LONG);\n                toast.show();\n            }\n        }\n        second_button.setOnClickListener(listener)\n    }\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"radio-button",children:(0,i.jsx)("a",{href:"https://developer.android.com/develop/ui/views/components/radiobutton",children:"Radio Button"})}),"\n",(0,i.jsx)(t.p,{children:"Radio buttons let the user select one option from a set of mutually exclusive options"}),"\n",(0,i.jsx)(t.h4,{id:"example-4",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<RadioGroup\n    android:layout_width="match_parent"\n    android:layout_height="wrap_content"\n    android:orientation="vertical">\n    <RadioButton android:id="@+id/radio_pirates"\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:text="Pirates"/>\n    <RadioButton android:id="@+id/radio_ninjas"\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:text="Ninjas"/>\n</RadioGroup>\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'findViewById<RadioButton>(R.id.radio_pirates).setOnCheckedChangeListener { buttonView, isChecked ->\n    Log.d("RADIO", "Pirates is checked: $isChecked")\n}\n\nfindViewById<RadioButton>(R.id.radio_ninjas).setOnCheckedChangeListener { buttonView, isChecked ->\n    Log.d("RADIO", "Ninjas is checked: $isChecked")\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"project-structure",children:"Project structure"}),"\n","\n",(0,i.jsx)("img",{src:s,height:"450",alt:"Logcat"}),"\n",(0,i.jsx)("img",{src:d,height:"450",alt:"Logcat"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"app/"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"src/"}),": The source code folder.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"main/"}),": This is the main source set for your app. It contains both your Java/Kotlin code and resources.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"java/"}),": Contains all the Kotlin or Java source files for your app. This is where your Activity, ViewModel, and other classes go."]}),"\n",(0,i.jsx)(t.p,{children:"Example: com.example.myapp.MainActivity.kt (for Kotlin) or MainActivity.java (for Java)."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"res/"}),": This directory contains all non-code resources (like images, layouts, strings, etc.). Subfolders include:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"layout/"}),": XML files that define the layout of your activities and fragments (UI elements)."]}),"\n",(0,i.jsx)(t.p,{children:"Example: activity_main.xml"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"drawable/"}),": Image files (PNG, JPEG, SVG), vector drawables, and other graphics."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"values/"}),": XML files that contain constant values like strings (strings.xml), dimensions (dimens.xml), colors (colors.xml), and styles (styles.xml)."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"mipmap/"}),": Contains launcher icons for different screen densities."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"AndroidManifest.xml"}),": The manifest file that declares app components, permissions, and other app-wide configurations."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"logs",children:"Logs"}),"\n",(0,i.jsx)(t.p,{children:"System logs are the most important information that DDMS can provide.\nSystem logs describe all the actions performed by the device, the exceptions that occurred, and the information required for troubleshooting. The logs will appear in the panel named LogCat (do not confuse with Console). Each message in this list is accompanied by the following data:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Type of message"}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)(t.strong,{children:"I"})," "]}),(0,i.jsx)("td",{children:"Information"}),(0,i.jsx)("td",{children:"informative message"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)(t.strong,{children:"D"})," "]}),(0,i.jsx)("td",{children:"Debug"}),(0,i.jsx)("td",{children:"useful debugging message"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)(t.strong,{children:"W"})," "]}),(0,i.jsx)("td",{children:"Warning"}),(0,i.jsx)("td",{children:"warning message (exceptions that are not very important and do not have an important impact on the component appear as such messages)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)(t.strong,{children:"E"})," "]}),(0,i.jsx)("td",{children:"Error"}),(0,i.jsx)("td",{children:"error message (exceptions that break a component appear as such messages)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)(t.strong,{children:"V"})," "]}),(0,i.jsx)("td",{children:"Verbose"}),(0,i.jsx)("td",{children:"additional information displayed by the programs (generally on request, they are used to detect problems generally resulting from misconfiguration of programs)"})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Time"}),(0,i.jsx)("td",{children:"Date and time at which the message was written"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"PID"}),(0,i.jsx)("td",{children:"The ID of the prosses that generated the message"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Tag"}),(0,i.jsx)("td",{children:"Label or category of message (useful for filters)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Message"}),(0,i.jsx)("td",{children:"The actual message"})]})]}),"\n",(0,i.jsx)(t.h4,{id:"example-5",children:"Example"}),"\n","\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'class MainActivity : AppCompatActivity() {\n    private lateinit var firstButton: Button\n    private lateinit var secondButton: Button\n    private lateinit var editText: EditText\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n\n        // First method of adding a click listener\n        firstButton = findViewById(R.id.btn)\n        firstButton.setOnClickListener {\n            BUTTON_PRESS_COUNTER += 1;\n            Log.d(TAG, "Pressed this button $BUTTON_PRESS_COUNTER times");\n        }\n    }\n\n    companion object {\n        var BUTTON_PRESS_COUNTER = 0;\n        var TAG = "MainActivity"\n    }\n}\n'})}),"\n",(0,i.jsx)(t.h5,{id:"logcat",children:"Logcat"}),"\n",(0,i.jsx)("img",{src:o,height:"200",alt:"Logcat"}),"\n",(0,i.jsx)(t.h2,{id:"exercices",children:"Exercices"}),"\n","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Use the layout elements explained in the lab to design an ",(0,i.jsx)(t.code,{children:"xml"})," layout looking similar to the one below."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:l,height:"400",alt:"BMILayout"}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Create the ",(0,i.jsx)(t.code,{children:"MainActivity"})," file associated to the ",(0,i.jsx)(t.code,{children:"xml"})," layout and bind all the needed elements of the layout (for example: the button might be needed to add a click listener to it)."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.code,{children:"onCreate"})," function, write logs (",(0,i.jsx)(t.code,{children:"Verbose"}),", ",(0,i.jsx)(t.code,{children:"Debug"}),", ",(0,i.jsx)(t.code,{children:"Info"}),", ",(0,i.jsx)(t.code,{children:"Warning"}),", ",(0,i.jsx)(t.code,{children:"Error"}),"). View them with the ",(0,i.jsx)(t.code,{children:"Logcat"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Add a click listener for the ",(0,i.jsx)(t.em,{children:"Calculate"})," button that logs all the information entered by the user."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'Override al the lifecycle methods and add logs on each one. The log message must contain a message specific to the event triggered. For example in the onCreate() callback you can write "onCreate has been called". Run your app and see the order in the callbacks get triggered.'}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["When pressing the calculate button, gather all the information from the user and compute the BMI by the following formula ",(0,i.jsx)(t.code,{children:"BMI = weight / height_squared"}),". Display the resulting BMI on the screen, along with an indication about the BMI of the user."]}),"\n"]}),"\n"]})]})}function j(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var i=n(6540);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);