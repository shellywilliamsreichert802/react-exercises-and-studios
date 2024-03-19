import { useState } from 'react';

export default function ReportForm() {
   const [notes, setNotes] = useState("");

   const handleChange = (event) => {
      setNotes(event.target.value);
   }

   return(
      <div>
         <form>
            <label>Add your report here: <input type="textarea" value={notes} onChange={handleChange}/>
            </label>
            <input type="submit" />
         </form>

         <p>Preview: {notes}</p>
      </div>);
}