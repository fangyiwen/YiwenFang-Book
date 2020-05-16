# Pro MERN Stack 2nd Edition book project

This is Dr. Yiwen Fang's repository for the project described in the book Pro MERN Stack (2nd Ed) by Vasan Subramanian.


---


# Chapter notes


## Chapter 2

* Write a single HTML file by using React to display a server-less Hello World on the browser. The React library is supported by a Content Delivery Network (CDN) online and no local React is required. Therefore, it is called server-less. No hard work here.
* Use JSX to substitute React.createElement() calls to redo the Hello Word HTML file. Compiler Babel is imported to transform JSX into React.createElement() calls.
* Install nvm and Node.js version 10. Install Express version 4. Be careful to choose the right version when typing the command line.
* Create an Express server to host a website by creating server.js. Be careful about the code order in Listing 2-3. Update package.json to change Start Script.
* Separate JSX from index.html by creating an external script App.jsx. Do not forget the file path for App.jsx in the index.html.
* Install Babel to locally transform JSX to pure JavaScript on build up. The command line "npx babel src --presets @babel/react --out-dir public" should be changed into "npx babel public\src --presets @babel/react --out-dir public" if you are in the project root directory. Update the script code block in the index.html.
* Install preset-env for older browsers support with syntactic changes. Browsers and their versions can be set in the .babelrc file. Update Babel polyfill in index.html to do new functions' implementations called polyfills.