// import React, { useState } from 'react'
// import Auxilary from '../../../hoc/Auxilary'

// const Person = (props) => {
//   const [age, setAge] = useState(props.age)
//   const [name, setName] = useState(props.name)

//   const changeBtn = () => {
//     console.log("clicked");
//     props.setData({
//       Persons: [
//         { name: name, age: 22 },
//         { name: "Dhruvik", age: 20 }, 
//         { name: "Dhruv", age: 21 },
//         { name: "Dharmik ", age: 28 }
//       ]
//     })
//     setAge(17)
//     setName("Kamal")
//   }
//   return (
//     // <div className="person">
//     < Auxilary >
//       <p onClick={props.click}>Hello i am {props.name} and i am {props.age} Years Old</p>
//       <p>Hello i am {name} and i am {age} Years Old</p>
//       <p>{props.children}</p>
//       <button onClick={changeBtn}>Clicked Me</button>
//       <input type="text" onChange={(event) => setName(event.target.value)} //value={props.name}
//       />
//     </Auxilary >
//     // </div>
//   )
// }
// export default Person;


import React, { useContext, useEffect, useRef, useState } from 'react'
import PropsTypes from 'prop-types'
import AuthContext from '../../../context/auth_context'

const Person = (props) => {
  const [age, setAge] = useState(props.age)
  const [name, setName] = useState(props.name)
  const toogleBtnRef1 = useRef(null)

  const contxt = useContext(AuthContext)

  const changeBtn = () => {
    console.log("clicked");
    setAge(17)
    setName("Kamal")
  }
  useEffect(() => {
    console.log("2nd useEffect");
    // toogleBtnRef1.current.click()
    toogleBtnRef1.current.focus()
    //  toogleBtnRef1.current = toogleBtnRef1.current +1
    console.log("toogleBtnRef1.current +1==>", toogleBtnRef1.current + 1);
    return () => {
      console.log("[Cockpit.js]..2nd useEffect");
    }
  })

  return (
    <>
      <div className="person">
        {/* <AuthContext.Consumer>
        {(context)=>context.authenticated   ? <p>authenticated</p> : <p>please login first</p>}
        </AuthContext.Consumer> */}
        {contxt.authenticated ? <p>authenticated</p> : <p>please login first</p>}
        {/* {props.isAuth  ? <p>authenticated</p> : <p>please login first</p>} */}
        <p onClick={props.click}>Hello i am {props.name} and i am {props.age} Years Old</p>
        <p >Hello i am {name} and i am {age} Years Old</p>
        <p>{props.children}</p>
        <button onClick={changeBtn}
        //  ref={toogleBtnRef1}
        >Clicked Me</button>
        <input type="text" onChange={props.changed} value={props.name}
          ref={toogleBtnRef1}
        />

      </div>
    </>

  )
}
Person.propsTypes = {
  cliclk: PropsTypes.func,
  name: PropsTypes.string,
  age: PropsTypes.number,
  changed: PropsTypes.func,

}
export default Person;
