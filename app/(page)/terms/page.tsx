// app/terms/page.jsx
import React from 'react';

export const metadata = {
    title: 'Terms of Use | Soy and Spice',
    description: 'Read the terms and conditions for using the Soy and Spice website, including the Privacy Policy and contact information.',
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-6 text-gray-800 bg-white shadow my-6">
            {/* Header */}
            <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
            <p className="text-sm text-gray-600 mb-6">Effective Date: Dec 16, 2024</p>

            {/* Content */}
            <p className="mb-4">
                Welcome to this website hosted by Soy and Spice (“Company” or “we”). Company maintains this website for your
                personal information, education, and communication. Your access to and use of this website is subject to the
                following Terms of Use. Please read these Terms of Use carefully before accessing or using this website, so that
                you fully understand your rights and responsibilities. By accessing or using this website, you agree to these
                Terms of Use. If you do not agree to the following Terms of Use, do not access or use this website, and instead
                contact us in writing or by telephone as provided at the bottom of these Terms of Use for further information.
            </p>
            <p className="mb-4">
                Company may modify or amend these Terms of Use at any time. All changes will be effective immediately upon their
                posting on this website. Material changes will be posted conspicuously on this website. By accessing the website
                after the changes to the Terms of Use are posted, you agree to the changes.
            </p>

            {/* Site Information */}
            <h2 className="text-2xl font-semibold mt-6 mb-4">Site Information</h2>
            <p className="mb-4">
                Information displayed on this website may change without notice. We reserve the right to modify the information
                without any obligation to notify past or current website users. Company makes no representations that the
                materials on this website are appropriate or available for use in any particular state or other countries outside
                the United States. When accessing this website, you are solely responsible for compliance with the laws of the
                state or country in which you live.
            </p>
            <p className="mb-4">
                All offers set forth on this website are void where prohibited and are subject to the posting of any official
                rules pertaining to the offers. Some services offered on this website may not be available in certain areas.
            </p>

            {/* Privacy Policy */}
            <h2 className="text-2xl font-semibold mt-6 mb-4">Privacy Policy</h2>
            <p className="mb-4">
                By accessing and using this website, you agree to the terms of our Privacy Policy (as is included below), which
                are incorporated into these Terms of Use by this reference.
            </p>

            {/* Contacting Us */}
            <h2 className="text-2xl font-semibold mt-6 mb-4">Contacting Us</h2>
            <p className="mb-4">
                If you have any questions or concerns regarding these Terms of Use, please contact us at:
            </p>
            <p className="mb-4">
                <strong>Soy and Spice</strong>
                <br />
                <a href="mailto:info@soyandspice.com" className="text-indigo-600 underline">
                    info@soyandspice.com
                </a>
                <br />
                412-218-4200
            </p>

            {/* Effective Date for Privacy Policy */}
            <h3 className="text-xl font-semibold mt-6 mb-2">Privacy Policy</h3>
            <p className="text-sm text-gray-600 mb-6">Effective Date: Dec 16, 2024</p>

            <p className="mb-4">
                Soy and Spice takes seriously the confidentiality of your personal information. The following Privacy Policy sets
                forth our information gathering and dissemination practices for this website. BY ACCESSING OR USING THIS WEBSITE,
                YOU HEREBY AGREE TO THE TERMS OF THIS PRIVACY POLICY AND CONSENT TO THE COLLECTION AND USE OF INFORMATION AS
                DISCUSSED IN THIS PRIVACY POLICY. IF YOU DO NOT AGREE TO THE TERMS OF THIS PRIVACY POLICY, DO NOT ACCESS THIS
                WEBSITE.
            </p>
        </div>
    );
}
