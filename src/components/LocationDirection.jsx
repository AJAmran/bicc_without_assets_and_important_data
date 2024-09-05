import { memo } from "react";
import { FaDirections } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsPhone } from "react-icons/bs";

const LocationDirection = () => {
  return (
    <section className="shadow-md rounded">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl font-bold font-heading">
            Visit Us
                      </h2>
          <p className="mb-4 text-base sm:text-lg font-body font-semibold">
            Bangabandhu International Conference Center (BICC) is located at
            Agargaon, Dhaka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a
              href="https://maps.app.goo.gl/3F5tx2Ld7YYSWM8a6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions to Bangabandhu International Conference Center"
              className="flex items-center justify-center px-4 py-2 text-sm sm:text-lg font-medium text-white transition-colors bg-primary border-2 border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent hover:bg-secondary"
            >
              <FaDirections className="mr-2" />
              Get Directions
            </a>
            <a
              href="mailto:info@biccbd.com"
              aria-label="Email Bangabandhu International Conference Center"
              className="flex items-center justify-center px-4 py-2 text-sm sm:text-lg font-medium text-white transition-colors bg-primary border-2 border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent hover:bg-secondary"
            >
              <MdEmail className="mr-2" />
              Email Us
            </a>
            <a
              href="tel:+8801774102222"
              aria-label="Call Bangabandhu International Conference Center"
              className="flex items-center justify-center px-4 py-2 text-sm sm:text-lg font-medium text-white transition-colors bg-primary border-2 border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent hover:bg-secondary"
            >
              <BsPhone className="mr-2" />
              Call Us
            </a>
          </div>
          <div className="w-full h-64 sm:h-80 overflow-hidden border border-mutedText rounded-md shadow-md">
            <iframe
              title="Google Map of Bangabandhu International Conference Center"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.387440675001!2d90.37900287537242!3d23.76921388805382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c75125f8e4f7%3A0xf7b9edc3b8747c3a!2sBangabandhu%20International%20Conference%20Center!5e0!3m2!1sen!2sbd!4v1704726034177!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const MemoizedLocationDirection = memo(LocationDirection);

export default MemoizedLocationDirection;
