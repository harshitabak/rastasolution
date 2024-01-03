

import React from 'react'
import Home from './components/Home'
import "./App.css"
import { BrowserRouter as Router, Route ,Routes  } from 'react-router-dom'
import Recipeid from './components/Recipeid'
import Category from './components/Category'
import Searchelement from './components/Searchelement'
const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route  path ='/' element ={<Home/>}/>
        <Route path='/:idMeal' element ={<Recipeid/>}/>
        <Route path='/category/:name' element ={<Category/>}/>
        <Route path='/search/:searchTerm' element ={<Searchelement/>}/>

      </Routes>
    </Router>

    </div>
  )
}

export default App

