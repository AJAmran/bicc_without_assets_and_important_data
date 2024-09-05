import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";

const Address = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-4 md:flex-row md:p-8">
      {/* Address Card */}
      <div className="w-full p-4 mb-4 bg-slate-300 border rounded-lg shadow-lg md:w-1/3 md:mb-0">
        <h4 className="mb-2 text-xl font-bold text-primary md:text-3xl">
          Address:
        </h4>
        <p className="text-sm text-text md:text-base">
          <FaLocationArrow className="inline mr-2" /> Agargaon, Sher-E-Bangla
          Nagar <br />
          Dhaka-1207, Bangladesh
        </p>
      </div>

      {/* Booking Inquiries Card */}
      <div className="w-full p-4 mb-4 bg-slate-300 border rounded-lg shadow-lg md:w-1/3 md:mb-0">
        <h4 className="mb-2 text-xl font-bold text-primary md:text-3xl">
          Booking Inquiries:
        </h4>
        <p className="text-sm text-text md:text-base">
          <FaPhone className="inline mr-2" /> +8801755636335, 01755636336
        </p>
        <p className="text-sm text-text md:text-base">
          <FaEnvelope className="inline mr-2" /> info@bicc-bd.com
        </p>
      </div>

      {/* Catering Inquiries Card */}
      <div className="w-full p-4 bg-slate-300 border rounded-lg shadow-lg md:w-1/3">
        <h4 className="mb-2 text-xl font-bold text-primary md:text-3xl">
          Catering Inquiries:
        </h4>
        <p className="text-sm text-text md:text-base">
          <FaPhone className="inline mr-2" /> +8801755636337
        </p>
        <p className="text-sm text-text md:text-base">
          <FaEnvelope className="inline mr-2" /> catering.sales@bicc-bd.com
        </p>
      </div>
    </div>
  );
};

export default Address;
