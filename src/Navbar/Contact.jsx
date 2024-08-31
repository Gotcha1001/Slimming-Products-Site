import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
    return (
        <section className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 bg-gray-100">
            <div className="text-center font-serif text-4xl font-bold text-primary-950 mb-4">
                Contact Us
            </div>

            {/* Logo Image */}
            <div className="flex justify-center mb-8">
                <img
                    src="https://raw.githubusercontent.com/Gotcha1001/Images-2-Slimming/690707dcec68bd6d27abe6e8d3ed28ca5826d418/1.jpg" // Replace with the URL of your logo image
                    alt="Logo"
                    className="w-48 h-48 zoom" // Adjust size as needed
                />
            </div>

            <div className="flex justify-center mb-12">
                <img
                    src="https://images.pexels.com/photos/207489/pexels-photo-207489.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Placeholder Image"
                    className="w-full max-w-2xl rounded-lg shadow-lg"
                />
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 mb-8">
                {/* Contact Info Card */}
                <div className="bg-black text-yellow-500 rounded-lg shadow-lg p-6 w-full sm:w-1/3 mx-auto">
                    <h3 className="text-xl font-bold mb-4 text-center">Contact Information</h3>
                    <div className="flex flex-col items-center mb-4">
                        <a href="tel:+27845604003" className="text-xl font-semibold text-primary-900 flex items-center space-x-2">
                            <i className="fas fa-phone-alt text-primary-900 text-4xl horizontal-spin"></i>
                            <span>+27 84 560 4003</span>
                        </a>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                        <a href="tel:+27610910748" className="text-xl font-semibold text-primary-900 flex items-center space-x-2">
                            <i className="fas fa-phone-alt text-primary-900 text-4xl horizontal-spin"></i>
                            <span>078 0077368</span>
                        </a>
                    </div>
                    <p className="mb-2 mt-3 text-center">
                        Email: <a href="mailto:anzel@dietandhealth.co.za" className="text-yellow-300 hover:underline">anzel@dietandhealth.co.za</a>
                    </p>
                </div>
            </div>

            <div className="flex justify-center mb-8">


                <a href="https://wa.me/27845604003" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={80} className="ml-4 zoom text-green-600 hover:opacity-75 horizontal-spin" />
                </a>
            </div>

            {/* Google Map */}
            <div className="flex justify-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d269725.40951405716!2d26.45465794179024!3d-27.34684736300582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e96cd93f2122207%3A0x5c472a12f2123ad!2sBothaville%2C%209660!5e0!3m2!1sen!2sza!4v1725134557201!5m2!1sen!2sza"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                ></iframe>
            </div>
        </section>
    );
}
