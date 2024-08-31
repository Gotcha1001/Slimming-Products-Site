import React from "react";

export default function DataProtectionPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 to-white p-8">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="p-6">
                    <h1 className="mb-4 text-4xl font-bold">DATA PROTECTION POLICY</h1>
                    <p className="mb-4">
                        <strong>August 2024</strong>
                    </p>

                    <div className="mb-4 rounded-lg bg-gray-100 p-4">
                        <h2 className="mb-2 text-2xl font-bold">1. Introduction</h2>
                        <p>
                            D & H is committed to safeguarding the personal data of our clients, particularly in relation to health products, including slimming products and natural medication for cancer health. This policy outlines our commitment to data protection, ensuring compliance with the Protection of Personal Information Act (POPIA) and other relevant laws.
                        </p>
                    </div>

                    <div className="mb-4 rounded-lg bg-gray-100 p-4">
                        <h2 className="mb-2 text-2xl font-bold">
                            2. Purpose of Data Processing
                        </h2>
                        <ul className="list-inside list-disc">
                            <li>
                                Facilitating communication and processing orders for health products, including slimming products and cancer health natural medication.
                            </li>
                            <li>
                                Collecting feedback and testimonials to enhance our product offerings and customer service.
                            </li>
                            <li>
                                Providing personalized product recommendations and support tailored to individual health needs.
                            </li>
                            <li>
                                Ensuring compliance with legal obligations and responding to customer inquiries and concerns effectively.
                            </li>
                        </ul>
                    </div>

                    <div className="mb-4 rounded-lg bg-gray-100 p-4">
                        <h2 className="mb-2 text-2xl font-bold">
                            3. Legal Basis for Processing
                        </h2>
                        <p>
                            The processing of personal data is conducted on a lawful basis under POPIA, with explicit consent obtained from clients for specific activities, such as processing orders and sharing feedback on health products.
                        </p>
                    </div>

                    <div className="mb-4 rounded-lg bg-gray-100 p-4">
                        <h2 className="mb-2 text-2xl font-bold">
                            4. Data Protection Principles
                        </h2>
                        <ul className="list-inside list-disc">
                            <li>
                                <strong>Lawfulness, Fairness, and Transparency:</strong> Data is processed with client consent and in a clear and transparent manner.
                            </li>
                            <li>
                                <strong>Purpose Limitation:</strong> Personal data is collected for specific, legitimate purposes related to the sale and support of health products.
                            </li>
                            <li>
                                <strong>Data Minimization:</strong> We only collect the necessary personal data required to provide our products and services.
                            </li>
                            <li>
                                <strong>Accuracy:</strong> Clients are encouraged to keep their personal information accurate and up to date.
                            </li>
                            <li>
                                <strong>Storage Limitation:</strong> Personal data is retained only as long as necessary for the purposes for which it was collected.
                            </li>
                            <li>
                                <strong>Integrity and Confidentiality:</strong> We employ appropriate technical and organizational measures to protect personal data against unauthorized access, alteration, or disclosure.
                            </li>
                        </ul>
                    </div>

                    <div className="mb-4 rounded-lg bg-gray-100 p-4">
                        <h2 className="mb-2 text-2xl font-bold">
                            5. Roles and Responsibilities
                        </h2>
                        <p>
                            <strong>Data Controller:</strong> D & H is responsible for ensuring compliance with this policy and applicable data protection laws.
                            <br />
                            <strong>Data Processor:</strong> Any employees or contractors handling personal data on behalf of D & H must adhere to this policy and relevant data protection laws.
                        </p>
                    </div>

                    <div className="mb-4 rounded-lg bg-gray-100 p-4">
                        <h2 className="mb-2 text-2xl font-bold">
                            6. Data Subjects' Rights
                        </h2>
                        <p>
                            Clients have the right to access, correct, and delete their personal data, as well as to restrict or object to its processing. Requests regarding these rights should be directed to our Data Protection Officer.
                        </p>
                    </div>

                    <div className="mb-4 rounded-lg bg-gray-100 p-4">
                        <h2 className="mb-2 text-2xl font-bold">
                            7. Cybersecurity and Data Breach Management
                        </h2>
                        <p>
                            We implement strong cybersecurity practices to prevent unauthorized access, alteration, or loss of personal data. We have procedures in place to quickly detect, investigate, and respond to any data breaches.
                        </p>
                    </div>

                    <div className="mb-4 rounded-lg bg-gray-100 p-4">
                        <h2 className="mb-2 text-2xl font-bold">
                            8. Website, Cookies, and Marketing
                        </h2>
                        <p>
                            Our website collects personal data in accordance with data protection laws, with clear information provided to clients about our use of cookies and options for managing cookie preferences. Marketing communications will only be sent with client consent and provide easy opt-out options.
                        </p>
                    </div>

                    <div className="mb-4 rounded-lg bg-gray-100 p-4">
                        <h2 className="mb-2 text-2xl font-bold">
                            9. Policy Review and Updates
                        </h2>
                        <p>
                            This policy is reviewed regularly to ensure ongoing compliance with data protection laws and best practices. Any updates are communicated to clients as necessary.
                        </p>
                    </div>

                    <div className="mb-4 rounded-lg bg-gray-100 p-4">
                        <h2 className="mb-2 text-2xl font-bold">10. Contact Information</h2>
                        <p>
                            For any questions regarding this policy or to exercise your data protection rights, please contact our Data Protection Officer, Anzel, at{" "}
                            <a href="mailto:anzel@dietandhealth.co.za" className="text-blue-600 hover:underline">
                                anzel@dietandhealth.co.za
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
