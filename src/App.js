import logo from './galerie.svg';
import './App.css';


import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  accessKey: APP_ACCESS_KEY,
  // Optionally you can also configure a custom header to be sent with every request
  headers: {
    "X-Custom-Header": "foo"
  },
  // Optionally if using a node-fetch polyfill or a version of fetch which supports the timeout option, you can configure the request timeout for all requests
  timeout: 500 // values set in ms
});

function App() {




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>alerie</h1>
      </header>
    </div>
  );
}

export default App;
