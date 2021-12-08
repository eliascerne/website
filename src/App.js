import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ProjectInMind from './components/ProjectInMind'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <Header />
    <main className="main">
      <Home />
      <AboutMe />
      <Skills />
      <Qualification />
      <Services />
      <Portfolio />
      <ProjectInMind />
      <Contact />
    </main>
    </>
  );
}

export default App;
