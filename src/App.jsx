import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Personal from './components/Personal'
import Experience from './components/Experience'
import Education from './components/Education'
import Document from './components/Document'
import { nanoid } from 'nanoid'
import Certification from './components/Certification'
import Project from './components/Project'

function App() {
  const [showCert, setShowCert] = useState(true)
  const [personal, setPersonal] = useState({
    firstName: '',
    lastName: '',
    github: '',
    email: '',
    portfolio: '',
  })
  const [experiences, setExperience] = useState([
    {
      id: nanoid(),
      position: '',
      company: '',
      city: '',
      from: '',
      to: '',
      state: '',
      responsiblities: '',
    },
  ])
  const [educations, setEducation] = useState([
    {
      id: nanoid(),
      university: '',
      city: '',
      state: '',
      degree: '',
      month: '',
      year: '',
    },
  ])

  const [projects, setProjects] = useState([
    {
      id: nanoid(),
      title: '',
      tools: '',
      text: '',
    },
  ])
  const [skills, setSkills] = useState({
    id: nanoid(),
    languages: '',
    dev_tools: '',
    tech_framwork: '',
    other: '',
  })

  const [certifications, setCertification] = useState([
    {
      id: nanoid(),
      text: '',
    },
  ])
  // Project Methods
  function addProject() {
    setProjects((oldProject) => [
      ...oldProject,
      {
        id: nanoid(),
        languages: '',
        dev_tools: '',
        tech_framwork: '',
        other: '',
      },
    ])
  }
  const projectsArr = projects.map((project) => {
    return (
      <Project
        key={project.id}
        project={project}
        setProjects={(newProj) => setProjects(newProj)}
      />
    )
  })

  // Certification Methods
  function addCertification() {
    setCertification((oldCertification) => [
      ...oldCertification,
      {
        id: nanoid(),
        text: '',
      },
    ])
  }
  const certificationsArr = certifications.map((certification) => {
    return (
      <Certification
        key={certification.id}
        certification={certification}
        setCertification={(newCer) => setCertification(newCer)}
      />
    )
  })
  // Experience Methods
  function addExperience() {
    setExperience((oldExperience) => [
      ...oldExperience,
      {
        id: nanoid(),
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
        state: '',
        responsiblities: '',
      },
    ])
  }
  const experiencesArr = experiences.map((experience) => {
    return (
      <Experience
        key={experience.id}
        experience={experience}
        setExperience={(newExp) => setExperience(newExp)}
      />
    )
  })

  //Education Methods
  function addEducation() {
    setEducation((oldEducation) => [
      ...oldEducation,
      {
        id: nanoid(),
        university: '',
        city: '',
        state: '',
        degree: '',
        month: '',
        year: '',
      },
    ])
  }
  const educationsArr = educations.map((education) => {
    return (
      <Education
        key={education.id}
        education={education}
        setEducation={(newEd) => setEducation(newEd)}
      />
    )
  })

  return (
    <>
      <div className='container form'>
        <Personal
          personal={personal}
          setPersonal={(newPer) => setPersonal(newPer)}
        />
        <br />
        <br />
        <h1>Certification</h1>
        {certificationsArr}
        <button onClick={addCertification}>Add</button>
        <button
          onClick={() => setShowCert((val) => (val === true ? false : true))}
        >
          {showCert ? 'Remove' : 'Restore'} Column
        </button>
        <br />
        <br />
        <h1>Education</h1>
        {educationsArr}
        <button onClick={addEducation}>Add</button>
        <br />
        <br />
        <h1>Experience</h1>
        {experiencesArr}
        <button onClick={addExperience}>Add</button>
        <br />
        <br />
        <h1>Projects</h1>
        {projectsArr}
        <button onClick={addProject}>Add</button>
        <br />
        <br />
        <h1>Technical Skills</h1>
        <input
          key={nanoid()}
          type='text'
          placeholder='Languages'
          value={skills.languages}
          onChange={(e) =>
            setSkills((skills) => ({ ...skills, languages: e.target.value }))
          }
        />
        <input
          key={nanoid()}
          type='text'
          placeholder='Developer tools'
          value={skills.dev_tools}
          onChange={(e) =>
            setSkills((skills) => ({ ...skills, dev_tools: e.target.value }))
          }
        />

        <input
          key={nanoid()}
          type='text'
          placeholder='Technologies/Frameworks'
          value={skills.tech_framwork}
          onChange={(e) =>
            setSkills((skills) => ({
              ...skills,
              tech_framwork: e.target.value,
            }))
          }
        />
        <input
          key={nanoid()}
          type='text'
          placeholder='Other'
          value={skills.other}
          onChange={(e) =>
            setSkills((skills) => ({ ...skills, other: e.target.value }))
          }
        />
      </div>
      <button>Create</button>
      <Document
        personal={personal}
        experience={experiences}
        education={educations}
        project={projects}
        certification={certifications}
        skill={skills}
        showCert={showCert}
      />
    </>
  )
}

export default App
