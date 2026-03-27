import React from 'react';
import type { Project } from '../data/types';

export const ProjectItem: React.FC<{ data: Project }> = ({ data }) => {
    return (
        <div className="project-item-standalone">
            <ul className="project-list">
                <li>
                    <p>
                        <strong>{data.name}:</strong> <span>{data.tech}</span> {data.description}
                    </p>
                </li>
            </ul>
        </div>
    );
};
