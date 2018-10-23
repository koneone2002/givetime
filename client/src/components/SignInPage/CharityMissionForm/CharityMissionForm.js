
import React from "react";
import Foundation from 'react-foundation';
import CharityMissionFormBack from "./CharityMissionFormBack";
import SubmitButton from "./SubmitButton";
import "./CharityMissionForm.css"


const CharityMissionForm = ({ size, children }) => (

  <CharityMissionFormBack>
  <form action="charity-form-control">
  <div className="inputs">
    <h1>Thanks for joining us!</h1>
    <h3>Please take some time to create your charity profile.</h3>
    <label htmlFor="missionStatement">Mission Statement</label>
    <textarea rows="6" cols="50"/>

  </div>
  <label htmlFor="profileImage">Charity Profile Image</label>
  <div className="browseInputs">
  
  <div className="innerBrowse">
  <input class="input-group-field" type="browse" />
      <button class="browseBubutton">Browse</button>
      <button class="uploadButton">Upload</button>


  </div>

  </div>
  
  <SubmitButton />
  
</form>
  
</CharityMissionFormBack>



);

export default CharityMissionForm;