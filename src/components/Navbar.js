import '../styles/navbar.css'
import {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import {Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import UserContext from '../userContext'





export default function Navbar(){


	const { user } = useContext(UserContext)

	return(
		<div className="nav-container">
			<div className="nav-row">
				<div className="nav-col">
					<div className="logo">
						<Link to="/"><img src="/images/logo.png" alt=""/></Link>
					</div>
				
				
				</div>

				<div className="nav-row">
					<nav className="items">	
						<ul className="items">
							<Link  to="/men"><li>MEN</li></Link>
							<Link  to="/women"><li>WOMEN</li></Link>
							<Link  to="/brands"><li>CONTACT</li></Link>
							<Link  to="/sports"><li>ABOUT US</li></Link>
							<Link  to="/all-product"><li>PRODUCT</li></Link>
						</ul>
					</nav>
				</div>

				<div className="nav-col">
					<div className="nav-icons">
					{
				
						(user.id !== null)?
						<Link  to="/logout"><span><FontAwesomeIcon icon={faArrowRightToBracket} /> LOGOUT</span></Link>
						:

					
					<Link  to="/login"><span><FontAwesomeIcon icon={faArrowRightToBracket} /> LOGIN</span></Link>
					}

						<Link  to="/wish-list"><span><FontAwesomeIcon icon={faHeart} /><span className="nav-cart">0</span></span></Link>
						<Link to="/my-cart"><span><FontAwesomeIcon icon={faCartShopping}/><span className="wish-list">0</span></span></Link>
					</div>

				</div>

			</div>
			
		</div>


		)

}