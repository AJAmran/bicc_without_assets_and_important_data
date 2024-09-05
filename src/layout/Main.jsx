import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TinyLoader from "../components/TinyLoader";
import DiscountPopup from "../components/Popup";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<TinyLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <DiscountPopup />
    </div>
  );
};

export default Main;
