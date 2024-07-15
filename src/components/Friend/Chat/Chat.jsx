import React, { useState } from 'react';

import Style from "./Chat.module.css"
import { coverTime } from '../../../utils/apiFeatures';
import {Loader} from "../../index"
const Chat = ({functionName , readMessage ,friendMsg , account , userName , Loading , currentUserName , currentUserAddress}) => {
    const [message , setMessage] = useState('');
    const [chatData, setchatData] = useState({
        name :"" ,
        address : ""
    });
    return (
        <div className={Style.Chat}>
            {currentUserName && currentUserAddress ? (
                <div className={Style.Chat_user_info}>
                    <img src='' width={70} height={70}/>
                    <div className={Style.Chat_user_info_box}>
                        <h4>{currentUserName}</h4>
                        <p className={Style.show}>{currentUserAddress}</p>
                    </div>

                </div>
            ) : ("")}

            <div className={Style.Chat_box_box}>
                <div className={Style.Chat_box}>
                    <div className={Style.Chat_box_left}>
                        {
                            friendMsg.map((el , i)=>(
                            <div>
                                {el.sender == chatData.address ? (
                                    <div className={Style.Chat_box_left_title}>
                                        <img src='' alt='image' width={50} height={50} />
                                        <span>
                                            {chatData.name} {""}
                                            <small>{coverTime(el.timestamp)}</small>
                                        </span>
                                    </div>
                                ) : (
                                    <div className={Style.Chat_box_left_title}>
                                        <img src='' alt='image' width={50} height={50} />
                                        <span>
                                            {userName} {""}
                                            <small>{coverTime(el.timestamp)}</small>
                                        </span>
                                    </div>
                                )}
                                <p key={i+1}>{el.msg}</p>
                            </div>
                        ))
                        }
                    </div>
                </div>
                {currentUserName && currentUserAddress ? (
                    <div className={Style.Chat_box_send}>
                        <img src='' alt='smile' width={50} height={500}/>
                        <input type='text' placeholder='type your message' onChange={(e)=>setMessage(e.target.value)}/>
                        <img src='' alt='file' width={50} height={50}/>
                        {
                            Loading==true ? (
                                <Loader/>
                            ):(
                                <img src='' alt='file' width={50} height={50} onClick={()=>functionName({msg :message , address : chatData})}/>
                            )
                        }
                    </div>
                ) : ("")}
            </div>
        </div>
    );
}

export default Chat;
