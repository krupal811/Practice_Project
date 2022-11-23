import React from 'react'
import { useState } from 'react'
import './bootStrap.css'

const BootStrap = () => {
    const [visible, setVisible] = useState(false)

    return (
        <div >
            <div className="progress">
                <div className="progress-bar" style={{ width: (visible && "70%" || "50%") }}></div>
            </div>
            {visible && <div className="toast show">
                <div className="toast-header">
                    <strong className="me-auto">Toast Header</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="toast"></button>
                </div>
                <div className="toast-body">
                    <p>Some text inside the toast body</p>
                </div>
            </div>}
            <div
                className='main_nav_div'
                style={{ fontFamily: 'Acme' }}
            >
                <div className='child_nav_div'>Home</div>
                <div className='child_nav_div'>About</div>
                <div className='child_nav_div'>Contact</div>
                <div className='child_nav_div'>service</div>
                <div className='child_nav_div' style={{ color: 'black' }}> <button onClick={() => setVisible(!visible)}><i className={`fa ${visible ? 'fa-bars' : 'fa-close'}`}></i></button></div>
            </div>
            <br />
            <div
                className='main_nav_div'
                style={{ fontFamily: 'Carter One' }}
            >
                <div className='child_nav_div'>Home</div>
                <div className='child_nav_div'>About</div>
                <div className='child_nav_div'>Contact</div>
                <div className='child_nav_div'>service</div>
            </div>
            <div className="container mt-3">
                <h3>Form Validation</h3>
                <p>Try to submit the form.</p>

                <form action="/action_page.php" className="was-validated">
                    <div className="mb-3 mt-3">
                        <label htnlfor="uname" className="form-label">Username:</label>
                        <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd" className="form-label">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="myCheck" name="remember" required />
                        <label className="form-check-label" htmlFor="myCheck">I agree on blabla.</label>
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Check this checkbox to continue.</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="container mt-3">
                <h2>Custom Range</h2>
                <p>To create a custom range menu, add the .form-range class to the input element with type="range":</p>
                <form action="/action_page.php">
                    <label htmlFor="customRange" className="form-label">Custom range</label>
                    <input type="range" className="form-range" id="customRange" name="points" />

                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
            <div className="container-fluid p-5 bg-primary text-white text-center" >
                <h1>My First Bootstrap Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>

            <div className="container mt-5" style={{ fontFamily: 'Cabin' }} >
                <div className="row">
                    <div className="col-sm-4">
                        <h1>Column 1</h1>
                        <h2>Lorem ih2sum dolor sit amet, consectetur adih2isicing elit...</h2>
                        <h3>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</h3>
                    </div>
                    <div className="col-sm-4">
                        <h1>Column 1</h1>
                        <h2>Lorem ih2sum dolor sit amet, consectetur adih2isicing elit...</h2>
                        <h3>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</h3>
                    </div>
                    <div className="col-sm-4">
                        <h1>Column 1</h1>
                        <h2>Lorem ih2sum dolor sit amet, consectetur adih2isicing elit...</h2>
                        <h3>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</h3>
                    </div>
                </div>
            </div>

            <div className="container mt-5" style={{ fontFamily: 'Special Elite' }} >
                <div className="row">
                    <div className="col-sm-4">
                        <h1>Column 1</h1>
                        <h2>Lorem ih2sum dolor sit amet, consectetur adih2isicing elit...</h2>
                        <h3>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</h3>
                    </div>
                    <div className="col-sm-4">
                        <h1>Column 1</h1>
                        <h2>Lorem ih2sum dolor sit amet, consectetur adih2isicing elit...</h2>
                        <h3>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</h3>
                    </div>
                    <div className="col-sm-4">
                        <h1>Column 1</h1>
                        <h2>Lorem ih2sum dolor sit amet, consectetur adih2isicing elit...</h2>
                        <h3>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</h3>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#section1">Section 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section2">Section 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section3">Section 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section4">Section 4</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section5">Section 5</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section6">Section 6</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div id="section1" className="container-fluid bg-success text-white" style={{ padding: "100px 20px" }}>
                <h1>Section 1</h1>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            </div>

            " <div id="section2" className="container-fluid bg-warning" style={{ padding: "100px 20px" }}>
                <h1>Section 2</h1>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            </div>

            <div id="section3" className="container-fluid bg-secondary text-white" style={{ padding: "100px 20px" }}>
                <h1>Section 3</h1>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            </div>
            <div id="section4" className="container-fluid bg-danger text-white" style={{ padding: "100px 20px" }}>
                <h1>Section 4</h1>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            </div>
            <div id="section5" className="container-fluid bg-dark text-white" style={{ padding: "100px 20px" }}>
                <h1>Section 5</h1>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            </div>
            <div id="section6" className="container-fluid bg-info text-white" style={{ padding: "100px 20px" }}>
                <h1>Section 6</h1>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            </div>
            <div className="offcanvas offcanvas-start" id="demo">
                <div className="offcanvas-header">
                    <h1 className="offcanvas-title">Heading</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Some text lorem ipsum.</p>
                    <p>Some text lorem ipsum.</p>
                    <p>Some text lorem ipsum.</p>
                    <button className="btn btn-secondary" type="button">A Button</button>
                </div>
            </div>

            <div className="container-fluid mt-3">
                <h3>Offcanvas Sidebar</h3>
                <p>Offcanvas is similar to modals, except that it is often used as a sidebar.</p>
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                    Open Offcanvas Sidebar
                </button>
            </div>
        </div>
    )
}

export default BootStrap