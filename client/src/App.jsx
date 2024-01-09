import { useState } from 'react'

function App() {

  return <main className='chatGPT-app'>
    <section className='chat-container'>
      <div className="layout"></div>
    </section>
    <footer>
      <input
        className='composebar'
        autoFocus
        type='text'
        placeholder='Ask Anythign'
        onChange={() => {}}
        
      />
    </footer>
  </main>;
}

export default App
