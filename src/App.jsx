import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Personal from './components/Personal'
import Experience from './components/Experience'
import Education from './components/Education'
import Document from './components/Document'
import { nanoid } from 'nanoid'
function App() {

  const [personal, setPersonal] = useState(
  {
    firstName: '',
    lastName: '',
    title: '',
    photo: '',
    address: '',
    phone: '',
    email: '',
    desc: '',
  })
  const [experiences, setExperience] = useState([
    {
    id: nanoid(),
    position: '',
    company: '',
    city: '',
    from: '',
    to: ''
  }
])
  const [educations, setEducation] = useState([
    {
    id: nanoid(),
    university: '',
    city: '',
    degree: '',
    from: '',
    to: ''
  }
])
//Personal Methods
  function handlePersonalFile(e){
    const { name } = e.target
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      setPersonal((oldPersonal) => ({...oldPersonal, [name]: reader.result }))
    }
    reader.readAsDataURL(file)
  }

  function handlePersonal(e){
    const {name, value, type} = e.target
    if(type === 'file')return handlePersonalFile(e)
    else setPersonal(oldPersonal => ({...oldPersonal, [name]: value }) )
  }

// Experience Methods
  function handleExperience(e){
    const {name, value, type, id} = e.target
   setExperience(oldExperience =>{
    return oldExperience.map(experience =>{
     return experience.id == id ? {...experience, [name]: value} : {...experience};
    })
   })
  }
  function deleteExperience(e){
    const {id} = e.target
    setExperience(oldExperience => oldExperience.filter(experience => experience.id != id))
  }
  function addExperience(){
    setExperience(oldExperience => [...oldExperience, {
      id: nanoid(),
      position: '',
      company: '',
      city: '',
      from: '',
      to: ''
    }])
  }
  const experiencesArr = experiences.map(experience => {
  return (
  <Experience 
    key={experience.id} 
    experience={experience} 
    deleteExperience={deleteExperience} 
    handleExperience={handleExperience}
  />
  )
})

//Education Methods
  function handleEducation(e){
    const {name, value, type, id} = e.target
    setEducation(oldEducation =>{
     return oldEducation.map(education =>{
      return education.id == id ? {...education, [name]: value} : {...education};
     })
    })
  }
  function deleteEducation(e){
    const {id} = e.target
    setEducation(oldEducation => oldEducation.filter(education => education.id != id))
  }
  function addEducation(){
    setEducation(oldEducation => [...oldEducation,  {
      id: nanoid(),
      university: '',
      city: '',
      degree: '',
      from: '',
      to: ''
    }])
  }
  const educationsArr = educations.map(education => {
 return (
 <Education 
 key={education.id}
 education={education}
 deleteEducation={deleteEducation} 
 handleEducation={handleEducation} 
 />
 )
})


  return (
    <>
  <Personal personal={personal} handlePersonal={handlePersonal}/>
  <h1>Experience</h1>
  {experiencesArr}
  <button onClick={addExperience}>Add</button>
  <h1>Education</h1>
  {educationsArr}
  <button onClick={addEducation}>Add</button>
  <Document personal={personal} experience={experiences} education={educations} />
    </>
  )
}

export default App
