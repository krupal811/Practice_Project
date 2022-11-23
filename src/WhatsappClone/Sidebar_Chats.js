import React, { useEffect, useState } from 'react'
import profile from '../assets/Icons/profile.png'


const Sidebar_Chats = ({ addnewChat }) => {
    const [userProfile, setUserProfile] = useState('')
    useEffect(() => {
        setUserProfile(Math.floor(Math.random() * 5000));
    }, [])
    
    // https://avatars.dicebear.com/api/male/deo.svg?background=%230000ff
    return (
        !addnewChat ? (
            <div className='sidebar_chat'>
                <img src={`https://avatars.dicebear.com/api/male/${userProfile}.svg?background=%230000ff`} style={{ height: 40, borderRadius: '50%' }} />
                <div className="sidebar_chatInfo" >
                    <h3>React Tutorial</h3>
                    <p>Hello...</p>
                </div>
            </div>
        )
            : (
                <div className='sidebar_chat'>
                    <h3 style={{ marginLeft: 10 }}>Add New Chat</h3>
                </div>
            )

    )
}

export default Sidebar_Chats