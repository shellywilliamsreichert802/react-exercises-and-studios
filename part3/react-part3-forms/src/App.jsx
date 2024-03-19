import { useState } from 'react'
import './App.css'
import ShoeButton from './components/ShoeButton';
import ReportForm from './components/ReportForm';
// import YouRang from './components/YouRang';


function App() {

  return (
    <>
      <div className="App">
	  <ShoeButton />
	  <ReportForm />
      </div>
    </>
  )
}

export default App
