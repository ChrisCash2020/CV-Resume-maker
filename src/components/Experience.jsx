import { nanoid } from 'nanoid'
import React, { useState } from 'react'
export default function Experience(props) {
  const bullet = '\u2022'
  const bulletWithSpace = `${bullet} `
  const enter = 13
  const experience = props.experience
  function handleExperience(e) {
    const { name, value, id } = e.target
    props.setExperience((oldExperience) => {
      return oldExperience.map((experience) => {
        return experience.id == id
          ? { ...experience, [name]: value }
          : { ...experience }
      })
    })
  }
  function deleteExperience(e) {
    const { id } = e.target
    props.setExperience((oldExperience) =>
      oldExperience.filter((experience) => experience.id != id)
    )
  }

  return (
    <>
      <input
        id={experience.id}
        name='position'
        type='text'
        placeholder='Position'
        value={experience.position}
        onChange={handleExperience}
      />
      <input
        id={experience.id}
        name='company'
        type='text'
        placeholder='Company'
        value={experience.company}
        onChange={handleExperience}
      />
      <input
        id={experience.id}
        name='city'
        type='text'
        placeholder='City'
        value={experience.city}
        onChange={handleExperience}
      />
      <input
        id={experience.id}
        name='state'
        type='text'
        placeholder='State'
        value={experience.state}
        onChange={handleExperience}
      />
      <input
        id={experience.id}
        name='from'
        type='text'
        placeholder='From'
        value={experience.from}
        onChange={handleExperience}
      />
      <input
        id={experience.id}
        name='to'
        type='text'
        placeholder='To'
        value={experience.to}
        onChange={handleExperience}
      />
      <textarea
        name='responsiblities'
        id={experience.id}
        cols='30'
        rows='10'
        placeholder='Responisbilities'
        value={experience.responsiblities}
        onChange={handleExperience}
      ></textarea>
      <button id={experience.id} onClick={deleteExperience}>
        Delete
      </button>
    </>
  )
}
