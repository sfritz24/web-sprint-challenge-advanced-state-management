1. What problem does the context API help solve?

    it allows us to pass data around without needing to pass it down as props espcially if those components don't need or use that data.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    actions are the things we're expecting to happen when a user does something to the page, reducers call that action when the user does the specified action(click, scroll, type), store is where we manage it all it's seperate from the app but allows us to still access it where ever we need to.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    application state is state that the whole application has access to it and the state gets passed down, component state is state that is just within that component, application state is fine when you have smaller applications and component state would be better for larger applications since it can be difficult to pass props down all the time.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    it allows us to do to make promises when fetching data, sometimes it might take a while to get our data and this will allow us to let the users know that the data is coming or if there was some sort of error, middlewear goes through the motion of the action-creators without actually calling them.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    right now i prefer context since it seems simplier to use and right now we're just building simple applications but that might change when i start working on larger projects.