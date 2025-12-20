import React from 'react';
import type { Education } from '../data/types';

export const EducationItem: React.FC<{ data: Education }> = ({ data }) => {
    return (
        <div className="education-item">
            <h4 className="degree">{data.degree}</h4>
            <div className="education-details">
                <span className="university">
                    <span>{data.university} | </span>
                    {/* <span>{data.period} | </span> */}
                    <span>{data.location} | {data.cgpa}</span>
                </span>
            </div>
        </div>
    );
};
