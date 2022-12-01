import React from 'react'
export default function Education(props) {
  const education = props.education
  function handleEducation(e) {
    const { name, value, type, id } = e.target
    props.setEducation((oldEducation) => {
      return oldEducation.map((education) => {
        return education.id == id
          ? { ...education, [name]: value }
          : { ...education }
      })
    })
  }
  function deleteEducation(e) {
    const { id } = e.target
    props.setEducation((oldEducation) =>
      oldEducation.filter((education) => education.id != id)
    )
  }

  return (
    <>
      <input
        id={education.id}
        name='university'
        type='text'
        placeholder='University name'
        value={education.university}
        onChange={handleEducation}
      />
      <input
        id={education.id}
        name='city'
        type='text'
        placeholder='City'
        value={education.city}
        onChange={handleEducation}
      />
      <input
        id={education.id}
        name='state'
        type='text'
        placeholder='State'
        value={education.state}
        onChange={handleEducation}
      />
      <input
        id={education.id}
        name='degree'
        type='text'
        placeholder='Degree'
        value={education.degree}
        onChange={handleEducation}
      />
      <input
        id={education.id}
        name='month'
        type='text'
        placeholder='month'
        value={education.month}
        onChange={handleEducation}
      />
      <input
        id={education.id}
        name='year'
        type='text'
        placeholder='year'
        value={education.year}
        onChange={handleEducation}
      />
      <button id={education.id} onClick={props.deleteEducation}>
        Delete
      </button>
    </>
  )
}
