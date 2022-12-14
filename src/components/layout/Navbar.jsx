import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function MouseOver(event) {
	event.target.style.color = "#fff";
}
function MouseOut(event) {
	event.target.style.color = "";
}

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<h1 className={styles.nav_title}>BDE</h1>

			<ul className={styles.nav_list}>
				<li onMouseOver={MouseOver} onMouseOut={MouseOut}>
					<NavLink
						className={styles.nav_item}
						to="/"
						style={({ isActive }) => ({
							borderBottom: isActive ? "3px solid #005" : "none",
						})}
					>
						Home
					</NavLink>
				</li>
				<li onMouseOver={MouseOver} onMouseOut={MouseOut}>
					<NavLink
						className={styles.nav_item}
						to="/portfolio"
						style={({ isActive }) => ({
							borderBottom: isActive ? "3px solid #005" : "none",
						})}
					>
						Portfolio
					</NavLink>
				</li>
				<li onMouseOver={MouseOver} onMouseOut={MouseOut}>
					<NavLink
						className={styles.nav_item}
						to="/team"
						style={({ isActive }) => ({
							borderBottom: isActive ? "3px solid #005" : "none",
						})}
					>
						Team
					</NavLink>
				</li>
				<li onMouseOver={MouseOver} onMouseOut={MouseOut}>
					<NavLink
						className={styles.nav_item}
						to="/contact"
						style={({ isActive }) => ({
							borderBottom: isActive ? "3px solid #005" : "none",
						})}
					>
						Contact
					</NavLink>
				</li>
				<li onMouseOver={MouseOver} onMouseOut={MouseOut}>
					<NavLink
						className={styles.nav_item}
						to="/about-us"
						style={({ isActive }) => ({
							borderBottom: isActive ? "3px solid #005" : "none",
						})}
					>
						About Us
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
