import React, { useContext, useState } from 'react';
import { chatAppContext } from '../../Context/chatAppContext';
import {Model} from "../index";
import Style from "./Filter.module.css";
const Filter = () => {
    const {account , addFriends} = useContext(chatAppContext);
    const [addFriend , setaddFriend] = useState(false);
    return (
        <div className={Style.Filter}>
            <div className={Style.Filter_box}>
                <div className={Style.Filter_box_left}>
                    <div className={Style.Filter_box_left_search}>
                        <img src='#' alt='image' height={20} width={20} />
                        <input type='text' placeholder='search'/>
                    </div>
                </div>
                <div className={Style.Filter_box_right}>
                    <button>
                        <img src='' alt='clear' width={20} height={20}/>
                        CLEAR CHAT
                    </button>
                    <button onClick={()=>setaddFriend(true)}>
                        <img src='#' width={20} height={20}/>
                        Add Friend
                    </button>
                </div>
            </div>

            {addFriend && (
                <div className="Filter_model">
                    <Model openModel={addFriend}
                    title="WELCOME TO"
                    head="CHAT DAPP"
                    info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis cupiditate ipsum quibusdam distinctio sapiente provident incidunt reiciendis voluptatem quos quas dignissimos, cum corporis qui, unde ducimus nemo exercitationem tempora architecto."
                    smallInfo="Kindly select your friend and address"
                    functionName={addFriends}
                    />

                
                </div>
            )}
        </div>
    );
}

export default Filter;
