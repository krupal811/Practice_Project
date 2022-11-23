// import React, { Component } from 'react';
// import './UploadImage.css';
// export class UploadImage extends Component {
//     state = {
//         profileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
//     }
//     imageHandler = (e) => {
//         const reader = new FileReader();
//         console.log('render====>', reader);
//         reader.onload = () => {
//             if (reader.readyState === 2) {
//                 this.setState({ profileImg: reader.result })
//             }
//         }
//         reader.readAsDataURL(e.target.files[0])
//         console.log('e.target.files[0]', e.target.files[0].name);
//     };
//     render() {
//         const { profileImg } = this.state
//         return (
//             <>

//                 <div className="page">
//                     <div className="container">
//                         <h1 className="heading">Add your Image</h1>
//                         <div className="img-holder">
//                             <img src={profileImg} alt="" id="img" className="img" />
//                         </div>
//                         <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
//                         <div className="label">
//                             <label className="image-upload" htmlFor="input">
//                                 <i className="material-icons">add_photo_alternate</i>
//                                 Choose your Photo
//                             </label>
//                         </div>
//                     </div>
//                 </div>

//             </>

//         );
//     }
// }

// export default UploadImage;



import { useState } from 'react';
import './UploadImage.css';
const UploadImage = () => {

    const profileImg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    const [state, setState] = useState(profileImg)

    const imageHandler = (e) => {
        const reader = new FileReader();
        console.log('render====>', reader);
        reader.onload = () => {
            if (reader.readyState === 2) {
                setState(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
        console.log('e.target.files[0]', e.target.files[0].name);
    };

    return (
        <>

            <div className="page">
                <div className="container">
                    <h1 className="heading">Add your Image</h1>
                    <div className="img-holder">
                        <img src={state} alt="" id="img" className="img" />
                    </div>
                    <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
                    <div className="label">
                        <label className="image-upload" htmlFor="input">
                            <i className="material-icons">add_photo_alternate</i>
                            Choose your Photo
                        </label>
                    </div>
                </div>
            </div>

        </>

    );
}


export default UploadImage;
