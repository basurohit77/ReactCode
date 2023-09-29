# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Relation of Store Reducer and Dispatcher
1) STORE: /src/client/index.js
   
   First create a Store and publish the store with Provider from the top(Root) level.
```
   const store = createStore(reducer, applyMiddleware(thunk, logger));
   	render(
         <Provider store={store}>
	 	<I18nextProvider i18n={i18n}>
   		<PageEntry />
   		</I18nextProvider>
	   </Provider>,
	   getAppRootElement(),
	);
```
   Store will attach a RootReducer 

2) ROOTREDUCER: /src/client/redux/Reducers/RootReducer.js
   
   RootReducer is the single entry point for all the reducers defined, as it combineReducers


3) REDUCER: /src/client/redux/Reducers/UserReducer.js
   
   Reducers hold the state (prev/current) of the variables, needed in the Form/UI.
   Reducer update the state of the variable  according to the ACTION.

4) ACTION: /src/client/redux/ActionTypes/UserActions.js
   
   Actions are the functions defined, which return a action type with payload, if applicable.
   
   ```
    const fetchUserDataBegin = () => ({
   	type: c.S_FETCH_USER_DATA_BEGIN,
     });
   ```
   Actions are optional, as we can define the action within the dispatcher.
   ```
      dispatch({type: "c.S_FETCH_USER_DATA_BEGIN", payload: {}});
   ```
   But if the payload is big, better use action function.
 
 6) DISPATCHER: When ever an event happen on a Form/UI, if we want to preserve/update the state 
    of a component and also to view it in different component, we use dispatcher.
    
	A) Function Component:

	We create a Dispatcher with useDispatch.  (/node_modules/react-redux/es/hooks/useDispatch.js)
```
	const dispatch = useDispatch();
```				     
	Dispatch is able to find the Store of the application from PROVIDER.
	STORE knows the ROOTREDUCER.
 	With the help of Dispatcher we can wrap an ACTION and a Payload. 
	STORE will find the ROOTREDUCER. 
	ROOTREDUCER according to the ACTION-Type will call a designated REDUCER., where the State will be saved.
	Once the state is saved in the  Reducer and store inside the STORE, we can fetch it in any component by using useSelector
 ```
	const myState4 = useSelector((state) => state.productsReducer)
```
        Here `productsReducer` is a particular Reducer.
				   
       B) Class Component:
    
	With the help of Dispatcher we can wrap an ACTION and a Payload. 
	We use mapDispatchToProps function to wrap up our dispatcher, so that it can be link to the Store.
 ```
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
 		return {
   	            removeNotification: function removeNotification(id) {
                  	return dispatch((0, _NotificationActions.removeNotification)(id));
                    }
		};
	};

	Also to fetch the values store in the STORE we need a function mapStateToProps
```
	var mapStateToProps = function mapStateToProps(state) {
 				return {
                  			notifications: state.notifications.notifications
 				};
	  		     };
```



