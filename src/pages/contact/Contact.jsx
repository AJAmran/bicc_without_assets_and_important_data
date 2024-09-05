import { useCallback } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaPaperPlane, FaPhone } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { GiRotaryPhone } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";
import HeroSection from "../../components/HeroSection";
import MemoizedLocationDirection from "../../components/LocationDirection";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const data = {
  image: "https://res.cloudinary.com/dhukcjdmi/image/upload/v1724744412/14590168_1_zwcadl.jpg",
  title: "Get in Touch",
  subTitle: "Bangabandhu International Conference Center (BICC)",
  des: "Your Gateway to Memorable Events and Seamless Communication",
};

const ContactPages = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = useCallback(
    async (formData) => {
      console.log("Form submitted:", formData);

      try {
        const response = await fetch("https://bicc-bd.com/sendMessage.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        });

        const result = await response.json();
        if (response.ok) {
          toast.success(result.message);
          reset();
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("Error submitting form. Please try again.");
        console.error("Error submitting form:", error);
      }
    },
    [reset]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background text-text"
    >
      <Helmet>
        <title>Contact Us - Bangabandhu International Conference Center</title>
        <meta
          name="description"
          content="Get in touch with Bangabandhu International Conference Center (BICC) for inquiries and bookings. Contact us via phone, email, or visit our location."
        />
        <meta
          name="keywords"
          content="BICC contact, Bangabandhu International Conference Center contact, BICC address, BICC phone number, BICC email, contact BICC Dhaka"
        />
      </Helmet>

      <HeroSection
        image={data.image}
        title={data.title}
        subTitle={data.subTitle}
        des={data.des}
      />

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto flex flex-col md:flex-row mt-8 p-6 gap-12"
      >
        {/* Contact Information Section */}
        <section className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="mb-6 text-2xl font-heading font-bold md:text-3xl">
            Contact Us
          </h2>
          <p className="mb-8 text-lg font-body">
            Give us a call or drop by anytime. We endeavor to answer all
            inquiries within 24 hours on business days. We will be happy to
            answer your questions.
          </p>
          <div className="mb-6 flex items-start gap-3 font-body">
            <FaMapLocationDot className="size-5 text-secondary" />
            <p className="text-lg">
              <span className="font-semibold">Address:</span> Agargaon,
              Sher-E-Bangla Nagar, Dhaka-1207, Bangladesh
            </p>
          </div>
          <div className="mb-6 flex items-start gap-3 font-body">
            <FaPhone className="size-5 text-secondary" />
            <p className="text-lg">
              <span className="font-semibold">Phone:</span> +8801755636335,
              01755636336, 01755636337
            </p>
          </div>
          <div className="mb-6 flex items-start gap-3 font-body">
            <GiRotaryPhone className="size-6 text-secondary" />
            <p className="text-lg">
              <span className="font-semibold">Phone:</span> 02-51000366,
              02-5100360, 02-51000361
            </p>
          </div>
          <div className="mb-6 flex items-start gap-3 font-body">
            <IoMdMailUnread className="size-5 text-secondary" />
            <p className="text-lg">
              <span className="font-semibold">Email:</span> info@bicc-bd.com
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="flex-1 bg-slate-300 p-6 rounded-lg shadow-lg">
          <h2 className="mb-6 text-2xl font-heading font-bold md:text-3xl">
            Get In Touch
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="font-body">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block font-semibold mb-2 text-lg font-title"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="Your Name"
                className="w-full p-3 text-base border border-highlight rounded-lg focus:border-accent focus:ring-2 focus:ring-accent"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block font-semibold mb-2 text-lg font-title"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone", { required: "Phone number is required" })}
                placeholder="Your Phone Number"
                className="w-full p-3 text-base border border-highlight rounded-lg focus:border-accent focus:ring-2 focus:ring-accent"
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block font-semibold mb-2 text-lg font-title"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Your Email"
                className="w-full p-3 text-base border border-highlight rounded-lg focus:border-accent focus:ring-2 focus:ring-accent"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block font-semibold mb-2 text-lg font-title"
              >
                Message:
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                rows="4"
                placeholder="Your Message (0-300 characters)"
                className="w-full p-3 text-base border border-highlight rounded-lg focus:border-accent focus:ring-2 focus:ring-accent"
                maxLength="300"
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="flex items-center justify-center w-[150px] gap-2 px-4 py-3 text-white bg-primary rounded-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <FaPaperPlane />
              Submit
            </button>
          </form>
        </section>
      </motion.div>

      <div className="mt-12">
        <MemoizedLocationDirection />
      </div>
      <Toaster position="top-right" />
    </motion.div>
  );
};

export default ContactPages;
