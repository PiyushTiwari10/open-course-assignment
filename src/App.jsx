import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HelmetProvider } from 'react-helmet-async'
import BlogPost from './components/Blogpost'

function App() {

  return (
    <>
     <HelmetProvider>
        <BlogPost />
     </HelmetProvider>
    </>
  )
}

export default App
