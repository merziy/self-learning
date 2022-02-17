# Redux / React app

Redux is a library for managing application states using events called actions. The library serves as a centralized store for state that needs to be used across the entire application, with rules saying the state can only be updated in a predictable fashion.

Redux helps you manage your "global" state - a state that is needed across many parts of the applicaiton. The patterns in Redux make it easier to understand how the state in the app is being processed and how the application logic will behave when these changes occur.

It is particulary useful in apps that have a global state that is frequently updated and has a large codebase. The basic idea behind Redux is a single centralized place to contain the global state in an application, and specific patterns to follow when updating that state to make the code predictable. Redux expects that all state updates are done immutably, so they cannot be mutated.

Global state that is needed across the app should go in the Redux store. State that's only needed in one place should be kept in component state. In a React + Redux app, your global state should go in the Redux store, and your local state should stay in React components.

## Redux terminology

1. An action is a plain JavaScript object that has a type field. It's an event that describes something that happebed in the application.T he type field should be a string that gives this action a descriptive name, i.e., "domain/eventName."

2. A reducer is a function that receives the current state and an action object, updates the state if necessary, and returns the new state. It's an event listener which handles events based on the recieved action (event) type, i.e., (state, action) => newState.

3. The current Redux application lives in an object called the store, the store has a method called dispatch which updates the its state. Selectors are functions that extract specific pieces of information from a store state value, which helps to avoid repeating logic as different parts of the app need to read the same data.

4. A "slice" is a collection of Redux reducer logic and actions for a single feature in am app, typically defined together in a single file. The name comes from splitting up the root Redux state object into multiple "slices" of state.

5. Thunks help write asynchronous logic.
