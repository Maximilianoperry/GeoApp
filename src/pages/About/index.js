import React from "react";
import Header from "components/Header";
import "./DrawMap.css";
import image01 from "./image01.jpg"; // Import the image here

const DrawMap = () => {
  return (
    <>
      <Header title="About" />

      <div className="row">
        <div className="col text-center">
          <h2>Project designed by Maximiliano Perry</h2>
          <div className="image-container">
            <img src={image01} alt="Project" className="round-image" />
          </div>
          <div className="col">
            <h3>Implementations</h3>
            <ul className="implementation-list">
              <li>Manually create and/or delete one or more geofences within a map.</li>
              <li>Select a specific geofence within the already created ones, the selection must be clearly visible (can be selected by left-clicking on it or pressing the edit button).</li>
              <li>Manually edit the vertices of a geofence.</li>
              <li>Add one or more markers within a geofence (they can only be added within the geofence, but if they end up outside it when editing its shape, so that no point of interest is lost).</li>
              <li>Remove one or more markers inside a geofence (left-click to bring up a popup and then press delete).</li>
              <li>Everything can be simulated in the editable view.</li>
            </ul>
            <h3>Extras</h3>
            <ul className="implementation-list">
              <li>Add a polyline.</li>
              <li>Add a view for a basic map, without being edited.</li>
            </ul>
            <h3>Not implemented</h3>
            <ul className="implementation-list">
              <li>Delete zones within a geofence, these are called keep out zones and are useful to avoid dangerous areas or sets of trees within the field.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawMap;
