import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

function App() {
  return (
    <>
    <Header />
    <main className="main">
      <Home />
      <AboutMe />
      <Skills />
    </main>
    </>
  );
}

export default App;
