import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import Header from './components/Header';
import Post from './components/Post';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
