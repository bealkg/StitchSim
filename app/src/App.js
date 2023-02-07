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
            <h2>Shape</h2>
            <Shape />
        </div>
        <div class="points">
            <h2>Points</h2>
            <Points />
        </div>
        <div class="function">      
            <h2>Function</h2>
            <Function />
        </div>
        <div class="toggles">
            <h2>Toggles</h2>
            <Toggles />
        </div>
        <div class="display">
            <h2>Display</h2>
            <Display />
        </div>
        <div class="steps">
            <h2>Steps</h2>
            <Steps />
        </div>
        <div class="footer">
            <h2>Footer</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
