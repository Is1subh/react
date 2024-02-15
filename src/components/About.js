import React, { useState } from "react";
import Navbar from './Navbar'


export default function About(props) {

	const [mystyle, setMyStyle] = useState({
		backgroundColor: 'white',
		color: 'black',

	})
	const [btntext, setBtnText] = useState("Dark mode")

	let toggleStyle = () => {
		if (mystyle.color === 'black') {
			setMyStyle(
				{
					backgroundColor: 'black',
					color: 'white',
					border: '1px solid white'
				}
			)
			setBtnText("Light mode")
		}
		else {
			setMyStyle(
				{
					backgroundColor: 'white',
					color: 'black',
					border: '1px solid white'
				}
			)
			setBtnText("Dark mode")
		}
	}

	const [mode, setMode] = useState("light");

	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "rgb(48 69 90)";
			document.body.style.color = "white";
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			document.body.style.color = "black";
		}
	};

	return (
		<>
			<Navbar mode={mode} toggleMode={toggleMode} />
			<div className="container mt-3" style={mystyle}>
				<h1>About Us</h1>
				<div className="accordion" id="accordionExample" style={mystyle}>
					<div className="card" style={mystyle}>
						<div className="card-header" id="headingOne">
							<h5 className="mb-0">
								<button
									className="btn btn-link"
									type="button"
									data-toggle="collapse"
									data-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
									style={mystyle}
								>
									Collapsible Group Item #1
								</button>
							</h5>
						</div>

						<div
							id="collapseOne"
							className="collapse show"
							aria-labelledby="headingOne"
							data-parent="#accordionExample"
						>
							<div className="card-body">
								Anim pariatur cliche reprehenderit, enim eiusmod high life
								accusamus terry richardson ad squid. 3 wolf moon officia aute, non
								cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
								laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
								on it squid single-origin coffee nulla assumenda shoreditch et.
								Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
								nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
								lomo. Leggings occaecat craft beer farm-to-table, raw denim
								aesthetic synth nesciunt you probably haven't heard of them
								accusamus labore sustainable VHS.
							</div>
						</div>
					</div>
					<div className="card" style={mystyle}>
						<div className="card-header" id="headingTwo">
							<h5 className="mb-0">
								<button
									className="btn btn-link collapsed"
									type="button"
									data-toggle="collapse"
									data-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
									style={mystyle}
								>
									Collapsible Group Item #2
								</button>
							</h5>
						</div>
						<div
							id="collapseTwo"
							className="collapse"
							aria-labelledby="headingTwo"
							data-parent="#accordionExample"
						>
							<div className="card-body">
								Anim pariatur cliche reprehenderit, enim eiusmod high life
								accusamus terry richardson ad squid. 3 wolf moon officia aute, non
								cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
								laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
								on it squid single-origin coffee nulla assumenda shoreditch et.
								Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
								nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
								lomo. Leggings occaecat craft beer farm-to-table, raw denim
								aesthetic synth nesciunt you probably haven't heard of them
								accusamus labore sustainable VHS.
							</div>
						</div>
					</div>
					<div className="card" style={mystyle}>
						<div className="card-header" id="headingThree">
							<h5 className="mb-0">
								<button
									className="btn btn-link collapsed"
									type="button"
									data-toggle="collapse"
									data-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree"
									style={mystyle}
								>
									Collapsible Group Item #3
								</button>
							</h5>
						</div>
						<div
							id="collapseThree"
							className="collapse"
							aria-labelledby="headingThree"
							data-parent="#accordionExample"
						>
							<div className="card-body">
								Anim pariatur cliche reprehenderit, enim eiusmod high life
								accusamus terry richardson ad squid. 3 wolf moon officia aute, non
								cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
								laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
								on it squid single-origin coffee nulla assumenda shoreditch et.
								Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
								nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
								lomo. Leggings occaecat craft beer farm-to-table, raw denim
								aesthetic synth nesciunt you probably haven't heard of them
								accusamus labore sustainable VHS.
							</div>
						</div>
					</div>
				</div>
				<button type="button" onClick={toggleStyle} className="btn btn-primary m-3">{btntext}</button>

			</div>
		</>
	);
}
