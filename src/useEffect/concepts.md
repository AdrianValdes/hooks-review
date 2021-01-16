https://www.smashingmagazine.com/2020/11/react-useref-hook/

# What are effects. Examples are:

1. Fetching data (this is an as **asynchronous** task)
2. Reading from local storage
3. Registering and deregistering event listeners

This may sound strange at first, but effects defined with useEffect are invoked after render. To be more specific, it runs both after the first render and after every update. Effects don’t block the UI because they run asynchronously.

## The useEffect control flow at a glance

This section briefly describes the control flow of effects. The following steps are carried out for a functional React component if at least one effect is defined.

1. Based on a state, prop, or context change, the component will be re-rendered.

2. If one or more useEffect declarations exist for the component, React checks each useEffect to determine whether it fulfills the conditions to execute the implementation (the body of the callback function provided as first argument). In this case, “conditions” mean that one or more dependencies have changed since the last render cycle.

Dependencies are array items provided as the optional second argument of the useEffect call. Array values must be from the component scope (i.e., props, state, context, or values derived from the aforementioned).

1. After execution of every effect, scheduling of new effects occurs based on every effect’s dependencies. If an effect does not specify a dependency array at all, it means that this effect is executed after every render cycle.

## What are legitimate dependency array items?

If you use this optimization, make sure the array includes all values from the component scope (such as props and state) that change over time and that are used by the effect.
It is essential to understand the conceptual thinking of effects; the React team wants you to treat every value used inside of the effect as dynamic. So even if you use a non-function value inside the effect, and you are pretty sure this value is unlikely to change, you should include the value in the dependency array.

# Ideas

1. Inside any particular render, props and state forever stay the same. But if props and state are isolated between renders, so are any values using them (including the event handlers). They also “belong” to a particular render. So even async functions inside an event handler will “see” the same count value.
