import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';
import type { ContactInfo } from '../data/types';

export const Header: React.FC<{ name: string; contact: ContactInfo }> = ({ name, contact }) => {
    return (
        <header className="header">
            <h1 className="name">{name}</h1>
            <div className="contact-info">
                <div className="contact-item">
                    <Mail className="contact-icon" size={16} />
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
                <div className="contact-item">
                    <Phone className="contact-icon" size={16} />
                    <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                </div>
                <div className="contact-item">
                    <MapPin className="contact-icon" size={16} />
                    <span>{contact.location}</span>
                </div>
                <div className="contact-item">
                    <Globe className="contact-icon" size={16} />
                    <a href={contact.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>
                </div>
                <div className="contact-item">
                    <Linkedin className="contact-icon" size={16} />
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="contact-item">
                    <Github className="contact-icon" size={16} />
                    <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </header>
    );
};
