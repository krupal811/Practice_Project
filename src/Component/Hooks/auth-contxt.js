import { createContext } from 'react'

const authcontxt = createContext({ status: false, login: () => { } })

export default authcontxt