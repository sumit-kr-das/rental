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
  Blog,
  BlogDetails,
  Account,
  Bookings,
} from "./Pages";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Navigation />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/hotel/:id" element={<HotelList />} />
        <Route path="/find/:destination" element={<Destination />} />
        <Route path="/type/:type/:count" element={<HotelType />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/account" element={<Account />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
