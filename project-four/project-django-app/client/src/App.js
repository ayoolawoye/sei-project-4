import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/skills')
      console.log(await res.json())

    }
    getData()
  })
  return <h1>Hello Ayo</h1>
}

export default App
