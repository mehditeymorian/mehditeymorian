import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import References from '../components/Resume/References';

import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Experience',
  'Skills',
  'References',
];

const ExperienceComponent = () => (
  <Main
    title="Experience"
    description="Mehdi Teymorian's Experience. Software Engineer at Snapp"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="experience">Experience</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Experience data={positions} title="Experience" />
      <Skills skills={skills} categories={categories} />
      <References />

    </article>
  </Main>
);

export default ExperienceComponent;
