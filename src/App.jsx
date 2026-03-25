
import { Suspense, useState } from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Players from './Components/Players/Players';

const fetchPlayer = async ()=>{
  const res =  await fetch('/public/PlayersData.json')
  return res.json();
}

function App() {
  const [coin,setCoin] = useState(50000)

const playerPromise = fetchPlayer();
  return (
    <>
    <NavBar coin ={coin}></NavBar>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <Players playerPromise={playerPromise} coin={coin} setCoin={setCoin}></Players>
    </Suspense>
    </>
  )
}

export default App
