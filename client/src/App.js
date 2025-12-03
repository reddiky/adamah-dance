import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './pages/Home'

export default function App() {
  return (
    <Router>
      <div className="App w-max mx-auto">
        <header className="App-header">
        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 items-center">
            <div className="sm:col-span-3 text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-indigo-600 xl:inline">Adamah Dance</span>
              </h1>
            </div>
            <div className="sm:col-span-3 flex justify-center sm:justify-end">
              <img src='https://cdn.pixabay.com/photo/2017/10/08/20/30/planet-2831514__340.png' className="App-logo" alt="logo" />
            </div>
          </div>
        </header>
        <div className='w-max'>
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
              <Switch>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
          </main>
        </div>
      </div>
    </Router>
  )
}
