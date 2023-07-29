import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogoMain from './components/Logo'
import Picture from './components/Pictures'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.instagram.com/melihdihya_films/" target="_blank">
         <LogoMain />
        </a>
      </div>
      <h1>Once we unlock our brains, there are no limits.</h1>
      <div className="Picture">
        <Picture />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>the source code</code> to move on
        </p>
      </div>
      <p className="read-the-docs">
        Lets see how far we can get when doing this daily
      </p>
    </>
  )
}

export default App
