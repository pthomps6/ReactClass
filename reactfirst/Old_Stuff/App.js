import logo from './logo.svg';
import './App.css';

function App() {
    var pamName = "Pam";
    var dog = "eerie"
    return (
        <> 
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to {dog}.
        </p>
        <a href="https://reactjs.org" >
          Learn React
        </a>
                </header>

                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to {dog}.
                        </p>
                   
                    </header>
                </div>
    </div>

        
            </>
  );
}

export default App;
