import React, { useContext, useEffect, useRef } from 'react'
import AuthContext from '../../context/auth_context'


const Cockpit = (props) => {
    const toogleBtnRef = useRef(null)
    const authContext = useContext(AuthContext)

    console.log(authContext.authenticated);
    useEffect(() => {
        console.log("1st useEffect");
        // setTimeout(() => {
        //     alert("Done")
        // }, 1000);
        return () => {
            console.log("[Cockpit.js]..1stnd useEffect");

        }

    }, [])
    useEffect(() => {
        console.log("2nd useEffect");
        // toogleBtnRef.current.click()
        // toogleBtnRef.current.focus()
        //  toogleBtnRef.current = toogleBtnRef.current +1
        console.log("toogleBtnRef.current +1==>", toogleBtnRef.current + 1);
        return () => {
            console.log("[Cockpit.js]..2nd useEffect");
        }
    })

    return (
        <>
            <h1>{props.title}</h1>
            <p>Good Morning</p>
            <button
                //  ref={toogleBtnRef} 
                onClick={props.clicked} className="btn" >Clicked to Change</button>
            {/* <button onClick={props.login}>Log in</button> */}
            {/* <AuthContext.Consumer> {(context)=> <button onClick={context.login}>Log in</button>}</AuthContext.Consumer> */}
            <button onClick={authContext.login}>log in</button>
        </>
    )

}
export default Cockpit;