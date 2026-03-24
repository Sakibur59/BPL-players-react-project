
import { Suspense } from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Players from './Components/Players/Players';

const fetchPlayer = async ()=>{
  const res =  await fetch('/public/PlayersData.json')
  return res.json();
}

function App() {

const playerPromise = fetchPlayer();
  return (
    <>
    <NavBar></NavBar>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <Players playerPromise={playerPromise}></Players>
    </Suspense>
    </>
  )
}

export default App
