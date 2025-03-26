import React from 'react';
import { Users, Eye, Key, MessageCircle } from 'lucide-react';

const UserRulesPage = () => {
    const rules = [
        {
            icon: <Users size={32} color="currentColor" />, 
            title: "Access Alumni List", 
            description: "Users can browse and search for fellow alumni in the alumni directory."
        },
        {
            icon: <Eye size={32} color="currentColor" />, 
            title: "View Profiles", 
            description: "Users can view the profiles of other alumni and see their details."
        },
        {
            icon: <Key size={32} color="currentColor" />, 
            title: "Manage Account", 
            description: "Users can change their login password and update their profile picture."
        },
        {
            icon: <MessageCircle size={32} color="currentColor" />, 
            title: "Community Interaction", 
            description: "Users can post messages and engage in discussions, but they cannot edit, delete, or pin messages."
        }
    ];

    return (
        <div className="rules-page">
            <div className="container">
                <div className="text-center">
                    <h1 className="main-heading">
                        <span>User Guidelines</span>
                        <span className="highlight"> Alumni Connect</span>
                    </h1>
                    <p className="description">
                        Understand the platform rules and make the most out of your Alumni Connect experience.
                    </p>
                </div>
                <div className="rules">
                    {rules.map((rule, index) => (
                        <div className="rule" key={index}>
                            <div className="icon-container">{rule.icon}</div>
                            <h3 className="rule-title">{rule.title}</h3>
                            <p className="rule-description">{rule.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserRulesPage;
