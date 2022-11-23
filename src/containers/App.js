// import React, { useState } from 'react';
// import './App.css';

// const Person = (props) => {
//   const [age, setAge] = useState(props.age)
//   const [name, setName] = useState(props.name)

//   const changeBtn = () => {
//     console.log("clicked");
//     setAge(17)
//     setName("Kamal")

//   }

//   return (
//     <>
//     <div className='person'>
//       <h1 onClick={props.click}>Hello i am {props.name} and i am {props.age} Years Old</h1>
//       <h1>Hello i am {name} and i am {age} Years Old</h1>
//       <p>{props.children}</p>
//       <button onClick={changeBtn}>Clicked Me</button>
//       <input type="text"  onChange={props.change} // value={props.name}
//       />
// </div>
//     </>
//   )
// }
// const App = () => {
//   // const data = {
//   //   Persons: [
//   //     { name: "krupal", age: 22 },
//   //     { name: "Ram", age: 28 },
//   //     { name: "Jigar", age: 20 },
//   //     { name: "Niyal", age: 21 }
//   //   ]
//   // }
//   const [data, setData] = useState({
//     Persons: [

//       { name: "Dhruv", age: 22 },
//       { name: "Dhruvik", age: 20 },
//       { name: "Dhruvil", age: 21 },
//       { name: "Dharmik", age: 28 },
//     ]
//   })

//   const handleClick = () => {
//     console.log("clicked");
//     setData({
//       Persons: [
//         { name: "Shankar", age: 58 },
//         { name: "Bhavesh", age: 35 },
//         { name: "Keyur", age: 23 },
//         { name: "Ronit", age: 21 }
//       ]
//     })
//   }
//   const handleChange = (event) => {
//     setData({
//       Persons: [
//         { name: "Dhruv", age: 22 },
//         { name: "Dhruvik", age: 20 },
//         { name: event.target.value, age: 21 },
//         { name: "Dharmik ", age: 28 }
//       ]
//     })
//   }

//   return (
//     <>
//       <div className='App' >
//         {/* <h1>Hello i am krupal and i am {Math.floor(Math.random() * 10)} Years Old</h1> */}
//         {/* <Person name="Krupal" age="20" />
//         <Person name="Jenil" age="15" />
//         <Person name="Vicky" age="38">My Hobbies: Swiming</Person>
//         <Person name="Parth" age="22" />*/}
//         <button onClick={handleClick}>Clicked to Change</button>
//         <Person name={data.Persons[0].name} age={data.Persons[0].age} />
//         <Person name={data.Persons[1].name} age={data.Persons[1].age} />
//         <Person name={data.Persons[2].name} age={data.Persons[2].age} click={handleClick} change={handleChange}>My Hobbies: Playing</Person>
//         <Person name={data.Persons[3].name} age={data.Persons[3].age} />

//       </div>
//     </>
//   );
//   // return React.createElement("div", null, "h1", "Hello!!!!!!!!!!!!!!!!!")
//   // return React.createElement("div", null, "h1", React.createElement("h1", null, " Hwllo World"))
//   // return React.createElement("div",{className:"App"} ,null, React.createElement("h1", null, " Hello World"))

// }

// export default App;

// //Chapter 4
// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';
// const App = () => {

//   const [data, setData] = useState({
//     Persons: [

//       { name: "Dhruv", age: 22 },
//       { name: "Dhruvik", age: 20 },
//       { name: "Dhruvil", age: 21 },
//       { name: "Dharmik", age: 28 },
//     ],
//     showPerson: false
//   })

//   const handleClick = () => {
//     console.log("clicked");
//     setData({
//       Persons: [
//         { name: "Shankar", age: 58 },
//         { name: "Bhavesh", age: 35 },
//         { name: "Keyur", age: 23 },
//         { name: "Ronit", age: 21 }
//       ]
//     })
//   }
//   const handleChange = (event) => {
//     setData({
//       Persons: [
//         { name: "Dhruv", age: 22 },
//         { name: "Dhruvik", age: 20 },
//         { name: event.target.value, age: 21 },
//         { name: "Dharmik ", age: 28 }
//       ]
//     })
//   }
//   const togglePerson = () => {
//     console.log("clicked");
//     const doesShow = data.showPerson;
//     setData({ ...data,showPerson: !doesShow });
//   }

//   return (
//     <>
//       <div className='App' >

//         <button onClick={togglePerson}>Clicked to Show</button>
//         {data.showPerson &&
//           <div>
//             <Person name={data.Persons[0].name} age={data.Persons[0].age} />
//             <Person name={data.Persons[1].name} age={data.Persons[1].age} />
//             <Person name={data.Persons[2].name} age={data.Persons[2].age}
//             click={handleClick} change={handleChange}
//             >My Hobbies: Playing</Person>
//             <Person name={data.Persons[3].name} age={data.Persons[3].age} />
//           </div>

//         }
//       </div>
//     </>
//   );

// }

// export default App;

// //Chapter 4
// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';
// const App = () => {

//   const [data, setData] = useState({
//     persons: [
//       { name: 'Krupal', age: 22 },
//       { name: 'Yash', age: 29 },
//       { name: 'Dhruvik', age: 26 }
//     ],
//     showPersons: false
//   })

//   const togglePersonsHandler = () => {
//     const doesShow = data.showPersons;
//     setData({ ...data, showPersons: !doesShow });
//   }

//   let persons = null;
//   if (data.showPersons) {
//     persons = (
//       <div>
//         <Person
//           name={data.persons[0].name}
//           age={data.persons[0].age} />
//         <Person
//           name={data.persons[1].name}
//           age={data.persons[1].age}
//         >My Hobbies: Racing</Person>
//         <Person
//           name={data.persons[2].name}
//           age={data.persons[2].age} />
//       </div>
//     );
//   }

//   return (
//     <div className="App">
//       <button
//         onClick={togglePersonsHandler}>Toggle Persons</button>
//       {persons}
//     </div>
//   );
//   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
// }

// export default App;

// //Chapter 4
// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';
// const App = () => {

//   const [data, setData] = useState({
//     persons: [
//       { name: 'Krupal', age: 22 },
//       { name: 'Yash', age: 29 },
//       { name: 'Dhruvik', age: 26 }
//     ],
//     showPersons: false
//   })

//   const togglePersonsHandler = () => {
//     const doesShow = data.showPersons;
//     setData({ ...data, showPersons: !doesShow });
//   }

//   let persons = null;
//   if (data.showPersons) {
//     persons = (
//       <div>
//         {data.persons.map(person => {
//           return <Person name={person.name} age={person.age} />
//         })}

//       </div>
//     );
//   }
//   return (
//     <div className="App">
//       <button
//         onClick={togglePersonsHandler}>Toggle Persons</button>
//       {persons}
//     </div>
//   );
// }
// export default App;

// import React, { useState } from 'react'
// import './App.css'

// const App = () => {
//   const [data, setData] = useState({
//     email: "",
//     pass: "",
//     branch: "",
//     gender: "",
//   })

//   const inputEvent = (event) => {
//     const { name, value } = event.target;
//     setData({
//       ...data,
//       [name]: value
//     }
//     )
//   }

//   const handleClicked = () => {
//     alert(`email- ${data.email}, pass- ${data.pass}`)
//   }
//   const submitted = (e) => {
//     e.preventDefault()
//   }

//   return (<>
//     <form className='App' onSubmit={submitted} >
//       <div className='heading' >

//         <h1>Ragistration Form</h1>
//       </div>
//       <div className='email_container'>
//         <label>Email :- </label>
//         <input type="email" placeholder='Enter Your Email' name='email' className='content' value={data.email} onChange={(e) => inputEvent(e)} />
//       </div>
//       <div className='pass_container'>
//         <label >Password :- </label>
//         <input type="Password" placeholder='Enter Your Passwrod' name='pass' className='content' value={data.pass} onChange={(e) => inputEvent(e)} />
//       </div>
//       <select className="branch_select" value={data.branch} onChange={(e) => inputEvent(e)} name="branch" >
//         <option selected>--Branch--</option>
//         <option value="Mechanical" >Mechanical</option>
//         <option value="Chemical">Chemical</option>
//         <option value="Computer">Computer</option>
//         <option value="Civil">Civil</option>
//         <option value="Electrical">Electrical</option>
//       </select>
//       <div className="form-check">
//         <input type="radio" value="male" onChange={(e) => inputEvent(e)} name="gender"  />
//         <label >
//           Male
//         </label>
//         <input type="radio" value="female" onChange={(e) => inputEvent(e)} name="gender" />
//         <label >
//           Female
//         </label>
//       </div>
//       <div className='btn'>
//         <button
//           onClick={handleClicked}
//         >
//           Submit
//         </button>
//       </div>

//     </form>
//     <div className='App'>
//       {data.email} <br />
//       {data.pass} <br />
//       {data.branch} <br />
//       {data.gender}
//     </div>
//   </>
//   )
// }

// export default App;
// import React, { useState } from 'react'
// import { useRef } from 'react'
// import './App.css'

// const App = () => {
//   const [data, setData] = useState({
//     email: "",
//     pass: "",
//     branch: "",
//     gender: "",
//   })
//   const [id, setId] = useState()

//   const inputEvent = (event) => {
//     const { name, value } = event.target;
//     setData({
//       ...data,
//       [name]: value
//     }
//     )
//   }

//   const handleClicked = () => {
//     alert(`email- ${data.email}, pass- ${data.pass}`)
//   }
//   const idRef = useRef()
//   const submitted = (e) => {
//     e.preventDefault()

//     setId(idRef.current.value)
//   }

//   return (<>
//     <form className='App' onSubmit={submitted} >
//       <div className='heading' >

//         <h1>Ragistration Form</h1>
//       </div>
//       <div className='email_container'>
//         <label>Email :- </label>
//         <input type="email" placeholder='Enter Your Email' name='email' className='content' ref={idRef} />
//       </div>
//       <div className='pass_container'>
//         <label >Password :- </label>
//         <input type="Password" placeholder='Enter Your Passwrod' name='pass' className='content' value={data.pass} />
//       </div>
//       <select className="branch_select" name="branch" >
//         <option selected>--Branch--</option>
//         <option value="Mechanical" >Mechanical</option>
//         <option value="Chemical">Chemical</option>
//         <option value="Computer">Computer</option>
//         <option value="Civil">Civil</option>
//         <option value="Electrical">Electrical</option>
//       </select>
//       <div className="form-check">
//         <input type="radio" value="male" name="gender" />
//         <label >
//           Male
//         </label>
//         <input type="radio" value="female" name="gender" />
//         <label >
//           Female
//         </label>
//       </div>
//       <div className='btn'>
//         <button>
//           Submit
//         </button>
//       </div>

//     </form>
//     <div className='App'>
//       {id}
//       {data.email} <br />
//       {data.pass} <br />
//       {data.branch} <br />
//       {data.gender}
//     </div>
//   </>
//   )
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person'

// const App = () => {

//   const [data, setData] = useState({
//     Persons: [

//       { id: 'asfa1', name: "Dhruv", age: 22 },
//       { id: 'vasdf1', name: "Dhruvik", age: 20 },
//       { id: 'asdf11', name: "Dhruvil", age: 21 },
//       { id: 'asdf22', name: "Dharmik", age: 28 },
//     ]
//   })

//   const handleClick = () => {
//     console.log("clicked");
//     setData({
//       Persons: [
//         { name: "Shankar", age: 58 },
//         { name: "Bhavesh", age: 35 },
//         { name: "Keyur", age: 23 },
//         { name: "Ronit", age: 21 }
//       ]
//     })
//   }
//   const handleDelete = (personIndex) => {
//     const del = data.Persons
//     del.splice(personIndex, 1)
//     setData({ ...data, del: del })

//   }
//   const handleChange = (event, id) => {
//     const personIndex = data.Persons.findIndex(p => {
//       return p.id === true
//     })
//     const person = { ...data.Persons[personIndex] };
//     person.name = event.target.value
//     const persons = [...data.Persons]

//     persons[personIndex] = person
//     setData({Persons: persons})
//     // setData({
//     //   Persons: [
//     //     { name: "Dhruv", age: 22 },
//     //     { name: "Dhruvik", age: 20 },
//     //     { name: event.target.value, age: 21 },
//     //     { name: "Dharmik ", age: 28 }
//     //   ]
//     // })
//   }

//   return (
//     <>
//       <div className='App' >

//         <button onClick={handleClick}>Clicked to Change</button>
//         {
//           data.Persons.map((person, index) => {
//             return <Person name={person.name} age={person.age} id={person.id} click={() => handleDelete(index)} change={(event) => handleChange(event, person.id)} />
//           })
//         }

//       </div>
//     </>
//   );

// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';
// import Table from './Table';

// const App = () => {
//   const [data, setData] = useState({
//     Persons: [

//       { name: "Dhruv", age: 22 },
//       { name: "Dhruvik", age: 20 },
//       { name: "Dhruvil", age: 21 },
//       { name: "Dharmik", age: 28 },
//     ],
//     showPerson: false
//   })

//   const handleClick = () => {
//     console.log("clicked");
//     setData({
//       // Persons: [{ name: "Shankar", age: 58 }],
//       ...data, showPerson: !data.showPerson
//     })
//   }

//   return (
//     <>
//       <div className='App' >

//         <button onClick={handleClick} className="btn">Show table</button>

//         <Person name={data.Persons[0].name} age={data.Persons[0].age} setData={setData} />
//         {
//           data.showPerson ? <Table data={data} /> : null
//         }
//       </div>
//     </>
//   );

// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';

// const Person = (props) => {
//   const [age, setAge] = useState(props.age)
//   const [name, setName] = useState(props.name)

//   const changeBtn = () => {
//     console.log("clicked");
//     setAge(17)
//     setName("Kamal")
//   }

//   return (
//     <>
//       <div className='person'>
//         <p onClick={props.click}>Hello i am {props.name} and i am {props.age} Years Old</p>
//         <p>Hello i am {name} and i am {age} Years Old</p>
//         <p>{props.children}</p>
//         <button onClick={changeBtn}>Clicked Me</button>
//         <input type="text" onChange={props.change} value={props.name}
//         />
//       </div>
//     </>
//   )
// }
// const App = () => {

//   const [data, setData] = useState({
//     Persons: [

//       { id: 'asfa1', name: "Dhruv", age: 22 },
//       { id: 'vasdf1', name: "Dhruvik", age: 20 },
//       { id: 'asdf11', name: "Dhruvil", age: 21 },
//       { id: 'asdf22', name: "Dharmik", age: 28 },
//     ]
//   })

//   const handleClick = () => {
//     console.log("clicked");
//     setData({
//       Persons: [
//         { name: "Shankar", age: 58 },
//         { name: "Bhavesh", age: 35 },
//         { name: "Keyur", age: 23 },
//         { name: "Ronit", age: 21 }
//       ]
//     })
//   }
//   const handleDelete = (personIndex) => {
//     const del = data.Persons
//     del.splice(personIndex, 1)
//     setData({ ...data, del: del })

//   }
//   const handleChange = (event, id) => {
//     const personIndex = data.Persons.findIndex(p => {
//       return p.id === true
//     })
//     const person = { ...data.Persons[personIndex] };
//     person.name = event.target.value
//     const persons = [...data.Persons]

//     persons[personIndex] = person
//     setData({ Persons: persons })

//   }

//   return (

//     <>
//       <div className='App' >

//         <button onClick={handleClick}>Clicked to Change</button>
//         {
//           data.Persons.map((person, index) => {
//             return <Person name={person.name} age={person.age} id={person.id} click={() => handleDelete(index)} change={(event) => handleChange(event, person.id)} />
//           })
//         }

//       </div>

//     </>
//   );

// }

// export default App;

import React, { useContext, useState } from "react";
import "./App.css";
import Persons from "../Component/Persons/Persons";
import Cockpit from "../Component/Cockpit/Cockpit";
import FoodCategory from "../Food_category/FoodCategory";
import CompA, { BioData } from "../useContext/CompA";
import AuthContext from "../context/auth_context";
import Blog from './Blog/Blog'
import Todo from "../Component/Hooks/Todo";
import Auth from "../Component/Hooks/Auth";
// import Header from "../Component/Hooks/Header";
import AuthContxt from "../Component/Hooks/auth-contxt";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "../react-router/StartPage/StartPage";
import Form_Validation from "../form_validation/Form_Validation";
import UseEffectProject from "../useEffect/UseEffectProject";
import QuizPage from "../Quiz/QuizPage";
import UploadImage from "../Upload Image/UploadImage";
import 'antd/dist/antd.css';

import AppHeader from '../components/common/header';
import AppFooter from '../components/common/footer';
import AppHome from '../views/home';

import Animation from '../Animation/Animation'

import { DatePicker, Layout } from 'antd';
import { ThemeContext } from "../context";
import ScrollImg from "../ScorellImg/ScrollImg";
import Axios from "../axios/Axios";
import Timer from "../Timer/Timer";
import Video_Play_Pause from "../Video_Play_Pause/Video_Play_Pause";
import Alerts from "../Alerts/Alerts";
import BootStrap from '../BootStrap/BootStrap'
import Box_Shadow from "../Box_Shadow/Box_Shadow";
import Plan_List from "../Plan_List/Plan_List";
import Calculator from "../Calculator/Calculator";
import Filter from "../Filter/Filter";
import WhatsappClone from "../WhatsappClone/WhatsappClone";
import Generate_Para from "../Generate Paragraph/Generate_Para";
import Image_Slider from "../Image_Slider/Image_Slider";
import Responsive_Nav from "../Responsive_Nav/Responsive_Nav";
import Input from "../Input/Input";
import ReactPlayer from '../ReactPlayer/ReactPlayer'
import StickyHeader from "../StickyHeader/StickyHeader";
import Spotify from '../Spotify/Spotify'
import Tik_tak_toe from '../Tik_Tak_Toe/Tik_tac_toe'
import CustomeDate from '../CustomeDate/CustomeDate'
// import RocketProject from "../RocketProject";
const { Header, Content, Footer } = Layout;


const App = (props) => {
  const [data, setData] = useState({
    Persons: [
      { id: "asfaf1", name: "Dhruv", age: 22 },
      { id: "vasdf1", name: "Dhruvik", age: 20 },
      { id: "asdf11", name: "Dhruvil", age: 21 },
      { id: "asdf22", name: "Dharmik", age: 28 },
    ],
    showCockpit: true,
    authenticated: false,
  });

  const handleClick = () => {
    console.log("clicked");
    setData({
      Persons: [
        { name: "Shankar", age: 58 },
        { name: "Bhavesh", age: 35 },
        { name: "Keyur", age: 23 },
        { name: "Ronit", age: 21 },
      ],
    });
  };
  const handleDelete = (personIndex) => {
    const del = data.Persons;
    del.splice(personIndex, 1);
    setData({ ...data, del: del });
  };
  const handleChange = (event, id) => {
    const personIndex = data.Persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...data.Persons[personIndex] };
    person.name = event.target.value;
    const persons = [...data.Persons];

    persons[personIndex] = person;
    setData({ Persons: persons });
  };
  const handlelogin = () => {
    setData({ ...data, authenticated: true });
  };
  //   const str = "this is my string"
  // for(let name in str){
  //   console.log(str[name]);
  // }
  // const myName = ["kp", "vk", "dvdv", "kvdvfvfgr"]

  // console.log(myName);

  // for (let i = 0; i < myName.length; i++) {
  //   console.log(myName[i])
  // }

  const [page, setPage] = useState("auth")
  const switchPage = (pageName) => {
    setPage(pageName)
  }

  const [authStatus, setAuthStatus] = useState(false)
  const login = () => {
    setAuthStatus(true)
  }
  const time = new Date();
  time.setSeconds(time.getSeconds() + 180);


  return (
    <>
      {/* <div className="App">
        <button onClick={() => setData({ ...data, showCockpit: false })}>
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{ authenticated: data.authenticated, login: handlelogin }}
        >
          {data.showCockpit ? (
            <Cockpit
              Persons={data.Persons}
              clicked={handleClick}
              title={props.appTitle}
              //      login= {handlelogin}
            />
          ) : null}
          <Persons
            Persons={data.Persons}
            delete={handleDelete}
            changed={handleChange}
            isAuthenticated={data.authenticated}
          />
        </AuthContext.Provider>
        </div> */}
      {/* <AuthContxt.Provider value={{ status: authStatus, login: login }}>
          <Header onLoadTodos={switchPage}
            onLoadAuth={switchPage} />
          <hr />
          {page === 'auth' ? <Auth /> : <Todo />}
        </AuthContxt.Provider> */}
      {/* <CompA /> */}
      {/* <FoodCategory /> */}
      {/* <Animation /> */}
      {/* <UseEffectProject /> */}
      {/* <Form_Validation /> */}
      {/* <BrowserRouter> */}
      {/* <Blog /> */}
      {/* <StartPage />
      </BrowserRouter> */}
      {/* <QuizPage /> */}
      {/* <UploadImage /> */}
      {/* <div>
        <Layout className="mainLayout">
          <Header>
            <AppHeader />
          </Header>
          <Content>
            <AppHome />
          </Content>
          <Footer>
            <AppFooter />
          </Footer>
        </Layout>
      </div> */}
      {/* <ScrollImg /> */}
      {/* <Axios /> */}
      {/* <Timer expiryTimestamp={time} /> */}
      {/* <Timer/> */}
      {/* <Video_Play_Pause /> */}
      {/* <Alerts /> */}
      {/* <BootStrap /> */}
      {/* <Box_Shadow /> */}
      {/* <Plan_List /> */}
      {/* <Calculator /> */}
      {/* <Filter /> */}
      {/* <WhatsappClone /> */}
      {/* <Generate_Para /> */}
      {/* <Image_Slider /> */}
      {/* <Responsive_Nav /> */}
      {/* <RocketProject /> */}
      {/* <Input /> */}
      {/* <ReactPlayer /> */}
      {/* <StickyHeader /> */}
      {/* <Spotify /> */}
      {/* <Tik_tak_toe /> */}
      <CustomeDate />



      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompA />} />
          <Route path="/FoodCategory" element={<FoodCategory />} />
          <Route path="/Animation" element={<Animation />} />
          <Route path="/UseEffectProject" element={<UseEffectProject />} />
          <Route path="/Form_Validation" element={<Form_Validation />} />
          <Route path="/ScrollImg" element={<ScrollImg />} />
          <Route path="/Axios" element={<Axios />} />
          <Route path="/Timer" element={<Timer />} />
          <Route path="/Alerts" element={<Alerts />} />
          <Route path="/Video_Play_Pause" element={<Video_Play_Pause />} />
        </Routes>
      </BrowserRouter> */}

    </>
  );
};

export default App;
