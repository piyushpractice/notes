 Dom=>document object model
    help in manuplating or chage html.
    make html and css interactive.

it is an object model in javascript.
  DOM convert your html in object which can be read bt javascript.
    DOM=> html=>object=>javascript.
      browser
          console.log
          dom
          webapi
  
 javascript is part of v8 engine.
 bom=>browser object modle
 web API
#dom 
  document
  eent
  domAPI
BOM  
  history
  navigator
  window
  location
wepAPI
  fetch
  setTimeOut
  location
  websocket


BEHIND THE SCENE WORKING OF BROWSER
   browser is proportional to server
   browser=>htlm=>in string format=>parsing(html parser do this work)which convert string into tree and this tree is colled DOM tree.
   DOM tree  =>

   same way css also came to the browser.
    css=>cssom(css object modle)


    DOM TREE + CSSOM => render TREE.
    <h1>Hello</h1>
<p style="display:none">Hidden</p>
body
 ├── h1
 └── p


 Document
│
└── html
    │
    ├── head
    │   │
    │   └── title
    │       │
    │       └── "My Website"
    │
    └── body
        │
        ├── h1
        │   │
        │   └── "Welcome"
        │
        ├── div
        │   │
        │   ├── p
        │   │   │
        │   │   └── "First Paragraph"
        │   │
        │   └── button
        │       │
        │       └── "Click Me"
        │
        └── footer
            │
            └── "Copyright"






   node      DOM Tree = Collection of Nodes

 dom act as a bridge i.e it convert html into object and give it to javascript.  
 Everything here is a node:

Document node
body node
h1 node
p node
"Hello" text node
"Welcome" text node



MaNIPULATION.

  SELECTION OF AN ELEMENT




  difference btw nodelist(reload) and html collection(it is live)


  nodelist point toward tree ie node 
  whereas html collection only have html element.


  We always use document.querySelector();
  We always use document.querySelectorAll();

  document.getElementById()
  document.getElementsByClassName()


  console.log(body.childNode);
  console.log(body.childrens);


  nodelist => ye sabhi cheezo ko node me cont karta hai ie blank spaces,linebreak,whitespace =text node

  html collection points only elements.


  console.log(main.childNode);=>this will give nodelist
  console.log(main.children);=>this will gives childrens





  
