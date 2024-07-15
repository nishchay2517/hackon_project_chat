import React ,{useState ,useContext } from 'react';
import Style from './model.module.css';
import { chatAppContext } from '../../Context/chatAppContext';
import Loader from '../Loader/Loader';

const Model = ({openModel , title, head , info ,smallInfo, images , functionName}) => {
    const [name , setname] = useState('');
    const [accountAddress , setAccountAddress] = useState("");
    const {Loading} = useContext(chatAppContext);
    return (
        <div className={Style.Model}>
            <div className={Style.Model_Box}>
                <div className={Style.Model_Box_left}>
                    <img src='#' alt='character' width={700} height={700}></img>
                </div>
                <div className={Style.Model_Box_right}>
                    <h1>
                        {title} <span>{head}</span>
                    </h1>
                    <p>{info}</p>
                    <small>{smallInfo}</small>

                    {
                        Loading == true ? (
                            <Loader/>
                        ) : (
                            <div className={Style.Model_Box_right_name}>
                        <div className={Style.Model_Box_right_name_info} width = {30} height={30}>
                            <img src='' alt='user'></img>
                            <input type='text' placeholder='your name' onChange={(e)=>setname(e.target.value)}/>
                        </div>
                        <div className={Style.Model_Box_right_name_info}>
                            <img src='' alt='user'></img>
                            <input type='text' placeholder={accountAddress ||'your address'} onChange={(e)=>setAccountAddress(e.target.value)}/>
                        </div>
                        <div className={Style.Model_Box_right_name_btn}>
                            <button onClick={()=>functionName(name , accountAddress)}>
                                {""}
                                <img src='' alt='send'></img>
                                {""}
                                Submit
                            </button>
                            <button onClick={()=>openModel(false)} >
                            
                                {""}
                                <img src='' alt='send'></img>
                                {""}
                                Cancle
                            </button>
                        </div>
                    </div>
                        )
                    }

                    
                </div>
            </div>
        </div>
    );
}

export default Model;
