# Intro-to-React-Workshop

A hands-on workshop introducing the basics of building web applications using React and modern UI frameworks, geared towards equipping backend developers with frontend knowledge.

## Step one - Install create react app with typescript

https://create-react-app.dev/docs/getting-started
`npx create-react-app my-app --template typescript`

## Step two - Start the project

- explain the package.json's script section and how it works

## Step three - Create a new component - ("easy way")

- To start the "simple way"
  1 duplicate the App.tsx file and rename it HelloWorld.tsx
  2 delete all the content inside of it and rename the class to hello world and update the export
  3 wrap "Hello World!" in a h1 tag and save your file
  4 let's go into the app.tsx file and call our component

## Step 4 - Create a new component - (CLI)

1 npx generate-react-cli component GoodnightMoon
2 We have to configure & create a "generate-react-cli.json"
3 Pick none of the defaults except TS
4 now let's render this to the page

`generate-react-cli`

## Step 5 - Setup routing

https://create-react-app.dev/docs/adding-a-router/
Let's install react-router and get some simple routing going on in our application
1 Remove the content from the app.tsx file and setup routing to hello world and goodnight moon components

## Step 6 - Create a homepage with some navigation

(opinions ahead)
Let's create a pages directory as a sybling of the components directory.
I'm going to copy pasta everything and rename it.
Let's give this the h1 of "home" and we'll add two anchor tags with hrefs to our pages

## Step 7 UI libraries.

Install material UI
install material icons
Let's KISS and use the defualt app bar for today.
Copy the code snipit from the docs
Let's clear out everything but the buttons and add labels to Swagger and Docs
Now let's look at the componets api on how to use a button with a link
Add the href to the button

## Refactor and cleanup

Now lets rename and move things around to be a cleaner project
