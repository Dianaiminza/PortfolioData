import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'
import Profile from '../image/profile.jpg';
 class Landingpage extends Component {
    render() {
        return (
            <div style={{width:'100%',margin:'auto'}}>
               <Grid className="landing-grid">
               <Cell col={12}>
              <img src={Profile}alt="me" className="profile"/>
              <div className="barner-text">
<h1>Full Stack Web Developer</h1>
<hr/>
<p>HTML/CSS|Bootstrap|NodeJs|C#|.NET|MudBalzor|</p>
<div className="social-links">
{/*github*/}
<a href="https://github.com/Dianaiminza"rel="noopener noreferrer"target="_blank">
    <i className="fa fa-github-square"aria-hidden="true"/>
</a>
{/*linkedln*/}
<a href="https://www.linkedin.com/in/diana-iminza/"rel="noopener noreferrer"target="_blank">
    <i className="fa fa-linkedin-square"aria-hidden="true"/>
</a>
</div>
              </div>
              </Cell>
               </Grid> 
            </div>
        )
    }
}
export default Landingpage;