import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import ta from '../data/resume/ta';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'References',
];

const CV = () => (
  <Main
    title="CV"
    description="Mehdi Teymorian's CV. Computer Engineering Undergraduate"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="cv">Curriculum Vitae</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} title="Working Experience" />
      <Experience data={ta} title="Academic Experience" />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      <References />

    </article>
  </Main>
);

export default CV;
