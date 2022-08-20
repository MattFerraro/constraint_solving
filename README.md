# Constraint Solving

This is a demo of using [nlopt](https://nlopt.readthedocs.io/en/latest/) from within a browser.

The library itself was compiled to wasm [here](https://bertrandbev.github.io/nlopt-js/)

All I did was create-react-app, npm install that library, then fix all the import errors.

This is a proof of concept that I may integrate into [CADmium](https://github.com/MattFerraro/CADmium) as my 2D sketch constraint solver.

# Running

`npm start` then look at localhost:3000

Check out the console to see an example result computed by nlopt using the [SLSQP](https://nlopt.readthedocs.io/en/latest/NLopt_Algorithms/#slsqp) solver