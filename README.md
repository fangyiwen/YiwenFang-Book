# Pro MERN Stack 2nd Edition book project

This is Dr. Yiwen Fang's repository for the project described in the book Pro MERN Stack (2nd Ed) by Vasan Subramanian.


---


# Chapter notes


## Chapter 8

* Create back-end modules by moving out the server.js code to individual files. The two key elements to interact with the module system. achieving modularization is `require` and `exports`. Note: 1) Do not forget `./` to import symbols from a file in the same directory. 2) On page 204, `require('graphql_date.js')` should be `require('./graphql_date.js')`.
* Create front-end modules and Webpack by splitting client-side JavaScript to multiple files. They are included in the `<script>` tags in the `index.html`. Note: `--mode development` can be added to get rid of the warning message in the command line when running Webpack on the `App.js`.
`export default` is used if a single function is being exported.
* Create transform and bundle by implementing `loaders` in Webpack. The Webpack configuration is defined in `webpack.config.js`.
* Create libraries bundle by using Webpack to include third-party libraries directly from a CDN. `splitChunks` is used to create two bundles, one for the application code and another for all the libraries, called `app.bundle.js` and `vendor.bundle.js`.
* Create hot module replacement to change modules in the browser while the application is running, instead of refreshing. HotModuleReplacementPlugin's `accept()` is used to accept the changes to a module which is rebuilt and received in the browser.
* Create debugging by implementing source maps to connect the line numbers in the transformed code to the original code. Note: The missing trailing comma in the `devtool: 'source-map',` will raise ESLint error.

* The screenshot of the browser console displaying the Webpack Hot Module Replacement logging is shown here:

![ch08](/readme_images/ch08.png)


---


## Chapter 7

* One server is separated into two servers, UI server to serve static content and API server to host just the API. Remove any unnecessary components of dependencies/devDependencies in `package.json` for UI and API. Note: The website is accessed via the port of 8000, instead of 3000, from localhost.
* Accommodate multiple environments via environment variables. `dotenv` should be installed. Therefore, predetermining the ports and the MongoDB URL is not needed.
* Create proxy-based architecture to accommodate the same-origin policy. The proxy called `http-proxy-middleware` should be implemented for UI server. Note: proxy method and enabling CORS for UI direct calls to API are both good.
* Use ESLint to check for suspicious code. The rules are set in the `.eslintrc` file, a JSON specification. ESLint plugin is installed for WebStorm. Note: 1) On page 191, `rules` should be `"rules"` with quotes; 2) On Page 193, `errors.push('Field "title" must be at least 3 characters long.');` and `if (issue.status === 'Assigned' && !issue.owner) {` should be put in `issueValidate`, not `issueAdd`; 3) Use `"node": true` instead of `"node": "true"` for any `.eslintrc`.
* Use ESLint for the front-end by adding ESLint checking to the UI directory. Remember to include the extensions such as js and jsx by using `--ext js,jsx`, and exclude the public directory by using `--ignore-pattern public`.
* Use React PropTypes to ensure passed-in parameters valid against this specification. The validators are the constants exported by `PropTypes` which should be included in `index.html` from the CDN.
* The screenshots from my environment show clean linter runs on both the API and UI side:

![ch07](/readme_images/ch07_1.png)

![ch07](/readme_images/ch07_2.png)


---


## Chapter 6

* I have studied the MongoDB basics and CRUD operations on the localhost. Robo 3T is also installed as a GUI.
* MongoDB Node.js Driver is installed for the project. Try to repeat `npm install mongodb@3` several times since it may fail sometimes. Remember to add Mongo's bin folder to the path environment variable to use `mongo` in the cmd. The Callbacks Paradigm is used for `trymongo.js`.
* `testWithAsync()` within `trymongo.js` is used by implementing the async/await paradigm.
* Create schema initialization in `init.mongo.js`. The main task is the creation of indexes.
* Create reading from MongoDB by using the List API. Remember to add ID as its GraphQL data type to be able to access this field `_id`. 
* Create writing to MongoDB by using the Create API. `findOneAndUpdate()` is used to update a counter and return the updated value, thus generating a sequence of numbers.

![ch06](/readme_images/ch06.png)


---


## Chapter 5

* I am starting doing Express and GraphQL. Express and REST API are investigated for its functions. The About API is a simple API in GraphQL. Note: graphql@14.2.1 is required to be installed for this part.
* Create GraphQL schema file separately from the JavaScript file. `fs` module and the `readFileSync` function are required to read the file into a string. Note: Add `-e js,graphql` to watch for changes in the server directory.
* Use the List API to fetch a list of issues. The tests are done via the Playground. Note: There is no comma separation for type Issue, Query, and Mutation in schema.graphql, as well as the query test in the Playground.
* Create List API Integration by fetching the data from the server for `loadData()`. Note: Use `await` keyword for asynchronous calls.
* Create Custom Scalar Types by using `scalar GraphQLDate` in the schema.graphql. A scalar type resolver is required in the server.js. Then the native Date type is converted in the App.jsx.
* Do The Create API by implementing an API for creating a new issue. Use `input` keyword for new input type `IssueInputs`. Note the format of comments for real documentation in the schema. Add `parseValue` and `parseLiteral` in the GraphQLDate resolver.
* Create API Integration by modifying the new issue in the UI. Pay attention the syntax `${}`. 
* Create Query Variables to deal with dynamic user input as arguments. Remember to use `$` before the variable names such as `$message`, and the variable needs to be declared before being accepted.
* Create Input Validations by implementing `enums` in the schema. `validateIssue()` is used for programmatic validations. The errors are generated by `UserInputError`. 
* Create Displaying Errors by dealing with transport errors. `graphQLFetch`, together with `try-catch`, is used in the App.jsx. `BAD_USER_INPUT` is used to check the type of errors.
* Here is the screen shot of the GraphQL "playground" displayed on localhost port 3000, with a successfully answered query.

![ch05](/readme_images/ch05.png)


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