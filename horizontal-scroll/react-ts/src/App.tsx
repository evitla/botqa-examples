import React from 'react'
import './App.css'
import Scroller from './components/scroller'

function App() {
  return (
    <div className="App">
      <Scroller>
        <div className="page page-1">
          <Scroller className="slider">
            <div className="slide" />
            <div className="slide" />
            <div className="slide" />
          </Scroller>
        </div>
        <div className="page page-2" />
      </Scroller>
    </div>
  )
}

export default App
