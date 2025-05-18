# React Toast Popup

React Toast Popup is a simple and customizable toast notification component for React applications.

## Installation

You can install React Toast Popup via npm:

```jsx
npm install @milanthapa/react-toaster
```

## Usage

To use React Toast Popup in your React application, follow these steps:

Import the useToaster hook and necessary styles in your component:

```jsx
import useToaster from "@milanthapa/react-toaster";
```

Initialize the useToaster hook with your preferred position:

```jsx
const { ToasterComponent, triggerToast } =
  useToaster("top-left");
```

#### Postions

- "bottom-left"
- "bottom-right"
- "top-left"
- "top-right"

Use NotificationComponent in your JSX to display notifications:

```jsx
return (
  <div className="App">
    {ToasterComponent}
    {/* Your other JSX content */}
  </div>
);
```

Trigger notifications using the triggerToast function:

```jsx
triggerToast({
  type: "success",
  message: "Hello! Developers",
  duration: 3000,
});
```

#### Animations

You can specify an animation type for the notifications. The available animations are:

- "fade"
- "pop"
- "slide"

```jsx
triggerToast({
  type: "success",
  message: "Success message with a pop animation!",
  duration: 3000,
  animation: "pop",
});
```

## API

```jsx
useToaster(position: PositionType)
```

This hook returns an object with the following properties:

- `ToasterComponent`: React element representing the notification container.
- `triggerToast(toasterProps: ToasterProps)`: Function to trigger a notification with the specified properties.

`ToasterProps`
The ToasterProps function accepts an object of ToasterProps, which includes:

- type: Type of the notification (success, info, warning, error).
- message: Message to display in the notification.
- duration: Duration in milliseconds for which the notification should be displayed.
- animation (optional): Animation type for the notification (fade, pop, slide).

## Example

Here's a basic example of how to use React Toast Popup:

```jsx
import React from "react";
import useToaster from "@milanthapa/react-toaster";

function App() {
  const { ToasterComponent, triggerToast } =
    useToaster("top-left");

  const showToastMessage = () => {
    triggerToast({
      type: "success",
      message: "This is a success message!",
      duration: 3000,
    });
  };

  return (
    <div className="App">
      {ToasterComponent}
      <h1>Toast Component</h1>
      <button onClick={showToastMessage}>Show Success</button>
    </div>
  );
}

export default App;
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.