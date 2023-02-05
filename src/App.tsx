import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
// estoy trabajando con las definiciones de types en otro archivo y aca lo importo
import { Sub, SubResponseFromApi} from './types';

interface AppState {
  sub: Array<Sub>
  newSubNumber: number
}

function App() {
  const [sub, setSub] = useState<AppState["sub"]>([])
  const [newSubNumber, setNewSubNumber] = useState<AppState["newSubNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchSubs = (): Promise<SubResponseFromApi> => {
      return (
      fetch('http://localhost:3000/subs')
      .then(res => res.json())
      )}
      
  }, [])

  const handleNewSubs = (newSub: Sub): void => {
    setSub(subs => [...sub, newSub])
    setNewSubNumber(n => n + 1)
  }
  
  return (
    <div className="App" ref={divRef}>
      <h2>New Subs {newSubNumber}</h2>
      <h1>midu subs</h1>
      <List subs={sub}/>
      <Form onNewSubs={handleNewSubs}/>
    </div>
);

}

export default App;
