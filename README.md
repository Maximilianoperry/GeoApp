
# Welcome to GeoApp!

## How to run the App

**"Running in the terminal:**
- npm install
- npm install react-leaflet
- npm start

## Assumptions

1. It is assumed that it is preferable for the marker to only be used within the geofence, but it is also desirable for it to remain where it was originally placed. In other words, if the size of the geofence is edited and the marker ends up outside, it will not move.

## Considerations

**Overview:**
The "About" view displays what has been implemented, extras, and what has not been implemented.

**Geofence Selection:**
To select a geofence, simply click on it (it will turn red), and to deselect it, click again (verify if it was a right or left click).

**Geofence Vertex Confirmation:**
A geofence vertex can be confirmed using both right and left clicks.

**Marker Manipulation:**
To place a marker, right-click inside a geofence, and to delete it, left-click and press "Delete".

**Manual Vertex Editing:**
Use the right sidebar to manually edit the vertices.

**Functionality in Editable View:**
Within the "Editable" view, the requested functionalities implemented via the map, cursor, and editor on the right side of the map can be carried out.


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
