
# Welcome to GeoApp!

## How to run the App

- npm i react-leaflet
- npm start

## Assumptions

1. It is assumed that it is preferable for the marker to only be used within the geofence, but it is also desirable for it to remain where it was originally placed. In other words, if the size of the geofence is edited and the marker ends up outside, it will not move.

## Considerations

1. The About view displays what has been implemented, extras, and what has not been implemented

2. A geofence vertex can be confirmed using both right and left clicks

3. To place a marker, right-click inside a geofence, and to delete it, left-click and press Delete

## Folder Structure

```
Geo App
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
└── src
    ├── actions
    ├── components
    ├── hooks
    ├── pages
    ├── reducers
    ├── resources
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── routes.js
    └── setupTests.js
```
