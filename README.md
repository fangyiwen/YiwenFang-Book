# Pro MERN Stack 2nd Edition book project

This is Dr. Yiwen Fang's repository for the project described in the book Pro MERN Stack (2nd Ed) by Vasan Subramanian.


---


# Chapter notes


## Chapter 5

* I am starting doing Express and GraphQL. Express and REST API are investigated for its functions. The About API is a simple API in GraphQL. Note: graphql@14.2.1 is required to be installed for this part.
* Create GraphQL schema file separately from the JavaScript file. `fs` module and the `readFileSync` function are required to read the file into a string. Note: Add `-e js,graphql` to watch for changes in the server directory.
* Use the List API to fetch a list of issues. The tests are done via the Playground. Note: There is no comma separation for type Issue, Query, and Mutation in schema.graphql, as well as the query test in the Playground.


---


## Chapter 4

* Use `this.state` to capture the state of a component. The initial state is done in the component constructor by assigning the hard-coded issues as values to the variables (keys).
* `this.setState()` is used to modify the state by inserting one argument containing issues as the key. Be sure to initialize the issues as empty array ([]) before using `this.setState()`. Asynchronous `this.setState()` is realized by using `setTimeout()`. `componentDidMount()` is called to ensure the DOM is guaranteed to be ready. Therefore, async state initialization is done.
* A new copy of updated array and object are needed before `this.setState` is performed. Note: `this.state` here is treated as immutable, and we can't operate directly on it. Remember to use a fresh array of issues in the `setState()` call.
* Lift state up to IssueList by moving the state and initial state loading method. Remember to use `this.props` to get data. Note: `bind` method is used to refer correct `this` for the correct scope.
* Create event handling by implementing `onClick` and `onSubmit` for the form. Remember to do `this.handleSubmit = this.handleSubmit.bind(this)`. Do not forget `preventDefault()` when clicking the Add button.
* Create stateless components by substituting component classes with functions. Note: The classes must have no states, but dependence on props is optional.
* Here is the screen shot of the Issue Tracker screen displayed on localhost port 3000.

![ch04](/readme_images/ch04.png)


---


## Chapter 3

* Start to use React components instantiated from React classes, extended from the base class React.Component, in the JSX file. Introduce render() method to display the component. An instance can be created by using \<HelloWorld />. Caution: render() can only return single value.
* Compose components of IssueLIst from three components, i.e., IssueFilter, IssueTable and IssueAdd. Pay attention to the Fragment component since it does something like \<div> but has no effect on the DOM.
* Pass data using properties from a parent component to a child component. The key point is to use this.props in the child component to access associated attributes in the parent component. Remember {} to switch into the JavaScript world.
* Pass data using children to let the parent component access the children element. The key point is to use this.props.children for the parent component. Remember to wrap components within a parent component.
* Do dynamic composition by using generated set of components from an array of issues instead of hard-coded set of components. Be careful about JavaScript expressions within the curly braces. Update CSS in index.html and toDateString() in App.jsx.
* Here is the screen shot of the Issue Tracker screen displayed on localhost port 3000.

![ch03](/readme_images/ch03.png)


---


## Chapter 2

* Write a single HTML file by using React to display a server-less Hello World on the browser. The React library is supported by a Content Delivery Network (CDN) online and no local React is required. Therefore, it is called server-less. No hard work here.
* Use JSX to substitute React.createElement() calls to redo the Hello Word HTML file. Compiler Babel is imported to transform JSX into React.createElement() calls.
* Install nvm and Node.js version 10. Install Express version 4. Be careful to choose the right version when typing the command line.
* Create an Express server to host a website by creating server.js. Be careful about the code order in Listing 2-3. Update package.json to change Start Script.
* Separate JSX from index.html by creating an external script App.jsx. Do not forget the file path for App.jsx in the index.html.
* Install Babel to locally transform JSX to pure JavaScript on build up. Update the script code block in the index.html.
* Install preset-env for older browsers support with syntactic changes. Browsers and their versions can be set in the .babelrc file. Update Babel polyfill in index.html to do new functions' implementations called polyfills.
* Update scripts of package.json with custom commands to do the automation by using Babel --watch option for recompiling source change and nodemon -w option for restarting server when server code is changed.
* Here is the screen shot of the Hello World screen displayed on localhost port 3000.

![ch02](/readme_images/ch02.png)