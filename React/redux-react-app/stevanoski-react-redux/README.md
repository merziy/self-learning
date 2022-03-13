# React/Redux

Redux is a JavaScript library for managing the state of an application, which is a global object which holds information for later purposes. 

One pattern that Redux follows is that it holds the state for the entire appication in a single state, which is labled the Store. It follows a 'one app, one store, one state' model. However, components in React or any other framework are free to contain their own internal state. 

Redux also fdollows an immutability pattern, which means the state object and its properties aren't mutated directly; a new object is made instead, the application state is recalculated, and it is updated with the newly created object: the old state object is left intact.

## Redux parts

Redux has three main parts: Actions, Reducers, and Store.

### Store

As we have touched upon, the Store holds the state of the application. The store is an object, and not a class. We can subscribe to listen to events whenever the store updates. 

### Actions

Actions are plain JavaScript objects that describe what happened, but don’t describe how an app state changes. We send them to our store instance whenever we want to update the state of our application.

### Reducers

Reducers are pure functions that define the how an app state changes. In other words, they are used to recalculate the new application state or, at least a part of it.

It has a function called subscribe, which we can use for subscribing to changes made to the state tree, i.e. whenever we dispatch an action to the store.
