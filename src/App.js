//We make the necessary imports
import './App.css';
import './WalletConnect';
import WalletConnect from './WalletConnect';

//here's our main app, notice we've called WalletConnect as a tag. this one contains all the html code we also defined inside.
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2>MetaMask Connect!</h2>
        <h4>Connect your <a href='https://metamask.io/'>MetaMask</a> wallet using <strong>window.ethereum</strong> methods</h4>
        <div className="box">
          <WalletConnect />
        </div>
        <p>By <a href='https://github.com/GmR08'>GmR08</a> in GitHub</p>
      </header>
    </div>
  );

}

export default App;
