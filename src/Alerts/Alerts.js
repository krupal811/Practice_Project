import React from 'react'
import { useState } from 'react'
import { useAlert } from 'react-alert'
import ReactjsAlert from 'reactjs-alert'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import InfoIcon from '../Alerts/Icons/InfoIcon'
import ErrorIcon from '../Alerts/Icons/ErrorIcon'
import SuccessIcon from '../Alerts/Icons/SuccessIcon'
import CloseIcon from '../Alerts/Icons/CloseIcon'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

import Alert from 'react-popup-alert'

const Alerts = ({ message, options, style, close }) => {
    // const alert = useAlert()
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(true)
    }
    const [alert, setAlert] = React.useState({
        type: 'error',
        text: 'This is a alert message',
        show: false
    })

    function onCloseAlert() {
        setAlert({
            type: '',
            text: '',
            show: false
        })
    }

    function onShowAlert(type) {
        setAlert({
            type: type,
            text: 'Demo alert',
            show: true
        })
    }
    const submit = () => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                { label: 'Yes' },
                { label: 'No' },
            ]
        });
    };
    const alertStyle = {
        backgroundColor: '#151515',
        color: 'white',
        padding: '10px',
        textTransform: 'uppercase',
        borderRadius: '3px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.03)',
        fontFamily: 'Arial',
        width: '300px',
        boxSizing: 'border-box'
    }

    const buttonStyle = {
        marginLeft: '20px',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        color: '#FFFFFF'
    }
    const [open, setOpen] = React.useState(false)
    return (
        <div>
            {/* <button
                onClick={() => {
                    alert.show('Oh look, an alert!')
                }}
            >
                Show Alert
            </button> */}
            {/* <button onClick={handleClick}>Click to shoe alert</button>
            {show && <ReactjsAlert
                status={true}   // true or false
                type="success"   // success, warning, error, info
                title="Hey! this is an alert."   // title you want to display
                Close={() => setShow(false)}   // callback method for hide
            />} */}
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                    <button onClick={() => onCloseAlert()}>Hide alert</button>
                    <button onClick={() => onShowAlert('success')}>
                        Show success alert
                    </button>
                    <button onClick={() => onShowAlert('error')}>Show error alert</button>
                    <button onClick={() => onShowAlert('warning')}>
                        Show warning alert
                    </button>
                </div>
                <Alert
                    header={'Header'}
                    btnText={'Close'}
                    text={alert.text}
                    type={alert.type}
                    show={alert.show}
                    onClosePress={onCloseAlert}
                    pressCloseOnOutsideClick={true}
                    showBorderBottom={true}
                    alertStyles={{}}
                    headerStyles={{}}
                    textStyles={{}}
                    buttonStyles={{}}
                />
            </div>
            <div className='container'>
                <button onClick={submit}>Confirm dialog</button>
            </div>
            {/* <div style={{ ...alertStyle, ...style }}>
                {options.type === 'info' && <InfoIcon />}
                {options.type === 'success' && <SuccessIcon />}
                {options.type === 'error' && <ErrorIcon />}
                <span style={{ flex: 2 }}>{message}</span>
                <button onClick={close} style={buttonStyle}>
                    <CloseIcon />
                </button>
            </div> */}
        </div>
    )
}

export default Alerts

// import React, { Component } from 'react';
// import NotificationAlert from 'react-notification-alert';

// var options = {};
// options = {
//     place: 'tl',
//     message: (
//         <div>
//             <div>
//                 Welcome to <b>Now UI Dashboard React</b> - a beautiful freebie for every web developer.
//             </div>
//         </div>
//     ),
//     type: "danger",
//     icon: "now-ui-icons ui-1_bell-53",
//     autoDismiss: 7
// }

// class App extends Component {
//     myFunc(){
//         this.refs.notify.notificationAlert(options);
//     }
//   render() {
//     return (
//       <div>
//           <NotificationAlert ref="notify" zIndex={9999} onClick={() => console.log("hey")} />
//         <button onClick={() => this.myFunc()}>Hey</button>
//       </div>
//     );
//   }
// }

// export default App;

