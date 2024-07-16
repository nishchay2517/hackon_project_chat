import React from 'react';
import { useEffect , useState , useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { chatAppContext } from '../../Context/chatAppContext';
import {Model , Error} from "../index"
import { BrowserRouter } from 'react-router-dom';
import Style from "./NavBar.module.css";
import AllUser from '../AllUser/AllUser';

const Navbar = () => {
    const menuItems = [
        {
            menu : "CHAT",
            link : "/",
        },
        {
            menu : "ALL USER",
            link : "/all_user",
        },
        {
            menu : "CONTACT",
            link : "/",
        },
        {
            menu : "SETTING",
            link : "/",
        },
        {
            menu : "TERMS",
            link : "/",
        },
    ];
    const [active , setactive]  = useState(1);
    const [openModel , setopenModel] = useState(false);

    const {account , userName , connectWallet , createAccount , err}  = useContext(chatAppContext);
    return (
        <div className={Style.Navbar}>
            <div className={Style.Navbar_box}>
                <div className={Style.Navbar_box_left}>
                <i className="fa-solid fa-comment"></i>
                </div>
                <div className={Style.Navbar_box_right}>
                    <div className={Style.Navbar_box_right_menu}>
                        {menuItems.map((el , i) => (
                            <div onClick={()=>{setactive(i+1)}} key={i+1} className={`${Style.Navbar_box_right_menu_items} ${active==i+1 ?  Style.active_btn : ""}`}>
                                <Link className={Style.Navbar_box_right_menu_items_link} to={el.link}>{el.menu}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={Style.Navbar_box_right_connect}>
                {account == "" ? (
                    <button onClick={()=> {connectWallet()}}>
                        <span>Connect Wallet</span>
                    </button>
                )  : (
                    <button onClick={()=>{setopenModel(true)}}>
                        <i className="fa-solid fa-plus"></i>{''}
                        <small>{userName || "Create Account"}</small>
                    </button>
                )}

            </div>
            

            {openModel && (
                <div className={Style.modelBox}>
                    <Model openModel = {setopenModel}
                        title = "WELCOME TO"
                        head = "CHAT DAPP"

                        info = "Lorem IPSUM coddlak dlsinlk dalkienf laknd lakn lnidne m lan"
                        smallInfo = "KINDLY SELECT YOUR NAME"
                        images = "logo512.png"
                        functionName = {createAccount}
                        address = {account}

                    />
                </div>
            )}
            {err == "" ? "" : <Error error={err}/>}
        </div>
    );
}

export default Navbar;
