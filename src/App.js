import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { Home, Hotel, HotelList, Login, Register, Error } from "./Pages";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/hotels" element={<Hotel />} />
				<Route path="/hotel/:id" element={<HotelList />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
