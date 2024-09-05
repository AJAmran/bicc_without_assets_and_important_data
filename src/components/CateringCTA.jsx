import { FiArrowRightCircle } from "react-icons/fi";

const CateringCTA = () => {
  return (
    <section
      className="bg-cover bg-center relative py-20"
      style={{
        backgroundImage: `url("https://zam-zam-mirpur-11.x-grouprestaurant.com/uploads/273c42a8c4d1dede0cfa83098d3fc372.jpg")`,
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Elevate Your Events?
          </h2>
          <p className="text-lg mb-8">
            Explore more about our catering services and book your next event
            with us.
          </p>
          <a
            href="https://catering.x-grouprestaurant.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors bg-gray-800 hover:bg-gray-700 focus:outline-none font-bold py-3 px-8 rounded-full items-center justify-center duration-300 inline-flex cursor-pointer"
          >
            Visit Our Website <FiArrowRightCircle className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CateringCTA;
