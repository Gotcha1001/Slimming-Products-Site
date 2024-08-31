import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function About() {
    const [state, handleSubmit] = useForm("xrbzjwno");

    return (
        <section className="relative p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            {/* Video Background */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    className="object-cover w-full h-full z-19"
                    autoPlay
                    muted
                    loop
                >
                    <source src="https://videos.pexels.com/video-files/2845487/2845487-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto shadow-lg bg-white rounded-lg p-6 mb-6 max-w-4xl">
                {/* Title */}
                <div className="text-center font-serif text-4xl font-bold text-primary-950 mb-8 animate-bounce shadow-sky rounded-lg">
                    About Our Products
                </div>

                {/* Product Cards */}
                <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-8 mb-8">
                    {/* Slimming Product Card */}
                    <div className="bg-black rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full sm:w-3/4 md:w-2/3 lg:w-2/5 xl:w-1/3 lg:h-80 xl:h-72 flex items-center justify-center">
                        <img
                            src="https://images.pexels.com/photos/879521/pexels-photo-879521.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with actual image URL
                            alt="Slimming Product"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* Benefits Cards */}
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 mb-8">
                    {/* Card 1: All-Natural Ingredients */}
                    <div className="bg-black text-white rounded-lg shadow-lg p-6 w-full sm:w-1/3 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-bold mb-4 text-center">All-Natural Ingredients</h3>
                        <p className="text-center">
                            Our slimming products are crafted from all-natural ingredients, ensuring you receive the best benefits without harmful additives. Enjoy a healthier and more effective way to achieve your weight loss goals.
                        </p>
                    </div>

                    {/* Card 2: Long-Lasting Effects */}
                    <div className="bg-black text-white rounded-lg shadow-lg p-6 w-full sm:w-1/3 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-bold mb-4 text-center">Long-Lasting Effects</h3>
                        <p className="text-center">
                            Experience sustained results with our products. Designed to help you maintain your ideal weight and improve your overall health over time.
                        </p>
                    </div>

                    {/* Card 3: Health Benefits */}
                    <div className="bg-black text-white rounded-lg shadow-lg p-6 w-full sm:w-1/3 transition-transform transform hover:scale-105">
                        <h3 className="text-xl font-bold mb-4 text-center">Health Benefits</h3>
                        <p className="text-center">
                            Our products not only help with slimming but also contribute to overall well-being. From improved energy levels to enhanced metabolic function, discover how our solutions benefit your health.
                        </p>
                    </div>
                </div>
            </div>

            {/* Cancer Medication Section */}
            <div className="relative z-10 container mx-auto bg-white shadow-lg rounded-lg p-6 mb-6 max-w-4xl">
                <div className="text-center font-serif text-3xl font-bold text-primary-950 mb-8 shadow-sky rounded-lg">
                    Our Cancer Medication
                </div>
                <div className="space-y-6">
                    {/* About the Medication */}
                    <div className="p-6 rounded-lg shadow-lg hover:bg-black hover:text-white">
                        <h3 className="text-xl font-bold mb-4">Effective Treatment</h3>
                        <p>
                            Our cancer medication has been proven to be highly effective in treating various types of cancer. It is designed to target cancer cells precisely, minimizing side effects and improving patient outcomes.
                        </p>
                    </div>

                    {/* Patient Success Stories */}
                    <div className="p-6 rounded-lg shadow-lg hover:bg-black hover:text-white">
                        <h3 className="text-xl font-bold mb-4">Patient Success Stories</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>“This medication has been a game-changer in my treatment. I feel more hopeful and stronger than ever.”</li>
                            <li>“Thanks to this innovative treatment, my cancer is in remission, and I’m back to living a full life.”</li>
                            <li>“The side effects were minimal compared to other treatments, and I’ve seen incredible progress in my health.”</li>
                        </ul>
                    </div>

                    {/* Press Coverage */}
                    <div className="p-6 rounded-lg shadow-lg hover:bg-black hover:text-white">
                        <h3 className="text-xl font-bold mb-4">In the Press</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Health Magazine</li>
                            <li>Medical News Today</li>
                            <li>Cancer Research Journal</li>
                            <li>The Lancet</li>
                            <li>Forbes Health</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="relative z-10 container mx-auto mt-10 bg-white shadow-lg rounded-lg p-6 mb-6 max-w-4xl">
                <div className="text-center font-serif text-3xl font-bold text-primary-950 mb-8">
                    Get in Touch
                </div>
                <div className="flex flex-col items-center space-y-6">
                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="w-full max-w-md gradient-background5 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4 text-center">Contact Us</h3>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-bold mb-2">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-bold mb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-bold mb-2">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600"
                        >
                            Send Message
                        </button>
                        {state.succeeded && <p className="text-center text-green-500 mt-4">Thanks for reaching out!</p>}
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                            className="text-red-500 text-sm mt-1"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                            className="text-red-500 text-sm mt-1"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                            className="text-red-500 text-sm mt-1"
                        />
                    </form>
                </div>
            </div>
        </section>
    );
}
