import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaGlobe } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-white rounded-md sm:rounded-lg shadow-md mt-4 sm:mt-8">
            <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Contact Us</h2>
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div className="flex-1 space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                        <FaPhoneAlt className="text-blue-600 text-lg sm:text-xl" />
                        <span className="text-base sm:text-lg">+1 (234) 567-8901</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <FaEnvelope className="text-blue-600 text-lg sm:text-xl" />
                        <span className="text-base sm:text-lg">contact@restaurant.com</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <FaMapMarkerAlt className="text-blue-600 text-lg sm:text-xl" />
                        <span className="text-base sm:text-lg">123 Main St, City, Country</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <FaClock className="text-blue-600 text-lg sm:text-xl" />
                        <span className="text-base sm:text-lg">Mon-Sun: 10:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <FaGlobe className="text-blue-600 text-lg sm:text-xl" />
                        <span className="text-base sm:text-lg">www.restaurant.com</span>
                    </div>
                </div>
                <form className="flex-1 space-y-3 sm:space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-3 sm:px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-3 sm:px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full px-3 sm:px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full px-3 sm:px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Find Us Here</h3>
                <div className="w-full h-64 rounded overflow-hidden shadow">
                    <iframe
                        title="Restaurant Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019051212709!2d-122.41941508468144!3d37.77492977975959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b2b1b1b%3A0x4c2c0e6e2e0e0e0e!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
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
    );
}