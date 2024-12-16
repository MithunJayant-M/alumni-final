import React from 'react';
import { Users, Building2, MapPin } from 'lucide-react';

const LandingPage = () => {
    const features = [
        {
            icon: <Users size={32} color="currentColor" />,
            title: "Only Approved Users",
            description: "Find and connect with alumni from your batch and other years.Give your details by logging in the page and get approved"
        },
        {
            icon: <Building2 size={32} color="currentColor" />,
            title: "Career Opportunities",
            description: "Discover job opportunities shared by fellow alumni."
        },
        {
            icon: <MapPin size={32} color="currentColor" />,
            title: "Global Network",
            description: "Connect with alumni across different locations worldwide."
        }
    ];

    return (
        <div className="home">
            <div className="container">
                <div className="text-center">
                    <h1 className="main-heading">
                        <span>'Please Sign in to see your home page'</span>
                        <span className="highlight">Alumni Connect</span>
                    </h1>
                    <p className="description">
                        Connect with fellow alumni, share experiences, and grow your professional network.
                    </p>
                </div>
                <div className="features">
                    {features.map((feature, index) => (
                        <div className="feature" key={index}>
                            <div className="icon-container">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
