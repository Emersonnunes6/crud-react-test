import { useEffect } from "react"

function App() {

  useEffect(() => {
    fetch('/api/users');
  }, [])

  return (
    <>
    </>
  )
}

export default App
