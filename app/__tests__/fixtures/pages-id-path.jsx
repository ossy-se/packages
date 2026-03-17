import React from 'react'

const Home = () => <div>Home</div>
const About = () => <div>About</div>

export default [
  { id: 'home', path: '/', element: <Home /> },
  { id: 'about', path: '/about', element: <About /> },
]
