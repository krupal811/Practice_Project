import React, { createContext } from 'react'
import CompB from './CompB'

//context Api
const Firstname = createContext()
const Lastname = createContext()

//useContext
const BioData = createContext()
const Address = createContext()

const CompA = () => {
    return (
        <>
            <Firstname.Provider value={"Krupal"}>
                    <Lastname.Provider value={"Patel"}>
                        <BioData.Provider value={"Buoyancy Software"}>
                            <Address.Provider value={"Ahmedabad"}>
                                <CompB />
                            </Address.Provider>
                        </BioData.Provider>
                    </Lastname.Provider>
            </Firstname.Provider>
        </>

    )
}

export default CompA
export { Firstname, Lastname, BioData, Address }
