import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Account,
  Blog,
  BlogDetails,
  Bookings,
  Destination,
  Error,
  Home,
  Hotel,
  HotelList,
  HotelType,
  Login,
  Register,
} from "./Pages";
import AddHotel from "./Pages/private/admin/AddHotel";
import PrivateRoute from "./privateRoutes/PrivateRoute";
import Layout from "./Pages/private/admin/layout/Layout";

function App() {
  return (
    <Router>
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
        {/* Admin page */}
        <Route path="/" element={<Layout />}>
          <Route
            path="/add"
            element={<PrivateRoute element={<AddHotel />} roles={["admin"]} />}
          />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
