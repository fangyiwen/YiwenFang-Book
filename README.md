# Pro MERN Stack 2nd Edition book project

This is Dr. Yiwen Fang's repository for the project described in the book Pro MERN Stack (2nd Ed) by Vasan Subramanian.


---


# Chapter notes


## Chapter 3

* Start to use React components instantiated from React classes, extended from the base class React.Component, in the JSX file. Introduce render() method to display the component. An instance can be created by using <HelloWorld/>. Caution: render() can only return single value, warped in \<div>\<div/>.
* Compose components of IssueLIst from three components, i.e., IssueFilter, IssueTable and IssueAdd. Pay attention to the Fragment component since it does something like <div> but has no effect on the DOM.
* Pass data using properties from a parent component to a child component. The key point is to use this.props in the child component to access associated attributes in the parent component. Remember {} to switch into the JavaScript world.
* Pass Data using children to let the parent component access the children element. The key point is to use this.props.children for the parent component. Remember to wrap components within a parent component.


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