import {useContext, useEffect } from 'react'
import{Navigate} from 'react-router-dom'
import UserContext from '../userContext'




export default function Logout(){

	//Consume the UserContext Object and destructure its to access the user state and unsetUser function from the context provider
	const { unsetUser, setUser} = useContext(UserContext)

	unsetUser()

	useEffect(() => {
		//Set the state back to its original value 
		setUser({id: null})
	}, [])


	// localStorage.clear()



	return(

			<Navigate to="/" />

		)

}

