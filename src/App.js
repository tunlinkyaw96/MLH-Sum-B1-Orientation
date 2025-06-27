import "./App.css";
import { useState } from "react";
import Form from "./Form";
import SkillForm from "./SkillForm";
import ExperienceForm from "./ExperienceForm";

function App() {
  const [editMode, setEditMode] = useState(false);
  const [skillEditMode, setSkillEditMode] = useState(false);
  const [experienceEditMode, setExperienceEditMode] = useState(false);

  function addEduHandler(e) {
    e.preventDefault();
    setEditMode(true);
  }

  function addSkillHandler(e) {
    e.preventDefault();
    setSkillEditMode(true);
  }

   function addExpHandler(e) {
    e.preventDefault();
    setExperienceEditMode(true);
  }


  return (
      <div className="App">
        <h1>Resume Builder</h1>

        <div className="resumeSection">
          <h2>Experience</h2>
          {experienceEditMode ? (
              <ExperienceForm />            
          ) : (
            <div>
              <p>Experience Placeholder</p>
              <button onClick={addExpHandler}>Add Experience</button>
            </div>
          )}
          <br></br>
        </div>

        <div className="resumeSection">
          <h2>Education</h2>
          {editMode ? (
              <Form />            
          ) : (
            <div>
              <p>Education Placeholder</p>
              <button onClick={addEduHandler}>Add Education</button>
            </div>
          )}
          
          <br></br>
        </div>

        <div className="resumeSection">         
          <h2>Skills</h2>
          {skillEditMode ? (
              <SkillForm />            
          ) : (
            <div>
              <p>Skill Placeholder</p>
              <button onClick={addSkillHandler}>Add Skill</button>
            </div>
          )}
        </div>
        
        <button>Export</button>
      </div>
  );
}

export default App;
