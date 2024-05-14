//We make the necessary imports
import './App.css';
import './WalletConnect';
import WalletConnect from './WalletConnect';

//here's our main app, notice we've called WalletConnect as a tag. this one contains all the html code we also defined inside.
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2>Connect your <strong>Metamask</strong> wallet on this web!</h2>
        <h4>Connect your <a href='https://metamask.io/'>metamask</a> wallet using <strong>window.ethereum</strong> methods and check the address of the wallet and the balance!</h4>
        <div className="box">
          <WalletConnect />
        </div>
        <p>By <a href='https://github.com/z4k3n'>Z4k3n</a> in GitHub</p>
      </header>
    </div>
  );

}

export default App;
