import { FaGithub, FaInstagram } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import styles from "./Contact.module.css";

const Contact = () => {
	return (
		<div>
			<h2>Contact</h2>
			<ul className={styles.icons}>
				<li>
					<a
						href="https://github.com/Wyden-s-Hospice"
						target="_blank"
						onMouseOver={(event) =>
							(event.target.style.color = "#FEE825")
						}
						onMouseOut={(event) => (event.target.style.color = "")}
					>
						<FaGithub color="green" className={styles.icon} />
					</a>
				</li>
				<li>
					<a
						href="https://github.com/Wyden-s-Hospice"
						target="_blank"
						onMouseOver={(event) =>
							(event.target.style.color = "#FEE825")
						}
						onMouseOut={(event) => (event.target.style.color = "")}
					>
						<FaInstagram color="green" className={styles.icon} />
					</a>
				</li>
				<li>
					<a
						href="mailto:magnumbenevides@gmail.com"
						target="_blank"
						onMouseOver={(event) =>
							(event.target.style.color = "#FEE825")
						}
						onMouseOut={(event) => (event.target.style.color = "")}
					>
						<AiFillMail color="green" className={styles.icon} />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Contact;
