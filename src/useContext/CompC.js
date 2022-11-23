import React, { useContext } from 'react'
import { Firstname, Lastname, BioData, Address } from './CompA'


const CompC = () => {
    const companyName = useContext(BioData)
    const adress = useContext(Address)
    return (
        <>
            <Firstname.Consumer>
                {(fname) => {
                    return (
                        <Lastname.Consumer>
                            {(lname) => {
                                return (
                                    <>
                                        <h1>Hello My Name is {fname} {lname}</h1>
                                        <h2>And our comapny Name is  {companyName}</h2>
                                        <h3>And i am Living At {adress}</h3>
                                    </>
                                )
                            }}
                        </Lastname.Consumer>
                    )
                }}
            </Firstname.Consumer>

        </>
    )
}

export default CompC