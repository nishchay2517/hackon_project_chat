import {ethers} from 'ethers';

import {contractAddress , contractABI} from "../Context/constants" ;

export const CheckifWalletConnected = async () => {
    try {
        if(window.ethereum){
            let account;
            await window.ethereum.request({method : "eth_accounts"})
            .then(result => {
                account = result[0];
            });
            return account;
        }
        else {
            console.log("install MetaMask")
        }

    } catch (error){
        console.log("Install MetaMask");
    }
}

export const connectWallet = async() => {
    try {
        if(window.ethereum){
            let account;
            await window.ethereum.request({method : "eth_accounts"})
            .then(result => {
                account = result[0];
            });
            return account;
        }

    } catch (error){
        console.log(error);
    }
}

const contractInstance = (signer) => {
    return new ethers.Contract(contractAddress , contractABI ,signer);
}

export const connectingWithContract = async () => {
    try{
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = contractInstance(signer);

        return contract;
    }catch(error){
        console.log(error);
    }
}

export const coverTime = (time) => {
    const newTime = new Date(Number(time));

    const realTime = newTime.getHours() +'/' +newTime.getMinutes()+ '/' +newTime.getSeconds() +' Date :' + newTime.getDate()+'/' + newTime.getMonth()+1 + '/' + newTime.getFullYear();


    return realTime;
}