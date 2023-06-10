# Intro-to-React-Workshop

This hands-on workshop introduces the fundamentals of building web applications using React and other modern UI frameworks. It's tailored to equip backend developers with the necessary frontend knowledge.

## Getting Started

### Step One - Install Create React App with TypeScript

Start by setting up a new React project with TypeScript template. For that, use the following command: `npx create-react-app my-app --template typescript`

Refer to the official [Create React App](https://create-react-app.dev/docs/getting-started) documentation for more information.

### Step Two - Start the Project

Next, familiarize yourself with the `package.json` file, focusing on the `script` section which governs project operations.

### Step Three - Create a New Component (The Easy Way)

To create a new React component:

1. Duplicate the `App.tsx` file and rename it to `HelloWorld.tsx`.
2. Delete all the content inside and update the class name and the export to reflect the new `HelloWorld` name.
3. Wrap "Hello World!" in an `h1` tag and save your file.
4. Update `app.tsx` to call our new `HelloWorld` component.

### Step Four - Create a New Component (Using CLI)

We can also create new components using the CLI tool `generate-react-cli`. To do that:

1. Run `npx generate-react-cli component GoodnightMoon`.
2. You'll need to configure and create a `generate-react-cli.json` file.
3. While setting up, choose none of the defaults except for TypeScript.
4. Finally, render the newly created component.

### Step Five - Set Up Routing

To allow navigation between different components, we need to set up routing.

1. Follow this guide on [adding a router](https://create-react-app.dev/docs/adding-a-router/) to your React application.
2. Clean the content of the `app.tsx` file and set up routing for `HelloWorld` and `GoodnightMoon` components.

### Step Six - Create a Homepage with Navigation

Let's create a main page with navigation to our existing components. Here, we introduce the `pages` directory, parallel to the `components` directory.

1. Duplicate the existing files and rename them accordingly.
2. Modify the `h1` tag to display "home" and add two anchor tags, each pointing to our components' pages.

### Step Seven - Integrate UI Libraries

To enhance the UI of our application, we'll integrate Material UI and its icons. We'll start by installing these libraries and using the default app bar component.

1. Install Material UI and Material Icons.
2. Extract the code snippet for the app bar from the official documentation.
3. Remove all components from the bar except the buttons, and label them as "Swagger" and "Docs".
4. Check the component API on how to use a button with a link and add the `href` to the button.

## Refactor and Cleanup

Finally, let's clean up the project for better organization and readability.

- Move all your components into a single `components` directory.
- Rename and reorganize files as necessary to reflect their purpose and content.
