import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">About Dragon News</h2>

            <div className="space-y-6">
                <section>
                    <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
                    <p className="text-gray-700">
                        Dragon News is dedicated to bringing you the latest and most relevant news from around the world.
                        We strive to provide accurate, timely, and engaging content that keeps you informed and connected
                        with current events.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-3">What We Offer</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Breaking news and latest updates</li>
                        <li>In-depth coverage of important events</li>
                        <li>Diverse categories including technology, sports, entertainment, and more</li>
                        <li>User-friendly interface for easy navigation</li>
                        <li>Real-time news updates</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-3">Our Commitment</h3>
                    <p className="text-gray-700">
                        We are committed to maintaining the highest standards of journalism and providing our readers
                        with reliable information. Our team works tirelessly to ensure that every piece of news we
                        publish is thoroughly verified and fact-checked.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-3">Contact Us</h3>
                    <p className="text-gray-700">
                        Have questions, suggestions, or feedback? We'd love to hear from you! Reach out to us at
                        <a href="mailto:contact@dragonnews.com" className="text-blue-600 hover:text-blue-800 ml-1">
                            contact@dragonnews.com
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About; 