import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/resume/Education';
import Experience from '../components/resume/Experience';
import Skills from '../components/resume/Skills';
import Courses from '../components/resume/Courses';
import References from '../components/resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Courses: () => <Courses data={courses} />,
  References: () => <References />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Shakib's Resume. Detailing courses, job history, and skills"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="/resume">Resume</Link></h2>
          <p>My educational background, professional experience, skills, and references.</p>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;