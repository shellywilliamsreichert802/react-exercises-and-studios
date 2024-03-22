import { useState } from 'react';

export default function StatusChange () {
 // Initialize state variables
   const [notes, setNotes] = useState("");
   const [recipeStatus, setRecipeStatus] = useState(false);

       // Handle input change
   const handleChange = (event) => {
      setNotes(event.target.value);
   };

       // Handle form submission
   const handleSubmit = (event) => {
      event.preventDefault();
      setRecipeStatus(true);
  };

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>
               Have you tried this recipe? Add your notes here: 
               <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>
         {recipeStatus ? (
            <p>Your Recipe Notes: {notes}</p>
         ) : (
            <div>
               <p>My Recipe Notes aren't here!</p>
               <p>I have not tried this recipe!</p>
         </div>
       )}
    </div>
   );
}
