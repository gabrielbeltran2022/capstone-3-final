import '../styles/notfound.css'
import { Link } from "react-router-dom"


function NotFound(){
	

	return (
		
		<div className="not-found">
			<h1 className="heading">404</h1>
			<p className="text">That page cannot found </p>
			<Link className="link"to='/'>Back to homepage..</Link>
			<div>
			<img src="/images/cardo.jpg" alt=""/>
			</div>
		</div>


		


		)
} 


export default NotFound