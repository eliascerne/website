import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Qualification from './components/Qualification';

function App() {
  return (
    <>
    <Header />
    <main className="main">
      <Home />
      <AboutMe />
      <Skills />
      <Qualification />
    </main>
    </>
  );
}

export default App;
