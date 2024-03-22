import { useState } from 'react';

export default function BoardAssignment () {
   const [ boardName, setBoardName ] =useState("No boards yet!");

   const boards = [
      // create three objects, each representing a board. Each object should have a label (the display name) and a value (a unique identifier)
      { label: "Breakfast", value: "breakfast" },
      { label: "Desserts", value: "desserts" },
      { label: "Healthy Eats", value: "healthy" }
   ];

   let boardOptions = boards.map((board, index) => {
      return <option key={index} value={board.value}>{board.label}</option>;
 })
 
    const handleChange = (event) => {
       setBoardName(event.target.value);
    }
 
    return (
       <div style={{paddingTop: "50px"}}>
       <label>Save to Board: </label>
       <select value={boardName} onChange={handleChange}>
          {boardOptions}
       </select>
 
       <p>Saved to {boardName}!</p>
       </div>
    ); 
 }
 // Use the map() function to generate <option> tags for each board. Place these options within the <select> element.
/* <select onChange={handleChange}>
   {boards.map((board) => (
      <option key={board.value} value={board.value}>
         {board.label}
      </option>
   ))}
</select> */

// boardName: Initialize the boardName state variable using the useState hook. Set the initial value to 'no boards yet!'
// Handle User Selection: Implement the handleChange function. Update the boardName state with the selected value from the dropdown:
// const [boardName, setBoardName] = useState('no boards yet!');

// const handleChange = (event) => {
//    setBoardName(event.target.value);
// };

// Display User Selection: In your HTML, display the selected board name:
/* <div>
   <p>Selected board: {boardName}</p>
</div> */



//    return (
//       <div style={{paddingTop: "50px"}}>
//       <label>Save to Board: </label>
//       <select value={boardName} onChange={handleChange}>
//       </select>

//       <p>Saved to {boardName}!</p>
//       </div>
   // );
// }
