import React from 'react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

const products = [
    {
        title: "Cancer Chemo Curcumin 95 %",
        image: "https://github.com/Gotcha1001/Images-2-Slimming/blob/main/Cancer%20Chemo%20Curcumin%2095.jpg?raw=true",
        price: "R 400.00",
        description: "Supplementation with curcumin reduces markers of inflammation and increases the levels of antioxidants in the body. It also lowers risk of diabetes and supports cardiovascular function. It is anticancer, antibacterial, and relieves pain.",
        ingredients: "Hydrocurbed Curcumin 95 %, Fibersol",
        specifications: "60 x 500 mg capsules",
        dosage: "2 capsules per day",
        warnings: "To date no adverse reactions recorded"
    },
    {
        title: "Cancer Treatment B17",
        image: "https://github.com/Gotcha1001/Images-2-Slimming/blob/main/Cancer%20treatment%20b17.jpg?raw=true",
        price: "R 700.00",
        description: "This product lowers risk of cancer. It also relieves pain and lowers blood pressure. B17 is known for its cancer-fighting properties. At its core, the hypothesis of B17 as a cancer fighter rests on a mechanism called apoptosis, which is a type of cell death that occurs either because a cell is cancerous, infected, or it is time for new cells to replace it.",
        ingredients: "Raw nuts, Vegetables seeds, Fruit pits.",
        specifications: "30 x 100 mg capsules",
        dosage: "1 capsule per day",
        warnings: "To date no adverse reactions recorded"
    },
    {
        title: "Cayenne Pepper",
        image: "https://github.com/Gotcha1001/Images-2-Slimming/blob/main/Cayenne%20Pepper.jpg?raw=true",
        price: "R 80.00",
        description: "Cayenne Pepper is very high in vitamins A, C, B Complex, calcium, and potassium. It can assist with various conditions including allergies, gout, obesity, heart diseases, and more.",
        ingredients: "100 % capsicum",
        specifications: "60 x 500 mg capsules",
        dosage: "1 to 2 capsules per day",
        warnings: "Not recommended for people with low blood pressure"
    },
    {
        title: "Glyconutrients",
        image: "https://github.com/Gotcha1001/Images-2-Slimming/blob/main/Glyconutrients.jpg?raw=true",
        price: "R 400.00",
        description: "This product is manufactured by a SAHPRA approved facility. It enables your body to heal itself by producing new stem cells, boosting the immune system, balancing immune systems, and assisting with various health conditions.",
        ingredients: "Arabinogalactan, gum ghatti, spirulina, chondroitin, glucosamine, reishi mushroom, wolfberry, astragalus, aloe vera",
        specifications: "60 x 500 mg capsules",
        dosage: "2 to 6 capsules per day",
        warnings: "None"
    },
    {
        title: "Problem Cases Drops",
        image: "https://github.com/Gotcha1001/Images-2-Slimming/blob/main/Problem%20cases%20drops.jpg?raw=true",
        price: "R 300.00",
        description: "A highly effective homeopathic formula that addresses weight-loss barriers such as toxins, water retention, hormone imbalance, and more. Helps achieve weight loss goals by focusing on problem areas.",
        ingredients: "Dandelion, Cliver herb, Bladderwrack, Meadowsweet, Horse chestnut, Buchu, Poke root, Liquorice",
        specifications: "30 ml drops",
        dosage: "15 drops three times daily",
        warnings: "Not suitable during pregnancy or breastfeeding"
    },
    {
        title: "Skin Stem Cell Enhancer",
        image: "https://github.com/Gotcha1001/Images-2-Slimming/blob/main/Skin%20Stem%20Cell%20Enhancer.jpg?raw=true",
        price: "R 450.00",
        description: "Designed to provide all eight essential monosaccharides needed to protect, defend, and restore skin cells. Helps to prevent brittle nails, hair loss, and dry lips.",
        ingredients: "Arabinogalactan, Mineral Vitamin",
        specifications: "60 x 500 mg capsules",
        dosage: "2 to 6 capsules daily",
        warnings: "To date no adverse reactions recorded"
    },
    {
        title: "Slimming Capsules",
        image: "https://github.com/Gotcha1001/Images-2-Slimming/blob/main/Slimming%20capsules.jpg?raw=true",
        price: "R 450.00",
        description: "A strong appetite suppressant manufactured by a SAHPRA approved facility. Helps to release cholecystokinin, a hormone that suppresses appetite, enhances alertness, and regulates blood sugar levels.",
        ingredients: "L-Phenylalanine, Hoodia Gordonii, Glycomannon, Caffeine, Cola Nitidia, Cascara Sagrada, Fructo Oligo Saccharide",
        specifications: "60 x 500 mg capsules",
        dosage: "2 to 4 capsules daily - 2 hours prior to meals",
        warnings: "None"
    },
    {
        title: "Ultimate Mineral Vitamin Capsules",
        image: "https://github.com/Gotcha1001/Images-2-Slimming/blob/main/Ultimate%20Mineral%20Vitamin%20Capsules.jpg?raw=true",
        price: "R 150.00",
        description: "Highly recommended for people on a diet, supporting normal growth and development. Ideal for children, pregnant women, the elderly, and athletes.",
        ingredients: "Vitamin D3, Tri Calcium Phosphate, Iodine KI, Magnesium Oxide, Zinc Oxide, Selenium, Manganese Sulphate, Copper Sulphate, Chromium, Molybdenum, Di Potassium Phosphate, Iron",
        specifications: "60 x 500 mg capsules",
        dosage: "2 to 4 capsules daily",
        warnings: "None"
    }
];

export default function Product() {
    return (
        <section className="relative overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                className="absolute inset-0 object-cover w-full h-full z-10"
            >
                <source src="https://videos.pexels.com/video-files/2646392/2646392-hd_1920_1080_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content */}
            <div className="relative z-20 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 bg-opacity-80">
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1 max-w-4xl w-full">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105"
                            >
                                {/* Product Title */}
                                <h2 className="text-3xl font-bold mb-4 text-center">{product.title}</h2>

                                {/* Product Image */}
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-64 object-contain rounded-lg mb-4"
                                />

                                {/* Product Description */}
                                <p className="text-lg mb-4 text-center">{product.description}</p>

                                {/* Product Details */}
                                <div className="text-base space-y-2 text-center">
                                    <p className="font-semibold text-xl text-red-600">Price: {product.price}</p>
                                    <p className="font-semibold">Ingredients: {product.ingredients}</p>
                                    <p className="font-semibold">Specifications: {product.specifications}</p>
                                    <p className="font-semibold">Dosage: {product.dosage}</p>
                                    <p className="font-semibold">Warnings: {product.warnings}</p>
                                </div>

                                {/* WhatsApp Link */}
                                <div className="flex justify-center mt-4">
                                    <a
                                        href="https://wa.me/27845604003"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-600 hover:opacity-75 zoom"
                                    >
                                        <FaWhatsapp size={50} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}