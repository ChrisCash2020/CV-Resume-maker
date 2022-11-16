import React from "react";
export default function Personal(props){
    const personal = props.personal;
    return (
        <div>
    <h1>Personal</h1>
<input  type="text" name='firstName' placeholder="First Name" value={personal.firstName} onChange={props.handlePersonal} />
<input type="text" name='lastName' placeholder="Last Name" value={personal.lastName} onChange={props.handlePersonal}/>
<input type="text" name='title' placeholder="Title" value={personal.title} onChange={props.handlePersonal}/>
<label>
<input name='photo' style={{width: '100%'}} type="file" accept="image/png, image/jpeg" onChange={props.handlePersonal}/>
</label>
<input name='address' type="text" placeholder="Address" value={personal.address} onChange={props.handlePersonal}/>
<input name='phone' type="tel" placeholder="Phone number" value={personal.phone} onChange={props.handlePersonal}/>
<input name='email' type="email" placeholder="Email" value={personal.email} onChange={props.handlePersonal}/>
<input name='desc' placeholder="Description" value={personal.desc} onChange={props.handlePersonal}/>
        </div>
    )
}