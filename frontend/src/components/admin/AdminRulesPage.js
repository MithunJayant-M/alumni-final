import React from 'react';
import { Users, Edit, Trash2, PlusCircle, Key, MessageSquare, MapPin, Settings } from 'lucide-react';

const AdminRulesPage = () => {
    const rules = [
        {
            icon: <Users size={32} color="currentColor" />, 
            title: "Manage Alumni List", 
            description: "View, edit, delete, and add new alumni members."
        },
        {
            icon: <Edit size={32} color="currentColor" />, 
            title: "Edit Alumni Details", 
            description: "Modify alumni details including profile information and status."
        },
        {
            icon: <Trash2 size={32} color="currentColor" />, 
            title: "Delete Alumni", 
            description: "Remove alumni from the system permanently."
        },
        {
            icon: <PlusCircle size={32} color="currentColor" />, 
            title: "Add New Alumni", 
            description: "Register new alumni members into the platform."
        },
        {
            icon: <Key size={32} color="currentColor" />, 
            title: "Manage Profile & Security", 
            description: "Change password, update profile photo, and manage personal information."
        },
        {
            icon: <MessageSquare size={32} color="currentColor" />, 
            title: "Community Management", 
            description: "Post messages, edit or delete posts, and pin important messages."
        },
        {
            icon: <MapPin size={32} color="currentColor" />, 
            title: "Alumni Location Management", 
            description: "Manage and update the location details of alumni."
        },
        {
            icon: <Settings size={32} color="currentColor" />, 
            title: "User Role Management", 
            description: "Change user roles to 'User Verified', 'Admin', or 'User Unverified'."
        }
    ];

    return (
        <div className="admin-rules">
            <div className="container">
                <div className="text-center">
                    <h1 className="main-heading">
                        <span className="highlight">Admin Rules & Privileges</span>
                    </h1>
                    <p className="description">
                        As an admin, you have the ability to manage alumni, maintain security, and oversee community interactions.
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

export default AdminRulesPage;
