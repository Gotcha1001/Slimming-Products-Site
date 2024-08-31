import React from 'react';

export default function PrivacyPolicy() {
    return (
        <section className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 bg-gradient-to-r from-blue-400 to-white">
            {/* Title */}
            <div className="text-center font-serif text-4xl font-bold text-primary-950 mb-8">
                Privacy Policy
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-black p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/4152513/pexels-photo-4152513.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Privacy Policy Image 1"
                        className="w-full h-full object-contain rounded-lg"
                    />
                </div>
                <div className="bg-black p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/2882638/pexels-photo-2882638.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Privacy Policy Image 2"
                        className="w-full h-full object-contain rounded-lg"
                    />
                </div>
                <div className="bg-black p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/7142962/pexels-photo-7142962.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Privacy Policy Image 3"
                        className="w-full h-full object-contain rounded-lg"
                    />
                </div>
            </div>

            {/* Privacy Policy Content */}
            <div className="bg-black text-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Privacy Policy</h2>
                <p className="text-lg mb-4">
                    At D & H, we are committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our health products and services.
                </p>
                <p className="text-lg mb-4">
                    1. **Information Collection**: We collect personal information such as your name, email address, and contact details when you purchase or inquire about our health products. This information is used to process your orders, provide customer support, and enhance your experience with our products.
                </p>
                <p className="text-lg mb-4">
                    2. **Data Usage**: Your information is used to facilitate transactions, communicate with you about your orders, and send updates about our products and promotions. We may also use your data to improve our services and ensure your satisfaction.
                </p>
                <p className="text-lg mb-4">
                    3. **Data Security**: We implement robust security measures to protect your personal information from unauthorized access, alteration, or disclosure. We use industry-standard encryption and secure protocols to ensure your data is safe.
                </p>
                <p className="text-lg mb-4">
                    4. **Third-Party Services**: We may share your information with trusted third parties who assist us in processing orders, managing payments, or providing customer support. These third parties are contractually obligated to protect your data and use it only for the purposes specified by us.
                </p>
                <p className="text-lg mb-4">
                    5. **Changes to Policy**: We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Any updates will be posted on this page with an updated effective date, and we encourage you to review this policy regularly.
                </p>
                <p className="text-lg">
                    If you have any questions or concerns about our Privacy Policy, please contact Anzel at <a href="mailto:anzel@dietandhealth.co.za" className="text-yellow-300 hover:underline">anzel@dietandhealth.co.za</a>
                </p>
            </div>
        </section>
    );
}
