import { Form, Button,  FloatingLabel} from 'react-bootstrap'
import { useState,useEffect,useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import UserContext from '../userContext'
import '../styles/signup.css'







export default function Signup(){
const {user, setUser} = useContext(UserContext)
	const navigate = useNavigate() 


	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [mobileNo, setMobileNo] = useState("")
	const [email, setEmail] = useState("")
	const [password1, setPassword1] = useState("")
	const [password2, setPassword2] = useState("")
	const [isActive, setIsActive] = useState(false)

	function registerUser(e){
			
		e.preventDefault()

		fetch('http://localhost:4000/users/checkEmail',{
			method: "POST",
			headers: {
				'Content-Type': "application/json"
			},
			body: JSON.stringify({
				email: email
			})
		})

		.then(res => res.json())
		.then(data => {
			console.log(data)


			if (data == true){
				Swal.fire({
					title: "Duplicate Email found",
					icon: "error",
					text: "Kindy provide anotherr email to complete registeration."
				})
			}else{

				fetch('http://localhost:4000/users/register', {
					method: "POST",
					headers:{
						'Content-Type': "application/json"
					},
					body: JSON.stringify({
						firstName: firstName,
						lastName: lastName,
						email: email,
						mobileNo: mobileNo,
						password: password1
					})
				})
				.then(res => res.json())
				.then(data => {
					console.log(data)

					if(data === true){


					Swal.fire({
						title: "Registration succesfully",
						icon: "success",
						text: "Welcome to Zuitt!"
					})

					setFirstName("")
					setLastName("")
					setEmail("")
					setMobileNo("")
					setPassword1("")
					setPassword2("")

					navigate('/login')

					} else{
						Swal.fire({
						title: "Something went wrong",
						icon: "error",
						text: "Please try again!"
					})
					}
				})


			}
		})
}






useEffect(() => {
		if((firstName !== "" && lastName !== "" && mobileNo.length == 11 && email !== "" && password1 !== "" && password2 !== "") && (password1 === password2)){
			

			setIsActive(true)
		}else{
			setIsActive(false)
		}

	}, [firstName, lastName, mobileNo, email, password1, password2])






	return (
		
		

	<div className="signup-container">
				
				
	<Form className="sign-form" onSubmit={(e)=> registerUser(e)}>
		<div className="title">Sign Up</div>
	 		<div className="user-details">

			<Form.Group className="firstName mb-3" controlId="firstName">
		        <Form.Label>First Name </Form.Label>
		        
		        <Form.Control 
			        type="text" 
			        placeholder=" Enter First Name"
			        value={firstName}
			        onChange={e => {
			        	setFirstName(e.target.value)
			        }}
			        
			        required/>
		      	</Form.Group>
		      	



		      	<Form.Group className="lastName mb-3" controlId="lastName">
			<Form.Label>Last Name </Form.Label>
		        
		        <Form.Control 
			        type="text" 
			        placeholder=" Enter Last Name"
			        value={lastName}
			         onChange={e => {
			        	setLastName(e.target.value)
			        }}
			        required/>
		      			</Form.Group>


		      		<Form.Group className="email-form mb-3" controlId="email">
		        <Form.Label>Email Address</Form.Label>
		        
		        <Form.Control 
			        type="email" 
			        placeholder=" Enter Email"
			        value={email}
			         onChange={e => {
			        	setEmail(e.target.value)
			        }}
			        required/>
		      	</Form.Group>


		      		<Form.Group className="mobileNo mb-3" controlId="mobileNo">
		        <Form.Label>Mobile Number </Form.Label>
		        
		        <Form.Control 
			        type="text" 
			        placeholder=" Enter Mobile No."
			        value={mobileNo}
			         onChange={e => {
			        	setMobileNo(e.target.value)
			        }}
			        required/>
		      			</Form.Group>


		      			<Form.Group className="password1 mb-3" controlId="password1">
		        <Form.Label>Password </Form.Label>
		        
		        <Form.Control 
			        type="password" 
			        placeholder=" Enter password"
			        value={password1}
			         onChange={e => {
			        	setPassword1(e.target.value)
			        }}
			        required/>
		      			</Form.Group>

		      		<Form.Group className="password2 mb-3" controlId="password2">
		        <Form.Label>Verify Password </Form.Label>
		        
		        <Form.Control 
			        type="password" 
			        placeholder=" Verify Password"
			        value={password2}
			         onChange={e => {
			        	setPassword2(e.target.value)
			        }}
			        required/>
		      			</Form.Group>
		      			{
		      			
		      				<Button variant="primary" type="submit" className="sign-btn">
		        		Submit
		      			</Button>
		      			
		      			}
		      			</div>

				</Form>

				<div className="signup-image">
				<img src="/images/shoes.jpg"/>
		      </div>
			</div>
		)
}