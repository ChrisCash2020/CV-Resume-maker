import React from "react";
export default function Experience(props){
    const experience = props.experience
    return (
        <>
            <input id={experience.id} name="position" type="text" placeholder="Position" value={experience.position} onChange={props.handleExperience} />
            <input id={experience.id} name="company" type="text" placeholder="Company" value={experience.company} onChange={props.handleExperience} />
            <input id={experience.id} name="city" type="text" placeholder="City" value={experience.city} onChange={props.handleExperience} />
            <input id={experience.id} name="from" type="text" placeholder="From" value={experience.from} onChange={props.handleExperience} />
            <input id={experience.id} name="to" type="text" placeholder="To" value={experience.to} onChange={props.handleExperience} />
            <button id={experience.id} onClick={props.deleteExperience}>Delete</button>
        </>
    )
}