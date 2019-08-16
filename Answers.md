1. What problem does the context API help solve?

The Context API solves the problem of needing to pass props between nested components without 'prop drilling'. This means that instead of passing props through every nested component, we can set up context that can be used by any component as long as we wrap our app in a `Provider` and use the `useContext` hook.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are events that are triggered when the user interacts with the UI in a certain way. Actions are created for every possible state that our application may be in when performing a certain task. For example, when retrieving data from an API asynchronously, we may have  `FETCH_DATA_START`, `FETCH_DATA_SUCCESS`, and `FETCH_DATA_FAILURE` actions. When these actions are triggered, the `reducer` updates the redux `store` accordingly, generating a new state for our application to display. The store holds our application state and is immutable, meaning that instead of our actual state being changed, a new state is generated each time an action is called. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global data that can be used throughout our application when using `Redux`. In `Redux`, our application state is kept in the `store`. Component state is state that is scoped inside of our actual component. We may want to use application state for data that is used throughout our application and must be updated, while component state may be used for mutable data that only applies to one or two components.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is a middleware that allows you to call action creators that return a function, rather than an object. The returned function will then return the action object. Therefore, thunk allows us to update the Redux `store` asynchronously. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux is my favorite state management system because I like how `actions` and `reducers` are organized inside of their own folders. In addition, I like how application state is kept inside of the `reducer` file and is easy to view and manipulate.
