import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the popup after a delay (e.g., 1 second)
    const showPopupTimer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    // Automatically close the popup after 5 seconds
    const closePopupTimer = setTimeout(() => {
      setIsOpen(false);
    }, 6000); // 1 second delay + 5 seconds visible time

    return () => {
      clearTimeout(showPopupTimer);
      clearTimeout(closePopupTimer);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 m-4">
      <div
        className="relative bg-cover bg-center rounded-2xl shadow-2xl max-w-md w-full p-8 text-white flex flex-col justify-center items-center transition-transform transform scale-100 hover:scale-105 duration-300 ease-in-out z-50"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/realistic-white-podium-background_23-2149171474.jpg?w=740&t=st=1724587044~exp=1724587644~hmac=15366498821750c28d59ebe2acf8a78801cb2dc03badf0d037b48739f55517ef')",
          height: "350px",
        }}
      >
        <button
          className="absolute top-4 right-4 text-white bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 z-50"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
        <div className="text-center z-50">
          <h2 className="text-4xl font-bold font-heading mb-4 drop-shadow-lg">
            Exclusive Discount!
          </h2>
          <p className="text-lg font-semibold drop-shadow-md">
            <span className="text-yellow-400 text-5xl font-extrabold">
              20% OFF
            </span>{" "}<br/>
            <span className="block text-xl font-medium mt-2">
            Limited time offer—don't miss out!
            </span>{" "}<br/>
          </p>
          <Link
            to="/booking"
            onClick={() => setIsOpen(false)}
            className="bg-yellow-500 hover:bg-yellow-600 border border-gray-400 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-colors duration-300 z-50"
          >
            Book Now
          </Link>
        </div>
      </div>
      <div
        className="fixed inset-0 bg-black opacity-60 z-40"
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
};

export default DiscountPopup;
