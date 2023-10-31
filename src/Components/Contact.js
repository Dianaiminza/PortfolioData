import React, { Component } from 'react'
import {Grid,Cell,List,ListItem,ListItemContent}from 'react-mdl';
import Profile from '../image/profile.jpg';
 class Contact extends Component {
    render() {
        return (
           <div className="contact-body">
           <Grid className="contact-grid">
           <Cell col={6}>
           <h2>Diana Iminza</h2>
           <img src={Profile}alt="me"style={{height:'250px'}}/>
           <p style={{width:'800',margin:'auto',paddingTop:'1cm'}}>A Full Stack Web Developer.I speak API's fluently, involved in designing, building, testing and deploying API's in NodeJs and C#.</p>
           </Cell>
           <Cell col={6}>

               <h2>Contact Me</h2>
               <hr/>
               <div className="contact-list">
               <List>
  <ListItem>
    <ListItemContent style={{fontSize:'40px',fontFamily:'Antom'}}>
    <i className="fa fa-phone-square"aria-hidden="true"/>
    {254}728131955
    </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize:'40px',fontFamily:'Antom'}}>
     <i className="fa fa-envelope"aria-hidden="true"/>
    dianaiminza.99@gmail.com  
    </ListItemContent>
  </ListItem>
  
</List>

</div>
           </Cell>

           </Grid>
           
           </div>
        )
    }
}
export default Contact;