import React from 'react'
export default function Project(props) {
  const project = props.project
  function handleProjects(e) {
    const { name, value, id } = e.target
    props.setProjects((oldProjects) => {
      return oldProjects.map((project) => {
        return project.id == id ? { ...project, [name]: value } : { ...project }
      })
    })
  }
  function deleteProjects(e) {
    const { id } = e.target
    props.setProjects((oldProjects) =>
      oldProjects.filter((project) => project.id != id)
    )
  }
  return (
    <>
      <input
        id={project.id}
        name='title'
        type='text'
        placeholder='Project Title'
        value={project.title}
        onChange={handleProjects}
      />
      <input
        id={project.id}
        name='tools'
        type='text'
        placeholder='Tools'
        value={project.tools}
        onChange={handleProjects}
      />
      <textarea
        id={project.id}
        name='text'
        type='text'
        cols='30'
        rows='10'
        placeholder='Text'
        value={project.text}
        onChange={handleProjects}
      ></textarea>
      <button id={project.id} onClick={deleteProjects}>
        Delete
      </button>
    </>
  )
}
