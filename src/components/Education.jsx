import React from "react";
export default function Education(props){
    const education = props.education
    return (
        <>
        <input id={education.id} name='university' type="text" placeholder="University name" value={education.university} onChange={props.handleEducation} />
        <input id={education.id} name='city' type="text" placeholder="City" value={education.city} onChange={props.handleEducation}/>
        <input id={education.id} name='degree' type="text" placeholder="Degree" value={education.degree} onChange={props.handleEducation}/>
        <input id={education.id} name='subject' type="text" placeholder="Subject" value={education.subject} onChange={props.handleEducation}/>
        <input id={education.id} name='from' type="text" placeholder="From" value={education.from} onChange={props.handleEducation}/>
        <input id={education.id} name ='to' type="text" placeholder="To" value={education.to} onChange={props.handleEducation}/>
        <button id={education.id} onClick={props.deleteEducation}>Delete</button>
        </>
    )
}