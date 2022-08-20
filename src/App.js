import logo from './logo.svg';
import './App.css';
import nlopt from 'nlopt-js';
import { useEffect } from 'react'

function App() {

  // 🆗 Ship it
  useEffect(() => {
    const getUsers = async () => {
      await nlopt.ready
      const opt = new nlopt.Optimize(nlopt.Algorithm.LD_SLSQP, 2);
      console.log("OPT", opt)

      opt.setMinObjective((x, grad) => {
        if (grad) {
          grad[0] = 0;
          grad[1] = 0.5 / Math.sqrt(x[1]);
        }
        return Math.sqrt(x[1]);
      }, 1e-4);

      const res = opt.optimize([1, 6]);
      console.log("RES", res)

      nlopt.GC.flush();
    };



    getUsers(); // run it, run it

    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
