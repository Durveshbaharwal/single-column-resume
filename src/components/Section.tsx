import React from 'react';

export const Section: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => {
    return (
        <section className={className}>
            <h3 className="section-title">{title}</h3>
            {children}
        </section>
    );
};
