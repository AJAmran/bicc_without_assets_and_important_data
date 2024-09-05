import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { IoIosCalendar, IoIosSend } from "react-icons/io";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://bicc-bd.com/send_booking.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.status === "success") {
        toast.success(result.message);
        reset();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center mb-4">BICC Booking Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex bg-slate-300 flex-col items-center p-6 mx-auto rounded-lg shadow-lg max-w-[650px]"
        noValidate
      >
        <div className="w-full mb-4">
          <label htmlFor="fullName" className="block text-sm md:text-base font-medium text-text">
            Full Name*
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Full Name"
            {...register("fullName", { required: "Full Name is required" })}
            className="w-full p-2 mt-1 text-gray-600 border rounded-md"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        <div className="w-full mb-4">
          <label htmlFor="email" className="block text-sm md:text-base font-medium text-text">
            Email*
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address",
              },
            })}
            className="w-full p-2 mt-1 text-gray-600 border rounded-md"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="w-full mb-4">
          <label htmlFor="phoneNumber" className="block text-sm md:text-base font-medium text-text">
            Phone Number*
          </label>
          <input
            id="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            {...register("phoneNumber", {
              required: "Phone Number is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Please enter a valid phone number",
              },
            })}
            className="w-full p-2 mt-1 text-gray-600 border rounded-md"
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div className="w-full mb-4">
          <label htmlFor="eventType" className="block text-sm md:text-base font-medium text-text">
            Type of Event*
          </label>
          <input
            id="eventType"
            type="text"
            placeholder="Type of Event"
            {...register("eventType", { required: "Type of Event is required" })}
            className="w-full p-2 mt-1 text-gray-600 border rounded-md"
          />
          {errors.eventType && (
            <p className="mt-1 text-sm text-red-600">{errors.eventType.message}</p>
          )}
        </div>

        <div className="w-full mb-4">
          <label htmlFor="date" className="block text-sm md:text-base font-medium text-text">
            Desired Date*
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              id="date"
              type="date"
              {...register("date", { required: "Date is required" })}
              className="w-full p-2 pl-8 text-gray-600 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <IoIosCalendar className="text-gray-400" />
            </div>
          </div>
          {errors.date && (
            <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
          )}
        </div>

        <div className="w-full mb-4">
          <label htmlFor="numberOfDays" className="block text-sm md:text-base font-medium text-text">
            Number of Days*
          </label>
          <input
            id="numberOfDays"
            type="number"
            placeholder="Number of Days"
            {...register("numberOfDays", {
              required: "Number of Days is required",
              min: {
                value: 1,
                message: "Minimum of 1 day is required",
              },
            })}
            className="w-full p-2 mt-1 text-gray-600 border rounded-md"
          />
          {errors.numberOfDays && (
            <p className="mt-1 text-sm text-red-600">{errors.numberOfDays.message}</p>
          )}
        </div>

        <div className="w-full mb-4">
          <label htmlFor="attendance" className="block text-sm md:text-base font-medium text-text">
            Expected Attendance*
          </label>
          <input
            id="attendance"
            type="number"
            placeholder="Expected Attendance"
            {...register("attendance", {
              required: "Expected Attendance is required",
              min: {
                value: 1,
                message: "Attendance must be at least 1",
              },
            })}
            className="w-full p-2 mt-1 text-gray-600 border rounded-md"
          />
          {errors.attendance && (
            <p className="mt-1 text-sm text-red-600">{errors.attendance.message}</p>
          )}
        </div>

        <div className="w-full mb-4">
          <label htmlFor="selectedHall" className="block text-sm md:text-base font-medium text-text">
            Expected Hall*
          </label>
          <select
            id="selectedHall"
            {...register("selectedHall", { required: "Selecting a Hall is required" })}
            className="w-full p-2 mt-1 text-gray-600 border rounded-md"
          >
            <option value="">Select a Hall</option>
            <option value="Milky Way">Milky Way</option>
            <option value="Hall Of Fame">Hall Of Fame</option>
            <option value="Carnival">Carnival</option>
            <option value="Harmony">Harmony</option>
            <option value="Celebrity">Celebrity</option>
            <option value="Media Bazaar">Media Bazaar</option>
            <option value="Windy Town">Windy Town</option>
            <option value="Green View">Green View</option>
            <option value="Executive Lounge">Executive Lounge</option>
            <option value="Legendary">Legendary</option>
            <option value="Eternity">Eternity</option>
            <option value="Elegant">Elegant</option>
            <option value="Milestone">Milestone</option>
          </select>
          {errors.selectedHall && (
            <p className="mt-1 text-sm text-red-600">{errors.selectedHall.message}</p>
          )}
        </div>

        <div className="w-full mt-4">
          <button
            type="submit"
            className={`w-full p-2 text-white bg-primary rounded-md hover:bg-accent focus:outline-none ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            <IoIosSend className="inline mr-2" />
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      <Toaster position="top-right" />
    </div>
  );
};

export default BookingForm;
