// import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <Header/>
      </header>
      <main className="Body">
        <PostList/>
      </main>
    </div>
  );
}

export default App;
