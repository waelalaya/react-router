import React from 'react'
import { Route, Routes } from 'react-router'
import Description from './Description'
import Home from './Home'


function App() {
    return (
        <div>
            <Routes>
                <Route  path="/" element={<Home/>} />
                <Route path="/desc" element={< Description/>} />
            </Routes>
        </div>
    )
}

export default App
