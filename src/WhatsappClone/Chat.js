import React from 'react'
import attach_file from '../assets/Icons/attach_file.png'
import search from '../assets/Icons/search.png'
import dots from '../assets/Icons/3_dots.png'
import emoji from '../assets/Icons/emoji.png'
import msg_send from '../assets/Icons/msg_send.png'
import { Item } from 'semantic-ui-react'


const Chat = () => {
    const chatting = [
        {
            id: 1,
            name: 'krupal patel',
            message: 'Good Morning',
            time: '09:00 AM',
            type: true
        },
        {
            id: 2,
            name: 'Jigar patel',
            message: 'Good Afternoon',
            time: '12:00 PM',
            type: false
        },
        {
            id: 3,
            name: 'Ronak patel',
            message: 'Good Evening',
            time: '05:00 PM',
            type: true
        },
        {
            id: 4,
            name: 'Noaman Mansuri',
            message: 'Good Night',
            time: '11:00 PM',
            type: false
        },
    ]
    return (
        <div className='chat'>
            <div className="chat_hearder">
                <img src="https://avatars.dicebear.com/api/male/john.svg?background=%230000ff" style={{ height: 30, width: 30, borderRadius: '50%' }} />
                <div className="chat_headerInfo">
                    <h3>User Name</h3>
                    <p>Last Seen...</p>
                </div>
                <div className='chat_headerRight'>
                    <img src={search} style={{ height: 25 }} />
                    <img src={attach_file} style={{ height: 25 }} />
                    <img src={dots} style={{ height: 25 }} />
                </div>
            </div>
            <div className='chat_body'>
                {/* <button onClick={() => setVisible(!visible)}><i className={`fa ${visible ? 'fa-bars' : 'fa-close'}`}></i></button></div> */}
                {/* <p className='chat_message chat_receiver' > */}
                {
                    chatting.map((chat) =>
                        <p className={`chat_message ${chat.type && 'chat_receiver'}`}>
                            <span className='chat_name'>{chat.name}</span>
                            {chat.message}
                            <span className='chat_time'>{chat.time}</span>
                        </p>
                    )
                }
                {/* <p className='chat_message chat_receiver'>
                    <span className='chat_name'>Krupal Patel</span>
                    Hello,Good Afternoon
                    <span className='chat_time'>03:56:00 pm</span>
                </p>
                <p className='chat_message'>
                    <span className='chat_name'>Krupal Patel</span>
                    Hello,Good Afternoon
                    <span className='chat_time'>03:56:00 pm</span>
                </p>
                <p className='chat_message'>
                    <span className='chat_name'>Krupal Patel</span>
                    Hello,Good Afternoon
                    <span className='chat_time'>03:56:00 pm</span>
                </p> */}
            </div>
            <div className='chatFooter'>
                <img src={emoji} style={{ height: 25 }} />
                <img src={attach_file} style={{ height: 25, marginLeft: 10 }} />
                <form action="">
                    <input type="text" />
                </form>

                <img src={msg_send} style={{ height: 25, marginLeft: 10 }} />
            </div>
        </div>
    )
}

export default Chat