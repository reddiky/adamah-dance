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
        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              Adamah Dance
            </div>
            <div className="sm:col-span-3">
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
