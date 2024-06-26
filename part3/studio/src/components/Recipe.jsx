// import React from 'react';
// import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://natashaskitchen.com/wp-content/uploads/2018/05/Banana-Bread-Recipe-6.jpg";
   let authorPhoto = "https://natashaskitchen.com/wp-content/uploads/2023/02/NK-Head-Red-Shirt-small.png";
   let authorName = "Natasha's Kitchen";

   return (
      <div>
         <img src={authorPhoto} alt = {authorName} style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Visit Author's Website</a>
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      "3 very ripe bananas",
      "3/4 c granulated sugar",
      "3 large eggs (lightly beaten)",
      "1/2 c unsalted butter (room temp)",
      "1 1/2 c all purpose flour",
      "1 tsp baking soda",
      "1/2 tsp salt",
      "1/2 tsp vanilla extract",
      "1 c walnuts",
      "1/2 c rasins (sub craisins)",
      ];

   let ingedientListItems = ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>
   })
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            {ingedientListItems}
         </ul>
      </div>
   );
}  
      
const RecipeDescription = () => {
   // const recipeTitle = "Delicious Banana Bread"; // Replace with the actual recipe title
   // const recipeDescription = "A moist and flavorful banana bread recipe perfect for breakfast or snack."; // Replace with the actual recipe description
   return (
      <div> 
         <div>
            <h1>Delicious Banana Bread</h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}


const RecipePhoto = () => {
   return (
      <img src="https://natashaskitchen.com/wp-content/uploads/2018/05/Banana-Bread-Recipe-6-250x250.jpg" alt="Delicous Banana Bread" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
