import React, { useState, useEffect} from 'react';

import { CheckifWalletConnected, connectWallet, connectingWithContract } from "../utils/apiFeatures";

export const chatAppContext = React.createContext();

export const ChatAppProvider = (props) => {
    const [account, setAccount] = useState("");
    const [userName, setUserName] = useState("");
    const [friendList, setFriendList] = useState([]);
    const [friendMsg, setFriendMsg] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [userList, setUserList] = useState([]);
    const [err, setErr] = useState("");

    const [currentUserName, setCurrentUserName] = useState("");
    const [currentUserAddress, setCurrentUserAddress] = useState("");


    const fetchData = async () => {
        try {
            const contract = await connectingWithContract();
            const connectAccount = await connectWallet();

            setAccount(connectAccount);

            const userName = await contract.getUserName(connectAccount);
            setUserName(userName);

            const friendList = await contract.getMyfreindList();
            setFriendList(friendList);

            const userList = await contract.getallappUsers();
            setUserList(userList);
        } catch (err) {
            console.log(err);
            setErr("COULD NOT FETCH DATA");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const readMessage = async (friendAddress) => {
        try {
            const contract = await connectingWithContract();
            const read = await contract.readMessage(friendAddress);
            setFriendMsg(read);
        } catch (err) {
            setErr("AN ERROR OCCURED");
        }
    };

    const createAccount = async (Name, accountAddress) => {
        try {
            // if (Name || accountAddress) return setErr("Name and account address cannot be empty");

            const contract = await connectingWithContract();
            const getCreateUser = await contract.createAccount(Name);
            setLoading(true);
            await getCreateUser.wait();
            setLoading(false);
            window.location.reload();
        } catch (err) {
            console.log(err);
            setErr("AN ERROR57654 OCCURED");
        }
    };

    const addFriends = async ({ name, accountAddress }) => {
        try {
            if (!name || !accountAddress) return setErr("Please provide a valid name and account address");
            const contract = await connectingWithContract();
            const addMyFriend = await contract.addFriend(accountAddress, name);
            setLoading(true);
            await addMyFriend.wait();
            setLoading(false);
            // router.push('/');
            window.location.reload();
        } catch (err) {
            setErr("AN ERROR OCCURED");
        }
    };

    const sendMessage = async ({ msg, address }) => {
        try {
            if (!msg || !address) return setErr("Please type your message and address");
            const contract = await connectingWithContract();
            const addMessage = await contract.sendMessage(address, msg);
            setLoading(true);
            await addMessage.wait();
            setLoading(false);
            window.location.reload();
        } catch (err) {
            setErr("AN ERROR OCCURED");
        }
    };

    const readUser = async (userAddress) => {
        try {
            const contract = await connectingWithContract();
            const userName = await contract.getUserName(userAddress);
            setCurrentUserName(userName);
            setCurrentUserAddress(userAddress);
        } catch (err) {
            setErr("AN ERROR OCCURED");
        }
    };

    return (
        <chatAppContext.Provider value={{ readMessage, createAccount, addFriends, sendMessage, readUser, connectWallet, CheckifWalletConnected, account, userName, friendList, friendMsg, loading: Loading, userList, err, currentUserName, currentUserAddress }}>
            {props.children}
        </chatAppContext.Provider>
    );
};






