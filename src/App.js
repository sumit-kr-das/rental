import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import {
	Home,
	Hotel,
	Destination,
	HotelList,
	HotelType,
	Login,
	Register,
	Error,
} from "./Pages";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<Router>
			<Navigation />
			<Toaster position="top-center" reverseOrder={false} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/hotels" element={<Hotel />} />
				<Route path="/hotel/:id" element={<HotelList />} />
				<Route path="/find/:destination" element={<Destination />} />
				<Route path="/type/:type/:count" element={<HotelType />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
