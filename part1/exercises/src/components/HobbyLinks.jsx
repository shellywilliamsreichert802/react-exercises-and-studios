
import React from 'react';

export default function HobbyLinks() {
  // Define an array of hobby links
    let hobbyLinks = [
          // Define an array of hobby links
    const hobbyLinks = [
      "[1](https://www.tripadvisor.com/Attractions-g28934-Activities-zft11306-Illinois.html/hobby1)",
      "[2](https://www.si.com//hobby2)",
      "[3](https://www.foodandwine.com/hobby3)"
  ];
  

    // return (
    //    <div>
    //       <h3>{books}</h3>
    //       <img src={book1} alt="The Southern Killer" />
    //       <img src={book2} alt="A Place for Us" />
    //       <img src={book3} alt="The Way It Works" />
    //    </div>      
    // );
 

    // Create <a> tags for each hobby link
    const linkElements = hobbyLinks.map((link, index) => (
        <li key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                Link {index + 1}
            </a>
        </li>
    ));

    // Return the list of <a> tags
    return (
        <div>
            <h3>My Favorite Hobbies:</h3>
            <ul>{linkElements}</ul>
        </div>
    );
};

export default HobbyLinks;