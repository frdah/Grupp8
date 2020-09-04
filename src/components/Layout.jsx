import React from "react"
import { Link } from "react-router-dom"

export default function Layout({ children }) {
	return (
		<div>
			<nav className="row navbar">
				<div className="col-xl-10 col-md-8">
					<h1>8:ans Webbshop</h1>
				</div>
				<div className="col-xl-2 col-md-4">
					<ul className="m-0 p-0">
						<Link className="navbar-toggler text-info" to="/">
							Home
						</Link>
						<Link className="navbar-toggler text-info" to="/cartpage">
							Cart (0)
						</Link>
					</ul>
				</div>
			</nav>
			{children}
		</div>
	)
}
