import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [entries, setEntries] = useState([])

  useEffect(() => {
    axios.get('/api/entries')
    .then((response) => {
      setEntries(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  })

  return (
    <>
      <h1>Hello</h1>

      {/* yaha hme ye jnna the ke kitne jokes h. to srf jokes likhne se nhi pta chlta islye humne .length use kiya h */}
      <p>Entries: {entries.length}</p>

      {
        entries.map((entries) => (
          <div key={entries.id}>
            <h2>{entries.name}</h2>
            <p>{entries.role}</p>
            <p>{entries.email}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
