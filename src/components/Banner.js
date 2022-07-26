import { Link } from 'react-router-dom'
import { useRef, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap'
import '../styles/banner.css'

export default function Banner(){
	
	let bannerText = useRef(null)
	let paragraphText = useRef(null)
	let btn = useRef(null)
	let boxOne = useRef(null)
	let boxTwo = useRef(null)
	let boxThree = useRef(null)


	useEffect(() => {
		console.log(bannerText)
		TweenMax.to(bannerText,3,{
				opacity: 1,
				y: -40,
				ease:Power3.easeOut
			})
		TweenMax.to(paragraphText,4,{
				opacity: 1,
				y: -20,
				ease:Power3.easeOut,
				delay: .2
			})
		TweenMax.to(btn,6,{
				opacity: 1,
				y: -20,
				ease:Power3.easeOut,
				delay: .2
			})
		TweenMax.to(boxOne,.8,{
				opacity: 1,
				x: 2,
				y: 20,
				ease:Power3.easeOut,
				delay: 1.92
				
			})
		TweenMax.to(boxTwo,1,{
				opacity: 1,
				x: -2,
				y: -30,
				ease:Power3.easeOut,
				delay: 2.5
			})
		TweenMax.to(boxThree,1,{
				opacity: 1,
				x: -5,
				y: 30,
				ease:Power3.easeOut,
				delay: 3.3
			})

	}, [])

	


		return(
		
		<div className="b-container">
					<div className="c-container">
						<h1 className="content-inner-bold" ref={el => {bannerText = el}}>
						<div>Hard work beats talent</div>
						<br/>
						<div>When talent doesn't work hard.</div>
					</h1>
					<p className="banner-paragraph" ref={el => {paragraphText = el}} >
						Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.
					</p>
					<Link to="/signup"><button className="banner-btn"ref={el => {btn = el}}>
					Sign Up
					</button></Link>
				</div>
		

			<div>
				<div className="image-card">
					<div className="image-card-inner">
						<div className="box1" ref={el => {boxOne = el}}></div>
                		<div className="box2" ref={el => {boxTwo = el}}></div>
                		<div className="box3" ref={el => {boxThree = el}}></div>
                	</div>
				</div>
			</div>
	</div>

			)



}