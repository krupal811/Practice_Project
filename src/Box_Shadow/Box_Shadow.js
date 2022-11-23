import React from 'react'
import { useState } from 'react'
import { Message, Card } from 'semantic-ui-react'

import './box_shadow.css'

const Box_Shadow = () => {
    const [horizontal, setHorizontal] = useState(10)
    const [vertical, setVertical] = useState(10)
    const [blur, setBlur] = useState(10)
    const [borderRadius, setBoxShadow] = useState(10)
    const [boxShadowColor, setBorderRadius] = useState('rgb(64, 17, 111)')
    const [boxColor, setBoxColor] = useState('blueviolet')
    const [visible, setVisible] = useState(true)

    //    const handleDismiss = () => {
    //         setVisible(false)

    //         setTimeout(() => {
    //             setVisible(true)
    //         }, 2000)
    //     }
    // if (visible) {
    //     return (
    //         <Message
    //             onDismiss={handleDismiss}
    //             header='Welcome back!'
    //             content='This is a special notification which you can dismiss.'
    //         />
    //     )
    // }

    return (
        <div className='box_shadow_container'>
            <div className="controll">
                <label>Horizontal Length</label>
                <input type="range" min='-200' max='200' value={horizontal} onChange={(e) => setHorizontal(e.target.value)} />
                <label>Vertical Length</label>
                <input type="range" min='-200' max='200' value={vertical} onChange={(e) => setVertical(e.target.value)} />
                <label>Blur</label>
                <input type="range" min='0' max='200' value={blur} onChange={(e) => setBlur(e.target.value)} />
                <label>BorderRadius</label>
                <input type="range" min='0' max='250' value={borderRadius} onChange={(e) => setBoxShadow(e.target.value)} />
                <label>Box-shadow Color</label>
                <input type="color" value={boxShadowColor} onChange={(e) => setBorderRadius(e.target.value)} style={{ width: 100, margin: 'auto' }} />
                <label>Box Color</label>
                <input type="text" value={boxColor} onChange={(e) => setBoxColor(e.target.value)} style={{ alignItems: 'center' }} />
            </div>
            <div className="result">
                <div className='box' style={{ boxShadow: `${horizontal}px ${vertical}px ${blur}px ${boxShadowColor}`, backgroundColor: `${boxColor}`, borderRadius: `${borderRadius}px` }} >
                    <p>box-shadow : {horizontal}px {vertical}px {blur}px {boxShadowColor}</p>
                    <p>background-color :{boxColor}</p>
                </div>
                <Card.Group>
                    <Card fluid color='red' header='Option 1' />
                    <Card fluid color='orange' header='Option 2' />
                    <Card fluid color='yellow' header='Option 3' />
                </Card.Group>
                {/* <p>
                    <br />
                    <i>The message will return in 2s</i>
                    <br />
                    <br />
                </p> */}
            </div>

        </div>
    )
}

export default Box_Shadow