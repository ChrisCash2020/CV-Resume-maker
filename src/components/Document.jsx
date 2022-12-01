import React from 'react'
export default function Document(props) {
  const experiences = props.experience.map((experience) => {
    return (
      <div key={experience.id}>
        <div className='divide'>
          <p className='bold'>
            {experience.company != '' ? experience.company : 'Company'}
          </p>
          <p className='bold'>
            {experience.from != '' ? experience.from : 'From'}
            {' - '}
            {experience.to != '' ? experience.to : 'To'}
          </p>
        </div>
        <div className='divide'>
          <small>
            {experience.position != '' ? experience.position : 'Position'}
          </small>
          <small>
            {experience.city != '' ? experience.city : 'City'}, State
          </small>
        </div>
        <pre>{experience.responsiblities}</pre>
      </div>
    )
  })
  const educations = props.education.map((education) => {
    return (
      <div key={education.id}>
        <div className='divide'>
          <p className='bold'>
            {education.university != ''
              ? education.university
              : 'University name'}
          </p>
          <p className='bold'>
            Expected Graduation:{' '}
            {education.month != '' ? education.month : 'Month'}{' '}
            {education.year != '' ? education.year : 'Year'}
          </p>
        </div>
        <div className='divide'>
          <small>{education.degree != '' ? education.degree : 'Degree'}</small>
          <small>
            {education.city != '' ? education.city : 'City'},{' '}
            {education.state != '' ? education.state : 'State'}
          </small>
        </div>
      </div>
    )
  })
  const projects = props.project.map((item) => {
    return (
      <div key={item.id}>
        <div className='divide'>
          <p className='bold'>
            {item.title != '' ? item.title : 'Project Title'}
            <small className='special'>
              {item.tools != '' ? item.tools : 'tools...'}
            </small>
          </p>
        </div>
        <pre>{item.text}</pre>
      </div>
    )
  })
  const certifications = props.certification.map((item) => (
    <small key={item.id}>{item.text || 'Certification'}</small>
  ))
  const skills = props.skill
  return (
    <>
      <div className='document'>
        <div className='header'>
          <h2 className='full-name'>
            {props.personal.firstName || 'First'}{' '}
            {props.personal.lastName || 'Last'}
          </h2>
          <ul className='header-info'>
            <li>
              <a href={props.personal.email}>
                {props.personal.email || 'fake@email.com'}
              </a>
            </li>
            <li>
              <a href={props.personal.portfolio}>website</a>
            </li>
            <li>
              <a href={props.personal.github}>github.com</a>
            </li>
          </ul>
        </div>
        {props.showCert ? (
          <div className='container'>
            <p className='bolder'>Certification</p>
            <span className='underline'></span>
            <ul className='cert-info'>{certifications}</ul>
          </div>
        ) : (
          <></>
        )}
        <div className='container'>
          <p className='bolder'>Education</p>
          <span className='underline'></span>
          {educations}
        </div>
        <div className='container'>
          <p className='bolder'>Experience</p>
          <span className='underline'></span>
          {experiences}
        </div>
        <div className='container'>
          <p className='bolder'>Projects</p>
          <span className='underline'></span>
          {projects}
        </div>
        <div className='container'>
          <p className='bolder'>Technical Skils</p>

          <p>
            <b>Languages: </b> <small>{skills.languages}</small>
          </p>
          <p>
            <b>Developer Tools: </b> <small>{skills.dev_tools}</small>
          </p>
          <p>
            <b>Technologies/Frameworks: </b>{' '}
            <small>{skills.tech_framwork}</small>
          </p>
          <p>
            <b>Other: </b> <small>{skills.other}</small>
          </p>
        </div>
      </div>
    </>
  )
}
