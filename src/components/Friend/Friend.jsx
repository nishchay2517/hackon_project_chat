import React  , {useState , useContext}from 'react';
import Style from './Friend.module.css'

import Card from './Card/Card';
import Chat from './Chat/Chat';

import { chatAppContext } from '../../Context/chatAppContext';
const Friend = () => {
    // const array = [1,2,3,4,6];
    const {sendMessage , account , friendList , readMessage ,friendMsg, userName , loading , currentUserName , currentUserAddress , readUser} = useContext(chatAppContext);
    return (
        <div className={Style.Friend}>
            <div className={Style.Friend_box}>
                <div className={Style.Friend_box_left}>
                    {friendList.map((el , i) => (<Card key={i+1} el={el} i={i} readMessage={readMessage} readUser={readUser}/>))}
                </div>
                <div className={Style.Friend_box_right}>
                    <Chat functionName = {sendMessage} readMessage={readMessage} friendMsg = {friendMsg} account={account} userName={userName} Loading = {loading} currentUserName={currentUserName} currentUserAddress={currentUserAddress}/>
                </div>
            </div>
        </div>
    );
}

export default Friend;
