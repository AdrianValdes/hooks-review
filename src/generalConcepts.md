# Rendering a component.

Rendering is the heartbeat of a React application. When something changes (props, state), the component tree rerenders, reflecting the latest data as a user interface. So far, useState has been our workhorse for describing how our components should be rendering.

We now have a good sense of what happens when we render a component. A component is simply a function that renders a user interface. Renders occur when the app first loads and when props andstate values change. But what happens when we need to do something after a render?

We use useEffect when a render needs to cause side effects. Think of a side effect as something that a function does that isn’t part of the return.

1. An alert, a console.log, or an interaction with a browser or native API is not part of the render. It’s not part of the return. In a React app, though, the render affects the results of one of these events.

2. Every time we render, useEffect has access to the latest values from that render: props, state, refs, etc.

### Think of useEffect as being a function that happens after a render. ==>

When a render fires, we can access the current state values within our
component and use them to do something else. Then, once we render
again, the whole thing starts over. New values, new renders, new
effects.

# Rules of hooks

1. ### Hooks only run in the scope of a component

   Hooks should only be called from React components. They can also be added to custom Hooks, which are eventually added to components. Hooks are not regular JavaScript—they’re a React pattern, but they’re starting to be modeled and incorporated in other libraries.

2. ### It’s a good idea to break functionality out into multiple Hooks

   Since Hooks are invoked in order, it’s a good idea to keep them
   small. Once invoked, React saves the values of Hooks in an array
   so the values can be tracked.

3. ### Hooks should only be called at the top level

   Hooks should be used at the top level of a React function. They
   cannot be placed into conditional statements, loops, or nested
   functions.
