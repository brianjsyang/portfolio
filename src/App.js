import Home from './components/home/home';
import ProjectView from './components/projectView/projectView';
import About from './components/about/about';

import './App.styles.scss';

function App() {
  return (
    <div>
      <Home id="home" />
      <div id="project">
        <ProjectView />
      </div>
      <div id="about">
        <About />
      </div>
    </div>
  );
}

export default App;
