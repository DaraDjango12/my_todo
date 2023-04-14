import React from 'react'
import Navigation from './components/Navigation'
import { Route,Routes } from 'react-router-dom'
import Home from './screens/Home'
import TaskScreen from './screens/TaskScreen'

const Router = () => {
  return (


    <div>
        <Navigation/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/tasks' element={<TaskScreen/>}/>

        </Routes>
        


    </div>
  )
}

export default Router