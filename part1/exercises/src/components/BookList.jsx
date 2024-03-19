export default function BookList() {
   let books = "2024 Books";
   let book1 = "https://m.media-amazon.com/images/I/31kLq+Y134L._SY445_SX342_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/81fRmf4C7IL._SY522_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/81zVzQ7mmqL._SL1500_.jpg";

   return (
      <div>
         <h3>{books}</h3>
         <img src={book1} alt="The Southern Killer" />
         <img src={book2} alt="A Place for Us" />
         <img src={book3} alt="The Way It Works" />
      </div>      
   );
}