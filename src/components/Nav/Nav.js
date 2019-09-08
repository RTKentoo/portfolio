import React, { Component } from 'react'
import tachyons from 'tachyons'

class Nav extends Component {
	constructor() {
		super()
		this.state = {}
	}



	render() {
		return(
			<div>
				<ul className='list pl0 flex flex-row-reverse'>
					<li className='w-10 pa3 mr2'>About</li>
					<li className='w-10 pa3 mr2'>Projects</li>
					<li className='w-10 pa3 mr2'>Contact</li>
				</ul>
			</div>
		)
	}
}

export default Nav