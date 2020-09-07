import React from "react"
import { Link } from "react-router-dom"

export default function Layout({ children }) {
	function getQty() {
		const itemArr = JSON.parse(localStorage.getItem("itemArr"))
		let cart = 0
		if (JSON.parse(localStorage.getItem("itemArr")) === null) {
			return cart
		}
		for (let x = 0; x < itemArr.length; x++) {
			cart += itemArr[x].qty
		}
		return cart
	}

	return (
		<div>
			<nav className="navbar navbar-light bg-light">
				<div>
					<h1>Webshop no 8</h1>
				</div>
				<div>
					<ul className="m-0 p-0">
						<Link className="navbar-toggler border-0 m-1" to="/">
							Shop
						</Link>
						<Link className="navbar-toggler border-0 m-1" to="/cartpage">
							Cart ({getQty()})
						</Link>
					</ul>
				</div>
			</nav>
			{children}
		</div>
	)
}
