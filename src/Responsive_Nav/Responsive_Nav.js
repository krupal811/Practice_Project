import React, { useState, useRef, useEffect } from 'react'
import './responsive_Nav.css'
import logo from '../assets/images/Buoyancy.jpeg'
import { FaBars, FaBehance, FaFacebook, FaLinkedin, FaTwitter, FaTimes } from 'react-icons/fa';
import { Button, Item } from 'semantic-ui-react';


const Responsive_Nav = () => {
    const links = [
        {
            id: 1,
            url: '/',
            text: 'home',
        },
        {
            id: 2,
            url: '/about',
            text: 'about',
        },
        {
            id: 3,
            url: '/projects',
            text: 'projects',
        },
        {
            id: 4,
            url: '/contact',
            text: 'contact',
        },
        {
            id: 5,
            url: '/profile',
            text: 'profile',
        },
    ];

    const social = [
        {
            id: 1,
            url: 'https://www.twitter.com',
            icon: <FaFacebook />,
        },
        {
            id: 2,
            url: 'https://www.twitter.com',
            icon: <FaTwitter />,
        },
        {
            id: 3,
            url: 'https://www.twitter.com',
            icon: <FaLinkedin />,
        },
        {
            id: 4,
            url: 'https://www.twitter.com',
            icon: <FaBehance />,
        },
    ];
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [showLinks, setShowLinks] = useState(false);
    const [item, setItem] = useState({
        productName: '',
        productPrice: '',
        productTotalPrice: '',
    })
    const [products, setProducts] = useState([])
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);
    const handlClick = () => {
        setProducts([...products, item.productName, item.productPrice, item.productTotalPrice])
    }
    return (
        <>  <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} className='logo' alt='logo' />
                    <button className='nav-toggle' onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                <div className='links-container' ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <ul className='social-icons'>
                    {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon;
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <input value={item.productName} onChange={(e) => setItem({ ...item, productName: e.target.value })} />
            <input value={item.productPrice} onChange={(e) => setItem({ ...item, productPrice: e.target.value })} />
            <input value={item.productTotalPrice} onChange={(e) => setItem({ ...item, productTotalPrice: e.target.value })} />
            {console.log('item', item)}
            <Button onClick={handlClick}>Add</Button>
            {products.length > 0 && products?.map((product) => (
                <tr>
                    <input value={product} />
                </tr>
            ))}
        </nav>
            <div
                className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
                    }`}
            >
                <div className='modal-container'>
                    <h3>modal content</h3>
                    <button className='close-modal-btn' onClick={() => setIsModalOpen(false)}>
                        <FaTimes></FaTimes>
                    </button>
                </div>
            </div>

            <button onClick={() => setIsModalOpen(true)}>Click</button>
        </>

    )
}

export default Responsive_Nav