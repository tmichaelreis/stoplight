# Stop Light code challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies

If you use `asdf` version manager, run `asdf install` from the root directory.

Otherwise, make sure you have nodejs installed.

## Start the app in development environment

To run the app, use `npm start` and visit `localhost:3000`

## About

The stoplight will run on a timer, advancing from Green -> Yellow -> Red, pausing on Green and Red, and moving through yellow quickly.

There is also a button to advance the stoplight state, if you're in a hurry.

The app is composed of a single `StoplightContainer` that manages the stoplight state, then presentational `Stoplight` & `Bulb` components that render the stoplight and bulbs themselves according to props passed from the container.
