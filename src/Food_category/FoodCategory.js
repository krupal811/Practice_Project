import React, { useState } from 'react'
import './foodCategory.css'
import { Menu } from './Menu'
import Modal from 'react-modal'
import { useEffect } from 'react'
import sun from '../assets/images/sun.png'
import moon from '../assets/images/moon.png'
import { FaBeer, FaSun } from 'react-icons/fa';
import { Icon, Button } from 'semantic-ui-react'
import ScrollToTop from "react-scroll-to-top";
// import ScrollToTop from 'react-scroll-up'

const FoodCategory = () => {
    const [items, setItems] = useState(Menu)
    const [food, setFood] = useState("All")
    const [price, setPrice] = useState("All")
    const [type, setType] = useState("All")
    const [modeIsOpen, setModeIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false)
    const getMode = () => {
        return JSON.parse(localStorage.getItem("mode")) || false
    }
    // const getMode = () => {
    //     const initialMode = localStorage.getItem("mode")
    //     if (initialMode === null) {
    //         if (window.matchMedia('prefers-color-schem:dark').matches) {
    //             return true
    //         } else {
    //             return false
    //         }
    //     }
    // }
    const [dark, setDark] = useState(getMode())
    const btnName = [
        { id: 1, btnName: 'Chinese' },
        { id: 2, btnName: 'Gujarati' },
        { id: 3, btnName: 'Punjabi' },
    ]
    // const filterItem = (e) => {
    // setItems(Menu)
    // console.log("cartItem===>", cartItem);
    // if (id === "cat") {
    //     setFood(cartItem)
    //     if (price === "All") {
    //         const UpdateItems = Menu.filter((curElem) => {
    //             return curElem.food === cartItem
    //         })
    //         setItems(UpdateItems)
    //     }
    //     else {
    //         const UpdateItems = Menu.filter((curElem) => {
    //             return curElem.food === cartItem && curElem.price === price
    //         })
    //         setItems(UpdateItems)
    //     }
    // } else if (id === "pri") {
    //     setPrice(cartItem)
    //     if (food === "All") {
    //         const UpdateItems = Menu.filter((curElem) => {
    //             return curElem.price === cartItem
    //         })
    //         setItems(UpdateItems)
    //     } else {
    //         const UpdateItems = Menu.filter((curElem) => {
    //             return curElem.food === food && curElem.price === cartItem
    //         })
    //         setItems(UpdateItems)
    //     }
    // }

    // if (cartItem === 'All') {
    //     if (id === "cat") {
    //         if (price === "All") {
    //             setItems(Menu)
    //         }
    //         else {
    //             const UpdateItems = Menu.filter((curElem) => {
    //                 return curElem.price === price
    //             })
    //             setItems(UpdateItems)
    //         }

    //     } else if (id === "pri") {
    //         if (food === "All") {
    //             setItems(Menu)
    //         } else {
    //             const UpdateItems = Menu.filter((curElem) => {
    //                 return curElem.food === food
    //             })
    //             setItems(UpdateItems)
    //         }
    //     }
    // }
    // }
    const customStyles = {
        content: {
            top: '30%',
            left: '50%',
            right: 'auto',
            transform: 'translate(-50%, -50%)',
            height: "350px",
            backgroundColor: "white"
        },
    };

    const filterItem = () => {
        //console.log(food, price, type);

        if (food === "All" && price === "All" && type === "All") {
            setItems(Menu)
        } else if (food === "All" && price !== "All" && type === "All") {
            const UpdateItem = Menu.filter((curElem) => curElem.price < price)
            setItems(UpdateItem)
            // console.log("first", UpdateItem)
        } else if (food !== "All" && price === "All" && type === "All") {
            const UpdateItem = Menu.filter((curElem) => curElem.food === food)
            setItems(UpdateItem)

        } else if (food === "All" && price === "All" && type !== "All") {
            const UpdateItem = Menu.filter((curElem) => curElem.type === type)
            setItems(UpdateItem)
        } else if (food === "All" && price !== "All" && type !== "All") {
            const UpdateItem = Menu.filter((curElem) => curElem.price < price && curElem.type === type)
            setItems(UpdateItem)
        } else if (food !== "All" && price !== "All" && type === "All") {
            const UpdateItem = Menu.filter((curElem) => curElem.food === food && curElem.price < price)
            setItems(UpdateItem)
        } else if (food !== "All" && price === "All" && type !== "All") {
            const UpdateItem = Menu.filter((curElem) => curElem.food === food && curElem.type === type)
            setItems(UpdateItem)
        } else if (food !== "All" && price !== "All" && type !== "All") {
            //  console.log("Both Not All");
            const UpdateItem = Menu.filter((curElem) => curElem.food === food && curElem.price < price && curElem.type === type)
            setItems(UpdateItem)
        }
        closeModal()
    }

    const openModal = () => {
        setModeIsOpen(true);
    }
    const closeModal = () => {
        setModeIsOpen(false);
    }
    // const handleBtnClick = (thaliName) => {
    //     console.log('thaliName', thaliName);
    //     setItems(Menu.filter((x) => x.food === thaliName))
    // }
    const style = { color: "white", fontSize: "1.5em" }
    let iconStyles = { color: "white", fontSize: "1.5em" };

    const togleVisible = () => {
        if (window.pageYOffset > 20) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', togleVisible)

        return () => window.removeEventListener('scroll', togleVisible)
    }, [])

    return (
        <div style={{ backgroundColor: (dark && '#1a1b1d'), color: (dark && '#fff') }}>
            <div style={{ position: 'fixed', width: '100%', background: 'red', zIndex: 1 }}>
                <button onClick={() => {
                    setDark(!dark)
                    localStorage.setItem("mode", !dark)
                }}
                    style={{ marginRight: 20, height: 35, width: 60, borderRadius: 10, backgroundColor: (dark && 'white'), color: (dark && 'black') }}
                >
                    {/* {`Click to  ${dark ? 'White' : 'Dark'}`} */}
                    <div style={{ height: 25, width: 25, backgroundColor: 'black', borderRadius: '50%', position: 'absolute', top: 3, right: (dark && 0), left: (!dark && 0), zIndex: 999 }} />
                    <img src={sun} style={{ height: 25, widrh: 25, position: 'absolute', top: 3, left: 0 }} />
                    <img src={moon} style={{ height: 23, widrh: 23, position: 'absolute', top: 3, right: 0 }} />
                </button>
                <h3> Lets go for a <FaBeer />? </h3>
                <h3> Lets go for a <FaSun style={{ color: 'red' }} />? </h3>

            </div>

            <button onClick={openModal} className="open-btn">Open</button>

            <div className="App">
                <Modal
                    isOpen={modeIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Food_Food Modal"
                    style={customStyles}
                >
                    <button onClick={(closeModal)} className="close-btn">X</button>
                    <div className="food_description">
                        Please select a food.
                    </div>
                    <div className='food_container'>
                        <label htmlFor="validationCustom04" className="food-label">food </label>
                        <select className="form-select" id="validationCustom04" required onChange={(e) => setFood(e.target.value)} value={food}>
                            <option value="All" >All</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Punjabi">Punjabi</option>
                            <option value="Gujarati">Gujarati</option>
                        </select>
                    </div>
                    <div className='food_container'>
                        <label htmlFor="validationCustom04" className="price-label">Price </label>
                        <select className="form-select" id="validationCustom04" required onChange={(e) => setPrice(e.target.value)} value={price}>
                            <option value="All">All</option>
                            <option value={99}>{"<"}99₹</option>
                            <option value={199}>{"<"}199₹</option>
                            <option value={499}>{"<"}499₹</option>
                            <option value={149}>{"<"}149₹</option>
                            <option value={299}>{"<"}299₹</option>
                        </select>
                    </div>
                    <div className='food_container'>
                        <label htmlFor="validationCustom04" className="price-label">Type</label>
                        <select className="form-select" id="validationCustom04" required onChange={(e) => setType(e.target.value)} value={type}>
                            <option value="All">All</option>
                            <option value="Jain">Jain</option>
                            <option value="Regular">Regular</option>

                        </select>
                    </div>
                    <button style={{ marginTop: 10 }}
                        onClick={filterItem}
                    >Click To Filter</button>
                </Modal>

                {/* <div style={{ display: 'flex', margin: 'auto' }}>
                    <button onClick={() => setItems(Menu)}>All</button>
                    {
                        btnName.map((x) => (
                            <button
                                key={x.id}
                                style={{ marginLeft: 50 }}
                                onClick={() => handleBtnClick(x.btnName)}
                            >{x.btnName}</button>
                        ))
                    }
                </div> */}
                {
                    items.length > 0 && items.map((elem, ind) => {
                        const { image, food, description, price, type } = elem;
                        return (

                            <div className={dark ? 'dark_true' : 'img_content'} key={ind} >
                                <div className="card" style={{ width: "18rem", backgroundColor: (dark && '#1a1b1d'), color: (dark && '#fff') }}>
                                    <img src={require('../food_image/' + image)} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: (dark && '#fff') }}>{food}</h5>
                                        <p className='food_price' style={{ marginTop: 20 }}>{price}</p>
                                        <p className="card-text">{description}</p>
                                        <p className="food_type">{type}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }) || <h1 style={{ color: " rgb(214, 71, 71)" }}>Please Select The Proper Value</h1>
                }
            </div>
            <div
            >
                {/* <ScrollToTop smooth /> */}
                {/* <ScrollToTop showUnder={160}>
                    <span>UP</span>
                </ScrollToTop> */}
            </div>
            <Button
                icon
                onClick={scrollToTop}
                style={{ position: 'fixed', bottom: 30, right: 50, opacity: (isVisible ? 1 : 0) }}><Icon name='american sign language interpreting' /></Button>
        </div>
    )
}

export default FoodCategory;

