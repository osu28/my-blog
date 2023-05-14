// import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Blog</h1>
      </header>
      <main>
        <PostList />
      </main>
    </div>
  );
}

export default App;
