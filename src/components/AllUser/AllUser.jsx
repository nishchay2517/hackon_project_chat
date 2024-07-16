import React, { useContext } from 'react';
import { chatAppContext } from '../../Context/chatAppContext';
import Style from "./AllUser.module.css";
import {UserCard} from "../index";

const AllUser = () => {
    const {userList , addFriends} = useContext(chatAppContext);
    return (
        <div>
            <div className={Style.alluser_info}>
                <h1>Find your Friends
                </h1>
            </div>
            <div className={Style.AllUser}>
                {userList.map((el , i) => (
                    <UserCard key={i+1} el={el} i={i} addFriends={addFriends}/>
                ))}
            </div>
        </div>
    );
}

export default AllUser;
