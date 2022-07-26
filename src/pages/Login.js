import { Form, Button,  FloatingLabel} from 'react-bootstrap'
import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
import { Navigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import UserContext from '../userContext'
import '../styles/login.css'




export default function Login(){
	

	const {user, setUser} = useContext(UserContext)

		const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [isActive, setIsActive] = useState(false)


function loginUser(e){
			
		e.preventDefault()

		fetch('http://localhost:4000/users/login',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},

			body: JSON.stringify({
				email: email,
				password: password
			})
		})

		.then(res => res.json())
		.then(data => {
			console.log(data)


			if(typeof data.access !== "undefined"){
				localStorage.setItem('token', data.access)
				
				retrieveUserDetails(data.access)



				Swal.fire({
					title: "Login Successful",
					icon: "success",
					text: "Welcome to Zuitt!"
				})
			}else{
				Swal.fire({
					title: "Authentication Failed",
					icon: "error",
					text: "Check your login details and try again!"
				})
			}

		})




		setEmail("");
		setPassword("")
		


	}


	const retrieveUserDetails = (token) => {


			fetch('http://localhost:4000/users/details',{
				headers:{
					Authorization: `Bearer ${token}`
				}
			})
			.then(res => res.json())
			.then(data => {
				console.log(data)

				setUser({
					id: data._id,
					isAdmin: data.isAdmin
				})
			})


		} 



useEffect(() => {
		if(email !== "" && password !== ""){
			

			setIsActive(true)
		}else{
			setIsActive(false)
		}

	}, [email, password])


	return (
		(user.id !== null)?
		<Navigate to="/"/>
		:

		
		<div className="login-container">
					<div className="login-form">
					<div className="title-login">Login</div>
					<div className="user-login">
					<Form onSubmit={(e)=> loginUser(e)}>
		      		<Form.Group className="email-login mb-3" controlId="email">
		        <Form.Label>Email Address</Form.Label>
		        
		        <Form.Control 
			        type="email" 
			        placeholder=" Enter Email"
			        value={email}
			        onChange={e => {
			        	setEmail(e.target.value)
			        	
			        }}
			        required/>
			          <Form.Text className="text-muted">
		          We'll never share your email with anyone else.
		        </Form.Text>
		      	</Form.Group>

		      	<Form.Group className="password-login mb-3" controlId="password1">
		        <Form.Label>Password </Form.Label>
		        
		        <Form.Control 
			        type="password" 
			        placeholder=" Enter password"
			        value={password}
			        onChange={e => {
			        	setPassword(e.target.value)
			        	
			        }} 
			        required/>
			          <Form.Text className="text-muted">
		          <Link to="/signup">Don't have an account?</Link>
		        </Form.Text>

		      			</Form.Group>
		      			<Button variant="primary" type="submit" className="login-btn">
		        		Login
		      			</Button>
		      				</Form>
		      			</div>
		      	</div>
		
		</div>
	)



}