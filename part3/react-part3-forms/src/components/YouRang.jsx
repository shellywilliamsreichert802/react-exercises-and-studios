import { useState } from 'react';

export default function Doorbell() {
   const[bell, setBell] = useState("");

   const handleClick = () => {
      setBell(bell += "you rang...");
   }

   return(
      <div>
         <h1>Ring the Doorbell!</h1>
         <p>{bell}</p>
         <button onclick="handleClick">Ring Bell</button>
      </div>
   );
}