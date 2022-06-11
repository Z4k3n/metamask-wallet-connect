//we make the imports, it's essential to get ether import, without it none of this function would work properly.

import React, { useState } from "react";
import { ethers } from 'ethers';

const WalletConnect = () => {

    //here we define the const
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [connButtonText, setConnButtonText] = useState("Connect Wallet");

    //this will check if the user has metamask installed or not.
    const connectWalletHandler = () => {
        if(window.ethereum){
            //if so, this method will get us the address of the account.
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
                accountChangedHandler(result[0]);
            })

        }else{
            setErrorMessage("Install Metamask");
        }
    }

    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        getUserBalance(newAccount);
    }

    //this one gets balance of the wallet.
    const getUserBalance = async (address) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(address);
        const balanceInEth = ethers.utils.formatEther(balance);

        setUserBalance(balanceInEth);
    }

    const chainChangedHandler = () => {
        window.location.reload();
    }

    window.ethereum.on('accountsChanged', accountChangedHandler);

    window.ethereum.on('chainChanged', chainChangedHandler);
    
    //notice in this return that we include hmtl code as a whole, that we'll be calling later on the main app function under the tag.
    return (
        <div className="walletConnect">
            <div className='accountDisplay'>   
                <h3>Address: {defaultAccount}</h3>
            </div>
            <div className='balanceDisplay'>   
                <h3>Balance: {userBalance}</h3>
            </div>
            <button onClick={connectWalletHandler}>{connButtonText}</button>
            {errorMessage}
        </div>

    )

}

export default WalletConnect;