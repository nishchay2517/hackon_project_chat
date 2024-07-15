import React from 'react';
import Style from "./UserCard.module.css";
const UserCard = (el , i , addFriends) => {
    return (
        <div className={Style.UserCard}>
            <div className={Style.UserCard_box}>
                <img src="" alt='user' width={100} height={100}/>
                <div className={Style.UserCard_box_info}>
                    <h3>{el.name}</h3>
                    <p>{el.accountAddress}..</p>
                    <button onClick={()=>addFriends({name : el.name , accountAddress : el.accountAddress})}>Add Friend</button>
                </div>
            </div>
            <small className={Style.number}>{i+1}</small>
        </div>
    );
}

export default UserCard;
