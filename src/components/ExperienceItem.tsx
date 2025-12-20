import React from 'react';
import type { Experience } from '../data/types';
import { FormattedText } from '../utils/FormattedText';

export const ExperienceItem: React.FC<{ data: Experience }> = ({ data }) => {
    return (
        <div className="experience-item">
            <div className="job-header">
                <h4 className="job-title">{data.title}</h4>
                <div className="job-details">
                    <span className="company">
                        <span>{data.company} | </span>
                        <span>{data.period} | </span>
                        <span>{data.location}</span>
                    </span>
                </div>
            </div>

            {data.projects && (
                <div className="projects">
                    <ul className="project-list">
                        {data.projects.map((project, index) => (
                            <li key={index}>
                                <p>
                                    <strong>{project.name}:</strong> <span>{project.tech}</span> {project.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {data.descriptionLines && (
                <div className="achievements">
                    <ul>
                        {data.descriptionLines.map((line, index) => (
                            <li key={index}>
                                <p className="job-description">
                                    <FormattedText text={line} />
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {data.contact && (
                <div className="job-contact">Contact: {data.contact}</div>
            )}
        </div>
    );
};
