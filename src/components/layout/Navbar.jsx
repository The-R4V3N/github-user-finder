import React from "react"
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

function Navbar({ title }) {
	return (
		<nav className='navbar mb-12 shadow-lg neutral text-neutral-content'>
			<div className='container mx-auto'>
				<div className='flex-none px-2 mx-2'>
					<FaGithub className='inline pr-2 text-5xl' />
					<Link to='/' className='text-xl font-bold align-middle'>
						{title}
					</Link>
				</div>

				<div className='flex-1 px-2 mx-2'>
					<div className='flex justify-end'>
						<Link
							to='/'
							className='btn btn-ghost btn-sm rounded-btn normal-case text-xl'
						>
							Home
						</Link>
						<Link
							to='/about'
							className='btn btn-ghost btn-sm rounded-btn normal-case text-xl'
						>
							About
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

Navbar.defaultProps = {
	title: "GitHub User Finder",
}

Navbar.propTypes = {
	title: PropTypes.string,
}

export default Navbar
