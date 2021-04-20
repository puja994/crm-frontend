import React , {useState} from 'react'
import './entry.style.css'
import {Jumbotron} from 'react-bootstrap'
import {Login} from '../../components/login/Login.comp'
import {PasswordReset} from '../../components/password-reset/PasswordReset.comp'

export const Entry = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [frmLoad, setfrmLoad] = useState("login")

    const handleOnChange = e =>{
        const {name, value} = e.target

        switch(name){
            case'email':
            setEmail(value)
            break;
            case'password':
            setPassword(value)
            break;

            default:
                break;

        }
        
            
        }
        const handleOnSubmit = e =>{
            e.preventDefault()
             if(!email || !password){
                return alert ('please enter details')
            }
       
    }

    const handleOnResetSubmit = e =>{
        e.preventDefault()
         if(!email ){
            return alert ('please enter email')
        }
   
}

    const formSwitcher = frmType =>{
        setfrmLoad(frmType)

    }
    return (
        <div className="entry-page bg-info">
           <Jumbotron className="form-box">
               {frmLoad === 'login' && 
               <Login 
               handleOnChange={handleOnChange}
               handleOnSubmit={handleOnSubmit}
               formSwitcher={formSwitcher}
               email={email}
               password={password}
               />}
               {frmLoad === 'reset' && 
               <PasswordReset 
               handleOnChange={handleOnChange}
               handleOnResetSubmit={handleOnResetSubmit}
               formSwitcher={formSwitcher}
               email={email}
               />}
           </Jumbotron>
        </div>
    )
}
