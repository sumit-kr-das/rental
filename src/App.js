import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { Home, Hotel, HotelList } from "./Pages";

function App() {
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/hotel" element={<Hotel />} />
				<Route path="/hotel/:id" element={<HotelList />} />
			</Routes>
		</Router>
	);
}

export default App;
