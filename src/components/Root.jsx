import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

const Root = () => (
	<Routes>
		<Route element={<Home />} path="/" />

		<Route element={<Portfolio />} path="/portfolio" />

		<Route element={<Team />} path="/team" />

		<Route element={<Contact />} path="/contact" />

		<Route element={<AboutUs />} path="/about-us" />

		<Route element={<NotFound />} path="*" />
	</Routes>
);

export default Root;
