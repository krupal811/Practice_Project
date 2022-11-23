import React from "react";
import ReactPlayer from "react-player";
import "./reactPlayer.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Reactplayer = () => {
    return (//https://drive.google.com/uc?id=1MK6BPFJmV6iC3hE5mWAP-2x8DIqJiHF1&export=download
        <div>
            {/* <div className="player-wrapper">
                <ReactPlayer
                    url="https://drive.google.com/uc?id=1MK6BPFJmV6iC3hE5mWAP-2x8DIqJiHF1&export=download"
                    className="react-player"
                    playing
                    width="100%"
                    height="100%"
                    controls={true}
                />
            </div> */}
            <Carousel
                axis="vertical"
                centerMode={true}
                onSwipeStart={() => console.log('swiping Start')}
                onSwipeEnd={() => console.log('swiping end')}
                showArrows={false}
                showIndicators={false}
                showThumbs={false}
                showStatus={false}

            >
                <div style={{ height: 700 }} >
                    {/* <img style={{ height: 400, width: 400 }} src={require('../assets/images/video_1.mp4')} /> */}
                    <iframe style={{ height: '100%' }} src={require('../assets/video/video_1.mp4')} title="W3Schools Free Online Web Tutorials"></iframe>
                </div>
                <div style={{ height: 700 }} >
                    {/* <img style={{ height: 400, width: 400 }} src={require('../assets/images/video_2.mp4')} /> */}
                    <iframe style={{ height: '100%' }} src={require('../assets/video/video_2.mp4')} title="W3Schools Free Online Web Tutorials"></iframe>
                </div>
                <div style={{ height: 700 }} >
                    {/* <img style={{ height: 400, width: 400 }} src={require('../assets/images/video_3.mp4')} /> */}
                    <iframe style={{ height: '100%' }} src={require('../assets/video/video_3.mp4')} title="W3Schools Free Online Web Tutorials"></iframe>
                </div>
            </Carousel>
        </div>

    );
};

export default Reactplayer;
