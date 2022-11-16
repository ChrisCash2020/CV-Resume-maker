import React from "react";
export default function Document(props){

    const experiences = props.experience.map(experience => {
        return (
            <div key={experience.id}>
                <p>{experience.position != ''? experience.position:  'Position'}</p>
                <p>{experience.company != '' ? experience.company :  'Company'}</p>
                <p>{experience.city !='' ? experience.city :  'City' }</p>
                <p>{experience.from != '' ? experience.from :  'From'}</p>
                <p>{experience.to != '' ? experience.to :  'To'}</p>  
            </div>
        )
    })
    const educations = props.education.map(education => {
        return (
            <div key={education.id}>
                <p>{education.university != '' ? education.university:  'University name'}</p>
                <p>{education.city != '' ? education.city :  'City'}</p>
                <p>{education.degree != '' ? education.degree :  'Degree' }</p>
                <p>{education.subject != '' ? education.subject :  'Subject'}</p>
                <p>{education.from != '' ? education.from :  'From'}</p>
                <p>{education.to != '' ? education.to :  'To'}</p>
            </div>
        )
    })
    return (
        <>
        <h1>{props.personal.firstName} {props.personal.lastName}</h1>
        <h1>{props.personal.title != '' ? props.personal.title : 'Title'}</h1>
        <h1>Description</h1>
        <p>{props.personal.desc != ''? props.personal.desc : '...'}</p>
        <h1>Experience</h1>
        {experiences}
        <h1>Education</h1>
        {educations}
        <h1>Personal Details</h1>
        <p>{props.personal.address != ''? props.personal.address : 'Address'}</p>
        <p>{props.personal.phone != '' ? props.personal.phone  : 'Phone Number'}</p>
        <p>{props.personal.email !='' ? props.personal.email  : 'Email'}</p>
        <img src={props.personal.photo} alt='image'/>
        </>
    )
}