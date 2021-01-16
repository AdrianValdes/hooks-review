# Rendering a component.

Rendering is the heartbeat of a React application. When something changes (props, state), the component tree rerenders, reflecting the latest data as a user interface. So far, useState has been our workhorse for describing how our components should be rendering.

We now have a good sense of what happens when we render a component. A component is simply a function that renders a user interface. Renders occur when the app first loads and when props andstate values change. But what happens when we need to do something after a render?
