import React from 'react';

export default function TermsOfService() {
    return (
        <section className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 bg-gradient-to-r from-blue-400 to-white">
            {/* Title */}
            <div className="text-center font-serif text-4xl font-bold text-primary-950 mb-8">
                Terms of Service
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-black p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Terms Image 1"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="bg-black p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/4342493/pexels-photo-4342493.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Terms Image 2"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="bg-black p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img
                        src="https://images.pexels.com/photos/3321796/pexels-photo-3321796.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Terms Image 3"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Terms of Service Content */}
            <div className="bg-black text-white rounded-lg shadow-lg p-6 mb-8 ">
                <h2 className="text-2xl font-bold mb-4 text-center">Terms and Conditions</h2>
                <p className="text-lg mb-4">
                    Welcome to D & H! By using our health products and services, you agree to the following terms and conditions. Please read them carefully.
                </p>
                <p className="text-lg mb-4">
                    1. **Service Usage**: Our health products, including slimming products and natural medication for cancer health, are designed to support wellness and health. By purchasing and using our products, you acknowledge that they are not a substitute for professional medical advice, diagnosis, or treatment.
                </p>
                <p className="text-lg mb-4">
                    2. **Payment and Refunds**: Payment for our products is required upfront. Refunds are available under certain conditions, which are detailed in our refund policy. Please review our policy for more information.
                </p>
                <p className="text-lg mb-4">
                    3. **Client Conduct**: We expect all customers to use our products responsibly and in accordance with the provided instructions. Any misuse or improper use of our products may result in the termination of service.
                </p>
                <p className="text-lg mb-4">
                    4. **Liability**: D & H is not liable for any adverse effects or damages resulting from the use of our products. By purchasing and using our products, you agree to hold us harmless from any claims or damages.
                </p>
                <p className="text-lg">
                    For any questions or concerns about our terms, please contact Anzel at <a href="mailto:anzel@dietandhealth.co.za" className="text-yellow-300 hover:underline">anzel@dietandhealth.co.za</a>
                </p>
            </div>
        </section>
    );
}
