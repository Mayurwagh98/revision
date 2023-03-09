import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CreateNotes } from '../pages/CreateNotes'
import { Login } from '../pages/Login'
import { Notes } from '../pages/Notes'
import { Signup } from '../pages/Signup'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/notes" element={<Notes />}/>
      <Route path="/notes/create" element={<CreateNotes />}/>
    </Routes>
  )
}

export {AllRoutes}
