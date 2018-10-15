import React, {Component} from 'react';
import BGlogo from '../assets/img/logo.png';


export default class NotFoundComponent extends Component{
	constructor(props){
		super(props);
		document.title = "404 - Sorry, the page you're looking for isn’t here anymore";
	}
	render(){
		return(
			<React.Fragment>
				<div className="not-found-fullscreen">
					<div className="container-component">
						<div className="not-found-content">
							<p>
								<a href="/" >
									<img src={BGlogo} alt="" />
								</a>
							</p>
							<h2>
								<b>404 </b>
								 Sorry, the page you're looking for isn’t here anymore
							</h2>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}