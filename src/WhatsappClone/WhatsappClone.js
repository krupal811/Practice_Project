import React from 'react'
import Chat from './Chat'
import Sidebar from './Sidebar'
import './whatsappClone.css'

const WhatsappClone = () => {
    return (
        <div className='whatsapp_clone'>
            <div className='whatsapp_clone_body'>
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default WhatsappClone