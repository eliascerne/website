import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
    <Header />
    <main className="main">
      <Home />
      <AboutMe />
    </main>
    </>
  );
}

export default App;
