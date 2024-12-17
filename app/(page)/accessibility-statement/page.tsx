// app/accessibility/page.jsx
import React from 'react';

export const metadata = {
    title: 'Web Accessibility Statement | Soy and Spice',
    description: 'Learn about our commitment to web accessibility and usability for all our customers, including those with disabilities.',
};

export default function AccessibilityPage() {
    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen">
            <header className="bg-indigo-600 text-white">
                <div className="container mx-auto px-6 py-4">
                    <h1 className="text-3xl font-bold">Web Accessibility Statement</h1>
                </div>
            </header>

            <main className="container mx-auto px-6 py-8">
                {/* General Section */}
                <section className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-indigo-700">General</h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Soy and Spice cares about all our customers and is committed to facilitating and improving the accessibility and
                        usability of its Website,{' '}
                        <a href="https://www.soyandspice.com" className="text-indigo-500 underline">
                            www.soyandspice.com
                        </a>{' '}
                        (the "Website"), ensuring that our Website services and content are accessible to persons with disabilities,
                        including, but not limited to users of screen reader technology.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        To accomplish this, Soy and Spice has partnered with UsableNet Inc ("UsableNet"), a leading web accessibility
                        consultant, by implementing its technology that will enable and maintain accessibility in-line with the{' '}
                        <a href="https://www.w3.org/WAI/WCAG21/quickref/" className="text-indigo-500 underline">
                            Web Content Accessibility Guidelines (WCAG)
                        </a>
                        , which also brings the Website into conformance with the Americans with Disabilities Act of 1990 in the United
                        States.
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        The initial accessibility work has been completed (where testing has been performed both with automatic
                        accessibility testing tools and users of screen readers to identify issues) and remediation has been applied.
                        UsableNet will continue to monitor the Website and make accessibility updates when needed. Remediations will be
                        applied to the Website via an easy to find "Enable Accessibility" link to ensure equal access to all features and
                        functions.
                    </p>
                </section>

                {/* Disclaimer Section */}
                <section className="bg-white shadow-md rounded-lg p-6 mt-8">
                    <h2 className="text-2xl font-semibold text-indigo-700">Disclaimer</h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Please be aware that our efforts to maintain accessibility and usability are ongoing. While we strive to make the
                        Website as accessible as possible, some issues may be encountered by different assistive technology as the range of
                        assistive technology is wide and varied. We appreciate your understanding.
                    </p>
                </section>

                {/* Contact Us Section */}
                <section className="bg-white shadow-md rounded-lg p-6 mt-8">
                    <h2 className="text-2xl font-semibold text-indigo-700">Contact Us</h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        If you have specific questions or concerns about the accessibility of any web page on the Website, then please
                        contact us by e-mail at{' '}
                        <a href="mailto:support@soyandspice.com" className="text-indigo-500 underline">
                            support@soyandspice.com
                        </a>{' '}
                        or by phone at{' '}
                        <a href="tel:+14122184200" className="text-indigo-500 underline">
                            (412) 218-4200
                        </a>
                        .
                    </p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        If you do encounter an accessibility issue, then please be sure to specify the web page and nature of the issue,
                        and we will make all reasonable efforts to make that page, or the information contained therein, accessible for
                        you. Thanks for visiting.
                    </p>
                </section>
            </main>
        </div>
    );
}
