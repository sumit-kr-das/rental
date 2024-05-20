import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoute from "./privateRoutes/PrivateRoute";
import Loader from "./components/Loader/Loader";
import { Suspense, lazy } from "react";

// --------------------------- pages ---------------------------
const Home = lazy(() => import("./Pages/Home"));
const Hotel = lazy(() => import("./Pages/Hotel"));
const HotelList = lazy(() => import("./Pages/HotelList"));
const Destination = lazy(() => import("./Pages/Destination"));
const HotelType = lazy(() => import("./Pages/HotelType"));
const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));
const Blog = lazy(() => import("./Pages/Blog"));
const BlogDetails = lazy(() => import("./Pages/BlogDetails"));
const Account = lazy(() => import("./Pages/private/user/Account"));
const Bookings = lazy(() => import("./Pages/private/user/Bookings"));
const ListHotel = lazy(() => import("./Pages/private/hotel/ListHotel"));
const AddHotel = lazy(() => import("./Pages/private/hotel/AddHotel"));
const AddRoom = lazy(() => import("./Pages/private/hotel/AddRoom"));
const ListRooms = lazy(() => import("./Pages/private/hotel/ListRooms"));
const Error = lazy(() => import("./Pages/Error"));
const Layout = lazy(() => import("./Pages/private/hotel/layout/Layout"));
const UserLayout = lazy(() => import("./Pages/private/user/layout/UserLayout"));

function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/hotels"
          element={
            <Suspense fallback={<Loader />}>
              <Hotel />
            </Suspense>
          }
        />
        <Route
          path="/hotel/:id"
          element={
            <Suspense fallback={<Loader />}>
              <HotelList />
            </Suspense>
          }
        />
        <Route
          path="/find/:destination"
          element={
            <Suspense fallback={<Loader />}>
              <Destination />
            </Suspense>
          }
        />
        <Route
          path="/type/:type/:count"
          element={
            <Suspense fallback={<Loader />}>
              <HotelType />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<Loader />}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<Loader />}>
              <Blog />
            </Suspense>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <Suspense fallback={<Loader />}>
              <BlogDetails />
            </Suspense>
          }
        />

        {/* User page */}
        <Route
          path="/user"
          element={
            <PrivateRoute
              element={
                <Suspense fallback={<Loader />}>
                  <UserLayout />
                </Suspense>
              }
              roles={["user"]}
            />
          }
        >
          <Route
            path="/user/my-account"
            element={
              <Suspense fallback={<Loader />}>
                <Account />
              </Suspense>
            }
          />
          <Route
            path="/user/my-bookings"
            element={
              <Suspense fallback={<Loader />}>
                <Bookings />
              </Suspense>
            }
          />
        </Route>
        {/* Admin page */}
        <Route
          path="/dashboard/hotel"
          element={
            <PrivateRoute
              element={
                <Suspense fallback={<Loader />}>
                  <Layout />
                </Suspense>
              }
              roles={["hotel"]}
            />
          }
        >
          <Route
            path="/dashboard/hotel"
            element={
              <Suspense fallback={<Loader />}>
                <ListHotel />
              </Suspense>
            }
          />
          <Route
            path="/dashboard/hotel/add-hotel"
            element={
              <Suspense fallback={<Loader />}>
                <AddHotel />
              </Suspense>
            }
          />
          <Route
            path="/dashboard/hotel/add-room"
            element={
              <Suspense fallback={<Loader />}>
                <AddRoom />
              </Suspense>
            }
          />
          <Route
            path="/dashboard/hotel/list-room"
            element={
              <Suspense fallback={<Loader />}>
                <ListRooms />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/*"
          element={
            <Suspense fallback={<Loader />}>
              <Error />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
