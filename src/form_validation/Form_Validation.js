// import React, { useState, useEffect } from 'react';
// import './form_validation.css';
// import { useReward } from 'react-rewards';
// import Reward from "react-rewards";
// import ReactAudioPlayer from 'react-audio-player';
// import audio from '../assets/audio/testaudio.mpeg'


// function Form_Validation() {

//     const initialValue = { name: "", email: "", number: "", password: "" }

//     const [formValue, setFormValue] = useState(initialValue)
//     const [formError, setFormError] = useState({})
//     const [isSubmit, setIsSubmit] = useState(false)



//     const Option = [{
//         value: "Krupal",
//         displayValue: "Krupal"
//     },
//     {
//         value: "Ram",
//         displayValue: "Ram"
//     },
//     {
//         value: "Ansh",
//         displayValue: "Ansh"
//     }
//     ]

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setFormError(validate(formValue))
//         setIsSubmit(true)
//     }

//     useEffect(() => {
//         console.log("formValue==>", formValue);

//         if (Object.keys(formError).length === 0 && isSubmit) {
//             console.log("formError==>", formError);
//         }
//     }, [formValue])

//     const handleChange = (e) => {
//         console.log(e.target.value);
//         const { name, value } = e.target
//         setFormValue({ ...formValue, [name]: value })

//     }
//     const nameRegex = new RegExp(/^[a-zA-Z ]+$/i);
//     const emailRegex = new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i)
//     const passRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
//     const phoneRegex = new RegExp(/^(?:(?:\+|0{0,2})91(\s*\s*)?|[0]?)?\d{10}$/)

//     const validate = (values) => {
//         console.log("object", nameRegex.test(values.name));
//         const errors = {}
//         if (!values.name) {
//             errors.name = "*Name is required*"
//         } else if (!nameRegex.test(values.name)) {
//             errors.name = "*Enter name properly 😠*"
//         }
//         if (!values.email) {
//             errors.email = "*Email is required*"
//         } else if (!emailRegex.test(values.email)) {
//             errors.email = "*Enter email properly 😠*"
//         }
//         if (!values.password) {
//             errors.password = "*Password is required*"
//         } else if (!passRegex.test(values.password)) {
//             errors.password = "*The usual stuff, Min 6 characters, a capital character, a number and a special character *"
//         }
//         if (!values.number) {
//             errors.number = "*Number is required*"
//         } else if (!phoneRegex.test(values.number)) {
//             errors.number = "*Enter number properly 😠*"
//         }
//         return errors;

//     }

//     const { reward, isAnimating } = useReward('rewardId', 'emoji', '[🧥]');
//     const { reward: confettiReward, isAnimating: isConfettiAnimating } = useReward('confettiReward', 'confetti');
//     const { reward: balloonsReward, isAnimating: isBalloonsAnimating } = useReward('balloonsReward', 'emoji');


//     return (
//         <>
//             <form id="validation-form" name="validation-form"
//                 onSubmit={handleSubmit}
//             >
//                 <div className='form_content'>
//                     <div className="name_input">
//                         <label htmlFor="name" className="">Your name:- </label>
//                         <input type="text" name="name" placeholder='Enter Your Name'
//                             onChange={handleChange} value={formValue.name}
//                         />
//                     </div>

//                     <p className='para'>{formError.name}</p>

//                     <div className="name_input" >
//                         <label htmlFor="email" className="">Your email:- </label>
//                         <input type="email" name="email" placeholder='Enter Your Email'
//                             onChange={handleChange} value={formValue.email}
//                         />

//                     </div>

//                     <p className='para'>{formError.email}</p>

//                     <div className="name_input">
//                         <label htmlFor="Password" className="">Password:- </label>
//                         <input type="password" name="password" placeholder='Enter Your password' id='pass'
//                             onChange={handleChange} value={formValue.password}
//                         />
//                     </div>
//                     <div id='error'></div>

//                     <p className='para'>{formError.password}</p>

//                     <div className="name_input">
//                         <label htmlFor="Number" className="">Phone Number:- </label>
//                         <input type="text" name="number" placeholder='Enter Your Number'
//                             onChange={handleChange} value={formValue.number}
//                         />
//                     </div>

//                     <p className='para'>{formError.number}</p>

//                     <div className="name_input">
//                         <label htmlFor="Adress" className="">Select Name:- </label>
//                         <select name="" style={{ width: "185px", height: "25px" }}>
//                             {
//                                 Option.map((data) => {
//                                     return (
//                                         <option value={data.value} key={data.value}>{data.displayValue}</option>
//                                     )
//                                 })
//                             }
//                         </select>
//                     </div>
//                     <div className="submit_button">
//                         <button>Submit</button>

//                     </div>
//                 </div>
//             </form>
//             <button
//                 // disabled={isAnimating}
//                 onClick={reward}
//             >
//                 <span id="rewardId" />
//                 Celebration Time
//             </button>
//             <span id="confettiReward" />
//             <span id="emoji" />
//             <button
//                 disabled={isConfettiAnimating || isBalloonsAnimating}
//                 type='emoji'
//                 onClick={() => {
//                     confettiReward();
//                     balloonsReward();
//                 }}
//             >
//                 Celebration Time
//             </button>
//             <div style={{ textAlign: "center" }}>
//                 {formValue.name} <br />
//                 {formValue.email} <br />
//                 {formValue.number}
//             </div>
//             {/* <Reward
//                 ref={(ref) => {
//                     this.reward = ref;
//                 }}
//                 type="emoji"
//                 lifetime={300}
//                 config={{
//                     spread: 90,
//                     emoji: ["💶", "💴", "💵", "💰"],
//                     colors: ["#000000", "#F25555", "#55D8F2", "#499DF2", "#F2CB30"]
//                 }}
//             >
//                 <img
//                     src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/money-bag_1f4b0.png"
//                     onClick={() => this.reward.rewardMe()}
//                     alt="money"
//                 />
//             </Reward> */}
//             <ReactAudioPlayer
//                 src={audio}
//                 // autoPlay
//                 controls
//             />
//             <h1>GeeksforGeeks</h1>
//             <h3>Embedding the PDF file Using Object Tag</h3>
//             <object
//                 style={{ width: 500, height: 500 }}
//                 data=
//                 "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
//             >
//             </object>
//             {/* <iframe src=
//                 "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
//                 width="800"
//                 height="500">
//             </iframe>
//             <embed src=
//                 "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
//                 width="800"
//                 height="500" /> */}

//         </>
//     );
// }

// export default Form_Validation;


import React, { useState } from 'react'
import { Divider, Form, Label } from 'semantic-ui-react'
import { GrDocumentPdf } from "react-icons/gr";
import InputEmoji from "react-input-emoji";
import Picker from 'emoji-picker-react';



const Form_Validation = () => {
    const [text, setText] = useState("");

    function handleOnEnter(text) {
        console.log("enter", text);
    }
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };
    return (<Form style={{ maxWidth: 400 }}>
        <Form.Field>
            <input type='text' placeholder='First name' />
            <Label basic color='red' pointing>
                Please enter a value
            </Label>
        </Form.Field>
        <Divider />

        <Form.Field>
            <Label basic color='red' pointing='below'>
                Please enter a value
            </Label>
            <input type='text' placeholder='Last Name' />
        </Form.Field>
        <Divider />

        <Form.Field inline>
            <input type='text' placeholder='Username' />
            <Label basic color='red' pointing='left'>
                That name is taken!
            </Label>
        </Form.Field>
        <Divider />

        {/* <Form.Field inline> */}
        <Label basic color='red' pointing='right'>
            Your password must be 6 characters or more
        </Label>
        <input type='password' placeholder='Password' />
        {/* </Form.Field> */}
        {/* <object
            style={{ width: 500, height: 500 }}
            data=
            "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
        >
        </object> */}
        <GrDocumentPdf style={{ height: 50, width: 50 }} />
        <InputEmoji
            value={text}
            onChange={() => setText('')}
            cleanOnEnter
            placeholder="Type a message"
        />
        <div>
            {chosenEmoji ? (
                <span>You chose: {chosenEmoji.emoji}</span>
            ) : (
                <span>No emoji Chosen</span>
            )}
            <Picker onEmojiClick={onEmojiClick} pickerStyle={{ width: '100%' }} />
        </div>
    </Form>
    )
}

export default Form_Validation
