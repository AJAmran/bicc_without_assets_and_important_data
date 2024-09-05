import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Main from "../layout/Main";
import ErrorPage from "../pages/errorPage/ErrorPage";

const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));
const Venue = lazy(() => import("../pages/venue/Venue"));
const Booking = lazy(() => import("../pages/booking/Booking"));
const CateringPage = lazy(() => import("../pages/catering/Catering"));
const Restaurant = lazy(() => import("../pages/restaurant/Restaurant"));
const EventSupport = lazy(() => import("../pages/event/Event"));
const ContactPages = lazy(() => import("../pages/contact/Contact"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "venue/:id", element: <Venue /> },
      { path: "/about", element: <About /> },
      { path: "/booking", element: <Booking /> },
      { path: "/catering", element: <CateringPage /> },
      { path: "/restaurant", element: <Restaurant /> },
      { path: "/event", element: <EventSupport /> },
      { path: "/contact", element: <ContactPages /> },
    ],
  },
]);
