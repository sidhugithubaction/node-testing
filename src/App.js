import './App.css';


function App() {
  const state = navigator.userAgent
  return (
    <div className="App">
      <header className="App-header">

      <h1>
        This is Prudhvi, Node Testing App
      </h1>
      <p>
        {state}
      </p>
      </header>

    </div>
  );
}

export default App;
