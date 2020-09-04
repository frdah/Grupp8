import React from "react"
import { Link } from "react-router-dom"

export default function Layout({ children }) {
	return (
		<div>
			<nav className="navbar mb-10 navbar-light bg-light">
				<div>
					<h1>Webshop no 8</h1>
				</div>
				<div>
					<ul className="m-0 p-0">
						<Link className="navbar-toggler border-0 m-1" to="/">
							Home
						</Link>
						<Link className="navbar-toggler border-0 m-1" to="/cartpage">
							Cart (0)
						</Link>
					</ul>
				</div>
			</nav>
			{children}
		</div>
	)
}
