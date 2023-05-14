// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change here
import PostList from './components/PostList';
import Header from './components/Header';
import Post from './components/Post';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <main className="App-main">
          <Routes> {/* Change here */}
            <Route path="/" element={<PostList/>} /> {/* Change here */}
            <Route path="/post-link" element={<Post/>} /> {/* Change here */}
          </Routes> {/* Change here */}
        </main>
      </div>
    </Router>
  );
}

export default App;
