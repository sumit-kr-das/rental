import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Account,
  AddHotel,
  AddRoom,
  Blog,
  BlogDetails,
  Bookings,
  Destination,
  Error,
  Home,
  Hotel,
  HotelList,
  HotelType,
  Layout,
  ListHotel,
  Login,
  Register,
} from "./Pages";
import PrivateRoute from "./privateRoutes/PrivateRoute";

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
        <Route
          path="/dashboard/hotel"
          element={<PrivateRoute element={<Layout />} roles={["hotel"]} />}
        >
          <Route path="/dashboard/hotel" element={<ListHotel />} />
          <Route path="/dashboard/hotel/add-hotel" element={<AddHotel />} />
          <Route path="/dashboard/hotel/add-room" element={<AddRoom />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
