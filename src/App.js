import "./App.css";
import Context from "./Context";
import { useState } from "react";
import { useReducer } from "react";
import Form, { reducer } from "./Form";


function App() {
  const [inputValue, setInputValue] = useState("");
  // const [lists, setLists] = useState([]);
  // const [lists, dispatch] = useReducer(reducer, []);
  const [editMode, setEditMode] = useState(false);
  const [editList, setEditList] = useState("");

  function addEduHandler(e) {
    e.preventDefault();
    setEditMode(true);
  }


  return (

    <Context.Provider
    value={{}}  >
      <div className="App">
        <h1>Resume Builder</h1>
        <div className="resumeSection">
          <h2>Experience</h2>
          <p>Experience Placeholder</p>
          <button>Add Experience</button>
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
          <p>Skill Placeholder</p>
          <button>Add Skill</button>
          <br></br>
        </div>
        <br></br>
        <button>Export</button>
      </div>
    </Context.Provider>


  );
}

export default App;
