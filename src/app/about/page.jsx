import { FaUtensils, FaMapMarkerAlt, FaPhoneAlt, FaClock, FaConciergeBell, FaHeart } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start px-4 py-8">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-6 md:p-10">
        
        {/* Header */}
        <div className="flex items-center mb-6">
          <FaUtensils className="text-3xl md:text-4xl text-yellow-500 mr-3" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">About Our Restaurant</h1>
        </div>

        {/* Introduction */}
        <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
          Welcome to <span className="font-semibold text-yellow-600">Flavor Haven</span> – where culinary tradition meets modern taste. Since our establishment in 2010, we’ve been dedicated to serving mouth-watering dishes crafted from the freshest local ingredients. Whether you're joining us for a family dinner, romantic date, or a quick lunch, our warm atmosphere and passionate team are here to provide you with an unforgettable dining experience.
        </p>

        {/* Our Story */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Story</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Our journey began in a small kitchen with a big dream — to bring comfort food with a gourmet twist to the community. From our grandmother’s recipes to our chef's innovations, every dish tells a story. Over the years, we've grown into a beloved local favorite, thanks to our loyal customers and committed team.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become the leading culinary destination where people come to connect, celebrate, and enjoy authentic flavors made with love.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To serve high-quality meals in a welcoming environment while maintaining integrity, sustainability, and community connection in everything we do.
            </p>
          </div>
        </div>

        {/* Operating Hours and Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <div className="flex items-center mb-2">
              <FaClock className="text-xl text-blue-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Operating Hours</h3>
            </div>
            <ul className="text-gray-700 text-base space-y-1 ml-6 list-disc">
              <li>Monday - Friday: 10:00 AM - 10:00 PM</li>
              <li>Saturday: 11:00 AM - 11:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <FaConciergeBell className="text-xl text-purple-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Services Offered</h3>
            </div>
            <ul className="text-gray-700 text-base space-y-1 ml-6 list-disc">
              <li>Dine-in & Takeaway</li>
              <li>Online Ordering</li>
              <li>Event Catering</li>
              <li>Private Dining Room</li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 border-t pt-6">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-lg md:text-xl text-red-500 mr-2" />
            <span className="text-gray-600 text-sm md:text-base">123 Main Street, Foodie City, FL 12345</span>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="text-lg md:text-xl text-green-500 mr-2" />
            <span className="text-gray-600 text-sm md:text-base">+1 (555) 123-4567</span>
          </div>
        </div>

        {/* Closing Line */}
        <div className="mt-8 flex items-center justify-center text-center">
          <FaHeart className="text-pink-500 mr-2" />
          <p className="text-gray-700 text-sm md:text-base">
            Thank you for being a part of our story. We look forward to serving you!
          </p>
        </div>
      </div>
    </div>
  );
}
