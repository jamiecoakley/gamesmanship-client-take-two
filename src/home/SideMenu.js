import React, {useState} from 'react';
//import {Route, Link, Switch} from 'react-router-dom'
import {Button} from 'reactstrap'
import CreateEntry from '../games/CreateEntry'

const SideMenu = () => {
    // const Sitebar = (props) => {
    //     const [isOpen, setIsOpen] = useState(false)
    //     const toggle = () => {
    //         let newIsOpen = !isOpen;
    //         setIsOpen(newIsOpen)
    //     }
    // }

    return (
        <div className="sideMenu">
            <div className="sideMenuList">
                <h1>WELCOME TO YOUR GAME LOG</h1>
                <CreateEntry />
            </div>
        </div>
    )
}

export default SideMenu;