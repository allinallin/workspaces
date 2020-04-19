# Workspaces Demo!

This is a demo of a practical example of [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).

## Packages

### @workspaces/client

Renders a button from @workspaces/component-library and fetches data from @workspaces/server. App generated using [create-react-app](https://github.com/facebook/create-react-app).

### @workspaces/server

Returns `{ message: Hello! }` for `GET /api`. Also exports a numeric `serverValue`. App generated using [express-generator](https://github.com/expressjs/generator).

### @workspaces/component-library

Builds and exports a button component. Runs storybook.

## Usage

`yarn start` will build the component library, start the client app, and start the server app.
