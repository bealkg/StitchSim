import './App.css';
import Shape from './components/shape.js';
import Points from './components/points.js';
import Function from './components/function.js';
import Toggles from './components/toggles.js';
import Display from './components/display.js';
import Steps from './components/steps.js';

function App() {
  return (
    <div className="App">
      <div class="wrapper"> 
        <div class="header">
            <h1>Circular Threading Simulator</h1>
        </div>
        <div class="shape">
            <Shape />
        </div>
        <div class="points">
            <Points />
        </div>
        <div class="function">      
            <Function />
        </div>
        <div class="toggles">
            <Toggles />
        </div>
        <div class="display">
            <Display />
        </div>
        <div class="steps">
            <Steps />
        </div>
      </div>
    </div>
  );
}

export default App;
