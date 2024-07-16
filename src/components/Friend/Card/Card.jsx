import React , {useContext, useEffect} from 'react';
import Style from './Card.module.css';
import { Link } from 'react-router-dom';
import { chatAppContext } from '../../../Context/chatAppContext';

const Card = ({readMessage , el ,i , readUser}) => {
    const {chatData ,setchatData} = useContext(chatAppContext);
    return (
        <Link to={{pathname : '/' ,
         query :{ name :`${el.name}` , address : `${el.pubkey}`}}}
         >
            <div className={Style.Card} onClick={()=>{readMessage(el.pubkey); readUser(el.pubkey); setchatData({ name :`${el.name}` , address : `${el.pubkey}`})}}>
                <div className={Style.Card_box}>
                    <div className={Style.Card_box_left}>
                        <img src='' alt='username' width={50} height={50} className={Style.Card_box_left_img}/>
                    </div>
                    <div className={Style.Card_box_right}>
                        <div className={Style.Card_box_right_middle}>
                            <h4>{el.name}</h4>
                            <small>{el.pubkey.slice(21)}..</small>
                        </div>
                        <div className={Style.Card_box_right_end}>
                            <small>{i+1}</small>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Card;
