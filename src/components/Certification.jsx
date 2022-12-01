import React from 'react'
export default function Certification(props) {
  const certification = props.certification
  function handleCertification(e) {
    const { name, value, id } = e.target
    props.setCertification((oldCertification) => {
      return oldCertification.map((certification) => {
        return certification.id == id
          ? { ...certification, [name]: value }
          : { ...certification }
      })
    })
  }
  function deleteCertification(e) {
    const { id } = e.target
    props.setCertification((oldCertification) =>
      oldCertification.filter((certification) => certification.id != id)
    )
  }
  return (
    <>
      <input
        id={certification.id}
        name='text'
        type='text'
        placeholder='Certification'
        value={certification.text}
        onChange={handleCertification}
      />
      <button id={certification.id} onClick={deleteCertification}>
        Delete
      </button>
    </>
  )
}
