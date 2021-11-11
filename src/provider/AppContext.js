import React, { createContext, useState } from 'react'
import people from '../data/people.json'

export const AppContext = createContext()

function AppProvider({ children }){

    function formatStr(string){
        let s = string.replace('$', '').replace(',', '')
        return parseFloat(s)
    }

    // data of all users
    const users = people.map(obj => {
        return {...obj, balanceNum: formatStr(obj.balance)}
    })

    // salary range for slider
    const [ salaryRange, setSalaryRange ] = useState([1000, 4000])

    return(
        <AppContext.Provider value = {{
            users,
            salaryRange,
            setSalaryRange
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider