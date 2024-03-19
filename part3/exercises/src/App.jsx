import { useState } from 'react'
import './App.css'
import HobbyIntroduction from './components/Introduction';

// Return to App.jsx and call the completed MyProjects component below HobbyIntroduction. Run the application to see your new gallery! Hit the Next button to see state in action!
import MyProjects from './components/Projects';

function App() {

  return (
    <>
    {/* Import and Call the new HobbyIntroduction component under your <h1> heading in App.jsx. */}
      <div className="App">
	  <h1>My Hobby: Family Friendly Outings</h1>
	  <HobbyIntroduction />
	  <MyProjects />
      </div>
    </>
  )
}

export default App
