import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

interface Subs {
  nick: string
  avatar: string
  subMonth: number
  description?: string
}

interface AppState {
  sub: Array<Subs>
  newSubNumber: number
}

const initiaState = [
  {
    nick: 'luijo',
    avatar: 'https://i.pravatar.cc/150?u=luijo',
    subMonth: 3,
    description: 'Luijo es el creador de todo'
  },
  {
    nick: 'Antonio',
    avatar: 'https://i.pravatar.cc/150?u=antonio',
    subMonth: 4
  }
]

function App() {
  const [sub, setSub] = useState<AppState["sub"]>([])
  const [newSubNumber, setNewSubNumber] = useState<AppState["newSubNumber"]>(0)

  useEffect(() => {
    setSub(initiaState)
  }, [])
  

  return (
    <div className="App">
      <h1>midu subs</h1>
      <List subs={sub}/>
      <Form />
    </div>
);

}

export default App;
