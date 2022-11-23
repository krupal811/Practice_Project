import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import dots from '../assets/Icons/3_dots.png'
import chat from '../assets/Icons/chat.png'
import donut_large from '../assets/Icons/donut_large.png'
import profile from '../assets/Icons/profile.png'
import search from '../assets/Icons/search.png'

import Sidebar_Chats from './Sidebar_Chats'


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <img src={profile} style={{ height: 30 }} />
                <div className="header_right">
                    <img src={donut_large} style={{ height: 20 }} />
                    <img src={chat} style={{ height: 20 }} />
                    <img src={dots} style={{ height: 20 }} />
                </div>
            </div>
            <div className="sidebar_search">
                <div className='sidebar_searchContainer'>
                    <img src={search} style={{ height: 20 }} />
                    <input type="text" placeholder='search or start a new chat' />
                </div>
            </div>
            <div className='sidebar_chats'>
                <Sidebar_Chats addnewChat />
                <Sidebar_Chats />
                <Sidebar_Chats />
                <Sidebar_Chats />
                <Sidebar_Chats />
                <Sidebar_Chats />
            </div>
        </div>
    )
}

export default Sidebar

