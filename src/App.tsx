
import { Header } from './components/Header';
import { Section } from './components/Section';
import { ExperienceItem } from './components/ExperienceItem';
import { EducationItem } from './components/EducationItem';

import { profile } from './data/profile';
import { experience } from './data/experience';
import { projects } from './data/projects';
import { education } from './data/education';
import { ProjectItem } from './components/ProjectItem';
import { skills } from './data/skills';
import { achievements } from './data/achievements';


function App() {
  return (
    <div className="resume-container">
      <div className="resume">
        <Header name={profile.name} contact={profile.contact} />

        <div className="title-section">
          <h2 className="title" dangerouslySetInnerHTML={{ __html: profile.title.replace("AI Automation", "<span style=\"font-size: 1.25rem;\">AI Automation</span>") }}></h2>
        </div>

        <div className="summary-section">
          <p className="summary">{profile.summary}</p>
        </div>

        <div className="main-content-single">
          <Section title="Work Experience" className="experience-section">
            {experience.map((exp, index) => (
              <ExperienceItem key={index} data={exp} />
            ))}
          </Section>

          <Section title="Personal Projects" className="projects-section">
            {projects.map((proj, index) => (
              <ProjectItem key={index} data={proj} />
            ))}
          </Section>

          <Section title="Education" className="education-section">
            {education.map((edu, index) => (
              <EducationItem key={index} data={edu} />
            ))}
          </Section>

          <Section title="Skills" className="skills-section">
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </Section>

          {/*           <Section title="Certifications" className="certifications-section">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <p className="certification-title">
                  {cert.title} | <span className="certification-period">{cert.period}</span>
                </p>
              </div>
            ))}
          </Section> */}

          <Section title="Publications" className="achievements-section">
            {achievements.map((ach, index) => (
              <div key={index} className="achievement-item">
                <p className="achievement-description">{ach.title}</p>
                <p className="achievement-description">{ach.journal}</p>
                <p className="achievement-description">{ach.details}</p>
              </div>
            ))}
          </Section>


        </div>
      </div>
    </div>
  );
}

export default App;
