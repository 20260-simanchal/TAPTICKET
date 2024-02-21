import { createBrowserRouter } from "react-router-dom";
import NotFound from "./components/notFound";
import IntroPage from "./pages/intro";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Contact from "./pages/contact";
import Services from "./pages/services";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Price from "./pages/price";
import Review from "./pages/review";
import Signup from "./pages/signup";
import ThankYou from "./pages/thankyou";
import Users from "./pages/users";
import TicketSale from "./pages/ticketsale";
import TicketBook from "./pages/ticketbook";
import QrGenerate from "./pages/qrgenerate";
import ThankYou2 from "./pages/thankyou2";
import ThankYou3 from "./pages/thankyou3";
import ThankYou4 from "./pages/thankyou4";
import ThankYou5 from "./pages/thankyou5";




const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/user/login",
    element: <Login />,
  },
  //   Add your routes here

  {
    path: "/ticketbook",
    element: <TicketBook />,
  },

  {
    path: "/ticketsale",
    element: <TicketSale />,
  },

  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/price",
    element: <Price />,
  },
  {
    path: "/review",
    element: <Review />,
  },
 
  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "user/signup/thankyou",
    element: <ThankYou />,
  },

  {
    path: "user/ticketbook/thankyou2",
    element: <ThankYou2 />,
  },

  {
    path: "user/ticketsale/thankyou3",
    element: <ThankYou3 />,
  },

  {
    path: "user/review/thankyou4",
    element: <ThankYou4 />,
  },

  {
    path: "user/contact/thankyou5",
    element: <ThankYou5 />,
  },

  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/qrgenerate",
    element: <QrGenerate />,
  }
]);

export default router;
