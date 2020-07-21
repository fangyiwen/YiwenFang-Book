# Pro MERN Stack 2nd Edition book project

This is Dr. Yiwen Fang's repository for the project described in the book Pro MERN Stack (2nd Ed) by Vasan Subramanian.


---


# Chapter notes


## Chapter 15

* Create Git Repositories called `tracker-api` and `tracker-ui` for both api and ui. A `deploy` directory is created for deployment of this chapter. My deployment repos can be found here: https://github.ccs.neu.edu/yiwenfang/tracker-api and https://github.ccs.neu.edu/yiwenfang/tracker-ui.


---


## Chapter 14

* Create Sign-In UI by creating `SignInNavItem` to be placed in the navigation bar.
* Create Google Sign-In by using Google to retrieve the user's name. There are some tricky steps to enable the clickable "Sign in with Google" button. Note: 1) Activate Google Analytics API; 2) Create new OAuth client ID; 3) Add `http://localhost:8000` to `Authorized redirect URIs` and `Authorized JavaScript origins`; 4) Use the new client ID in place of YOUR_CLIENT_ID. Also remember to copy `sample.env` into a `.env` file.
* Create verifying the Google Token by Validating a token at the back-end. The Google authentication library `body-parser` and `google-auth-library` are used.
* Create JSON Web Tokens by using JSON Web Tokens to generate a token and send it back to the browser, thus persisting the session.
* Create Signing Out by implementing another API to sign out.
* Create Authorization by implementing a simple authorization rule.
* Create Authorization-Aware UI by making the UI aware of the signed-in status, i.e., prevent access at the UI in addition to the back-end.
* Create React Context by using React Context API to make components aware of the authentication status including Close, Delete, Submit buttons.
* Create CORS with Credentials by relaxing the CORS options for non-proxy mode, thus maintaining security. `cors` package is used to enable CORS for`/auth`.
* Create server rendering with credentials by including the authenticated information. `schema.graphql` is modified to implement the new API for the authenticated credentials. `graphQLFetch.js` is modified to include a cookie in the API request.
* Create cookie domain by testing for real domains. The domain `promernstack.com` and its subdomains are used. `127.0.0.1 api.promernstack.com ui.promernstack.com` is added to the `hosts` file in the Windows PC. Note: 1) `http://ui.promernstack.com:8000` is added to `Authorized redirect URIs` and `Authorized JavaScript origins` in the Google Developers Console; 2) `res.clearCookie('jwt')` is modified to `res.clearCookie('jwt', { domain: process.env.COOKIE_DOMAIN, });` in `auth.js`.
* The screenshot of the app with a user logged is shown below.

![ch14](/readme_images/ch14.png)


---


## Chapter 13

* Create higher order component for Toast by creating a new component to wrap each main view to add the `Toast` functionality, i.e., `ToastWrapper`.
* Create MongoDB aggregate by exploring MongoDB's `aggregates`. Note: `Lorem ipsum dolor sit amet, ${i}` is quoted with backticks.
* Create Issue Counts API by making the aggregate query to MongoDB.
* Create Report Page by constructing the UI for the Report page besides the working API.
* Create List API with pagination by modifying the List API to support pagination.
* Create pagination UI by creating minimalistic pagination bar to sue the new API.
* Create undo delete API by implementing an undo action on the delete operation.
* Create undo delete UI by initiating an undo button of a delete operation in the Toast message in the `IssueList` component. 
* Create text index API by implementing MongoDB's text index for a quick search.
* Create search bar by implementing new component for the search bar with `react-select`. Note: `/edit/${value}` should be quoted with backticks.
* The screenshot of the issues list page, and the report page are shown below.

![ch13](/readme_images/ch13_1.png)

![ch13](/readme_images/ch13_2.png)


---


## Chapter 12

* Create new directory structure by splitting the current source code into three directories. Note: 1) Delete right curly bracket in Page 378; 2) "rules", "error", "always", and "ignorePackages" should be in double quotes.
* Create basic server rendering by creating an HTML on the server side via `ReactDOMServer.renderToString()`.
* Create Webpack for the server by compiling files under the src directory for inclusion in the server side. 
* Create HMR for the server by restarting the server when this file is changed and using HMR for the rest included code.
* Create server router by modifying render.js to render the Page component instead of the About component.
* Create hydrate by loading React and letting it render the page.
* Create data from API by replacing `whatwg-fetch` with `isomorphic-fetch`. Note: 1) `render.jsx` is in `ui/server/`; 2) The correct code in Page 401 is `process.env.UI_SERVER_API_ENDPOINT = process.env.UI_API_ENDPOINT`.
* Create syncing initial data by passing the same initial data from the API call to the browser.
* Create common data fetcher by adding a `componentDidMount()` method in the `About` component. Note: We can use `initialData` instead of changing into `resultData`.
* Create generated routes by fixing the mismatch errors that React is showing and laying down the framework dealing with fetching data.
* Create data fetcher with parameters by making the `IssueEdit` component render from the server.
* Create data fetcher with search by implementing the data fetcher in the `IssueList` component.
* Create nested components by modifying the component `IssueList` to render its contained detail.
* Create redirects by sending a redirect in the response. Note: `parseInt(id, 10)` and consistency of `contents`.
* The screenshot of the page source for the Issues List page with a detail issue selected displayed in the browser is shown below.

![ch12](/readme_images/ch12.png)


---


## Chapter 11

* Create Bootstrap installation, and make a changed and visible UI. `react-bootstrap` and `bootstrap` are installed. A link to the Bootstrap stylesheet is added in `index.html`.
* Create Bootstrap buttons by replacing the Apply and Reset buttons in the Issue Filter.
* Create navigation bar by adding navigation links in the header and add a footer. The navigation bar is created with `Navbar`.
* Create Bootstrap Panel to show sections separately using a border and an optional heading. `Panel.Heading` and `Panel.Body` are used. Note: `<NavBar />` and `<Footer />` are kept in `Page.jsx`.
* Create Bootstrap Table by converting the plain table to make the table look better, expand to fit the screen, and highlight a row on hover. The entire row is clickable to select the issue to display the description.
* Create Bootstrap Forms by replacing the `<input>` and `<select>` options with the React-Bootstrap components. Note: Five pieces of code like `<option value=...>...</option>` should be retained.
* Create the grid system to let each field float or below its precedent if the width of the screen doesn't allow it. 
* Create inline forms by making inputs to fit in one line and closely related.
* Create horizontal forms to make the label appear to the left of the input, but each field appears one below the other. Bootstrap's `<Form>` is used to replace the plain `<form>`.
* Create validation alerts by using Bootstrap's `<Alert>` component. 
* Create toasts by using the component `Toast` to let the messages overlay the page as well as transition in and out. Note: Use `id: parseInt(id, 10)` for `graphQLFetch` when necessary.
* Create modals by replacing the in-page `IssueAdd` with a modal dialog. A new `IssueAddNavItem.jsx` is created to self-contain the operation of Create Issue. Note: `this.createIssue = this.createIssue.bind(this);` in `IssueList.jsx` should be deleted.
* The screenshot of the Create Issue modal is below:

![ch11](/readme_images/ch11.png)


---


## Chapter 10

* Create controlled components by displaying the currently active filter. `URLSearchParams` is used to extract the current value during `render()`.
* Create controlled components in forms by adding the Apply button and the Reset button for the filter. `onChange()` is trapped and `setState()` is used to update the state variable. `componentDidUpdate` is used to look for changes to properties. `showOriginalFilter` is also called from an event. Note: Replace the typo, double-quote, in the `status: params.get('status') || "` and `search: status ? `?status=${status}` : "` with the single-quote.
* Create more filters by adding a filter on the Effort field. `effortMin` and `effortMax` are added in the `schema.graphql`. `$gte` and `$lte` is set for MongoDB filter.
* Create typed input by adding two inputs for the effort filter. Two extra filter parameters from the URL's search parameters are involved in the `IssueList`. Two <input> fields in the IssueFilter are added. Note: Replace the typo, double-quote, in the `effortMin: params.get('effortMin') || "`, `effortMax: params.get('effortMax') || "`, and `params.toString() ? `?${params.toString()}` : "` with the single-quote.
* Create edit form by creating a complete form for the Edit page in `IssueEdit.jsx`. Note: 1) Replace `graphQLFetch(query, { id })` with `graphQLFetch(query, { id: parseInt(id, 10) })`; 2) Replace the typo, double-quotes, with single-quotes.
* Create number input by using number inputs for the effort field in the Edit page in place of a plain `<input>` element. Note: Replace the typo, double-quotes, with single-quotes.
* Create date input by checking the validity when the user has finished typing the date. `onBlur()` is used. Note: Replace the typo, double-quotes, with single-quotes.
* Create text input by handling the null check and use an empty string while loading data. Note: 1) `key={id}` should be put within `<TextInput ... />`; 2) Replace the typo, double-quotes, with single-quotes.
* Create update API by using `$set` operator. The actual resolver can be implemented in `update()`. `handleSubmit()` is used to call API to save the changes.
* Create updating an issue by writing `handleSubmit()` to make the call to the API to save the changes.
* Create updating a field by adding a Close button in every row of the `IssueTable`. `issueUpdate` is called to set the status to closed.
* Create Delete API by including the Delete API in the schema. Then the resolver is implemented to store all deleted issues in a new collection called `deleted_issues`.
* Create deleting an issue by adding the button and callbacks through `IssueTable` `to IssueRows`. `deleteIssue()` is implemented in the `IssueList`.
* Screenshots of the top page list and the edit pages are below:

![ch10](/readme_images/ch10_1.png)

![ch10](/readme_images/ch10_2.png)


---


## Chapter 9

* Create simple routing by implementing React Router. The page is split into two sections, a navigation bar and a contents section. Note: 1) `<Switch>` means only the first match's component is rendered; 2) The match is a prefix match; 3) `exact` is added as exact match.
* Create route parameters to supply parameters to the component. It isachievedd by using `:id` in the path. The `id` in the path can be accessed by `atch.params.id`.
* Create query parameters by using the Query String part of the URL. The parameter `status` is added to the `issueList` query. `URLSearchParams()` is used to interpret and parse the query string. `get()` is sued to access the status parameter and `graphQLFetch()` with status filter parameter is called to get the data. Remember to call `loadData()` if the query string changes with the help of `componentDidMount()`.
* Create Links by replacing `hrefs` with the `Link` component. It can be achieved by changing the name of the component from `<a>` to `<Link>` and the property `href` to `to`.
* Create programmatic navigation by implementing simple dropdown and replace the links. Trapping the changed dropdown value is done by `onChangeStatus`. The wrapped component is exported by using `withRouter()`.
* Create nested routes which means the beginning part of the path depicts one section of a page, and the latter part of the path depicts variation, i.e., any further definition. `dynamic routing` is used since it is evaluated during the process of rendering. The description fields are added in the `schema.graphql`. `findOne()` is called as the MongoDB filter. Update description fields in the MongoDB. The `IssueDetail` component is implemented. Note: `parseInt(id, 10)` is used to parse a string as a decimal value in `const data = await graphQLFetch(query, { id: parseInt(id, 10) });`. `this.props.match.path` is used to generate paths for the `IssueList` component integrated with the `IssueDetail` component. Finally, the current query string is added by injecting the location from `withRouter` in the `IssueTable.jsx`.
* Create browser history router by replacing `HashRouter` with `BrowserRouter` in `App.jsx`. Right refresh is achieved by adding routes for the path * to return index.html in `uiserver.js`. `publicPath: '/',` is added in `webpack.config.js` to make HMR works fine from any pages.
* The screenshot showing the functionality in action is below:

![ch09](/readme_images/ch09.png)


---


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