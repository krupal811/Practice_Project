import React, { useRef } from "react";
import { useState } from "react";
import ReactPlayer from 'react-player'

const Video_Play_Pause = () => {
    const videoRef = useRef();
    const [show, setShow] = useState(false)
    const [alertShow, setAlertShow] = useState(false)
    const youtubeId = [
        {
            id: 1,
            vid: 'ZvbzSrg0afE',
            title: 'Akshay Saini',
            desctiption: 'How JavaScript Works 🔥& Execution Context | Namaste JavaScript Ep.1'
        },
        {
            id: 2,
            vid: '-mJFZp84TIY',
            title: 'Code With Harry',
            desctiption: 'Introduction to React Js + Installation | Complete React Course in Hindi #1'
        },
        {
            id: 3,
            vid: 'tbvguOj8C-o',
            title: 'Sonny Sangha',
            desctiption: 'React JS Crash Course for Beginners - Build 4 Apps in 12 Hours (Redux, Firebase, Auth + More) [2022]'
        },
        {
            id: 4,
            vid: 'tiLWCNFzThE',
            title: 'Thapa Technical',
            desctiption: 'Introduction to React | ReactJS Tutorial for Beginners in Hindi 2020 #1'
        },
    ]

    const handlePlay = () => {
        videoRef.current.play();
        // console.log(' videoRef.current.play()===>', videoRef.current.play());
        setShow(true)

    };
    const handlePause = () => {
        videoRef.current.pause();
        console.log(' videoRef.current.pause()===>', videoRef.current);
        setAlertShow(true)
    };
    return (
        <>
            <div className="grid-btn" style={{ marginTop: 150 }}>
                <button className="btn" onClick={handlePlay}>
                    Play
                </button>
                <button className="btn-pause" onClick={handlePause}>
                    Pause
                </button>
            </div>
            <video width="520" height="240" ref={videoRef}>
                <source src="/Videos/mov_bbb.mp4" />
            </video>
            {show && <div style={{ position: 'absolute', top: 0, left: '380px' }} class="alert alert-primary" role="alert">
                Play Video
            </div>}
            {alertShow && <div style={{ position: 'absolute', top: 0, left: '380px' }} class="alert alert-primary" role="alert">
                Pause Video
            </div>}
            {/* {
                youtubeId.map((item) => {
                    return (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <ReactPlayer url={`https://www.youtube.com/watch?v=${item.vid}`} ref={videoRef} />
                            <p>{item.desctiption}</p>
                        </div>
                    )
                })
            } */}
        </>
    );
};

export default Video_Play_Pause;