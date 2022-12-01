import React from 'react'
export default function Personal(props) {
  const personal = props.personal
  function handlePersonal(e) {
    const { name, value, type } = e.target
    props.setPersonal((oldPersonal) => ({ ...oldPersonal, [name]: value }))
  }
  return (
    <>
      <h1>Personal</h1>
      <input
        type='text'
        name='firstName'
        placeholder='First Name'
        value={personal.firstName}
        onChange={handlePersonal}
      />
      <input
        type='text'
        name='lastName'
        placeholder='Last Name'
        value={personal.lastName}
        onChange={handlePersonal}
      />
      <input
        name='email'
        type='email'
        placeholder='Email'
        value={personal.email}
        onChange={handlePersonal}
      />
      <input
        type='text'
        name='github'
        placeholder='GitHub Link'
        value={personal.github}
        onChange={handlePersonal}
      />

      <input
        name='portfolio'
        placeholder='Portfolio or Website'
        value={personal.portfolio}
        onChange={handlePersonal}
      />
    </>
  )
}
