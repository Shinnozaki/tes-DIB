import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavbarComponents from './components/NavbarComponents'
import {Home, AddData, EditData} from './pages'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponents/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/addData" element={<AddData/>} exact/>
            <Route path="data/editData/:id" element={<EditData/>} exact/>
          </Routes>
        </main>
      </BrowserRouter>
    )
  }
}
