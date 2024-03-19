// Import the data from data.json and useState from 'react' at the top of Projects.jsx.import data from '../data.json';
import data from './../data.json';
import { useState } from 'react';
// Inside the MyProjects component, start by setting up a state variable for the index so we can loop through our list of projects. You can do this with the following code: const [index, setIndex] = useState(0);.
export default function MyProjects() {
  
   const [index, setIndex] = useState(0);
// Now we need to set up some local variables and a return statement.

// Finally, above the return statement, we need to set up handleClick() like so:
  function handleClick() {
   if (index < data.projects.length-1)
   {
      setIndex(index + 1);
   }
   else
   {
      setIndex(0);
   }
  }

// First, set up a JavaScript variable that contains your list from data.json. Then set up a variable that contains the item in that list at the position determined by index.
  let projects = data.projects;
  let project = projects[index];

// Inside return, set up a button that contains the text, “Next”. Set the onClick attribute to {handleClick}.
  return (
    <div>
      <button onClick={handleClick}>
        Next
      </button>  
      <h2>{project.canvas} by {project.designer}
      </h2>
      <img src={project.photoUrl} alt={project.alt} />
    </div>
  );
}
//  /Below your button, add HTML that will nicely display all four properties of your JSON objects. */}
