import React, { Component } from 'react'
import {Grid,Cell}from 'react-mdl';
import Profile from '../image/profile.jpg';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
class Resume extends Component {
    render() {
        return (
            <div>
              <Grid>
              <Cell col={4}>
                  <div style={{textAlign:'center'}}>
                  <img src={Profile}alt="me"style={{height:'250px'}}/>
                  
                  </div>
                  <h2 style={{paddingTop:'2rem'}}>Diana Iminza</h2>
                  <h4 style={{color:'grey'}}>Full Stack Web Developer</h4>
                  <hr style={{borderTop:'4px solid black',width:'55%'}}/>
                  <p>Highly skilled .NET Developer with 2 years of experience seeking a challenging position to utilize my
expertise in developing and maintaining software applications. Proficient in various programming
languages and frameworks, I am committed to delivering high-quality code and innovative solutions. A
proactive team player with excellent problem-solving abilities and a strong attention to detail.
</p>
                  <hr style={{borderTop:'4px solid black',width:'55%'}}/>
            <h5>Phone</h5>
            <p>(254) 728131955</p>
            <h5>Email</h5>
            <p>dianaiminza.99@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              </Cell>
              <Cell className="resume-right-col"col={8}>
              <h2>Education</h2>


<Education
  startYear={2017}
  endYear={2021}
  schoolName="Jomo Kenyatta University of Science and Technology"
  schoolDescription="I graduated with a Bachelor of Science in Information Technology."
   />

    <hr style={{borderTop: '3px solid #e22947'}} />

  <h2>Experience</h2>

<Experience
  startYear={2019}
  endYear={2020}
  jobName="First Job"
  jobDescription="Computer Packages Tutor"
  />

<Experience
    startYear={2020}
    endYear={2021}
    jobName="Second Job"
    jobDescription="Web development mentor at MOI University and web track lead at MMUST"
    
>
    <ul>
        <li>Conducted training sessions on web development for students at MOI University.</li>
        <li>Mentored students individually, providing guidance and support in their web development projects.</li>
        <li>Developed a comprehensive curriculum for the web development track at MMUST, including course materials and project assignments.</li>
        <li>Organized and led workshops and seminars to enhance students' understanding of advanced web development concepts.</li>
        <li>Collaborated with other faculty members to design and implement effective teaching strategies for the web development track.</li>
        <li>Provided technical assistance and troubleshooting support to students facing challenges in their web development coursework.</li>
        <li>Evaluated student performance and provided constructive feedback to help them improve their skills and understanding of web development.</li>
        <li>Organized and supervised web development projects, ensuring students adhered to best practices and industry standards.</li>
        <li>Actively participated in departmental meetings and contributed to discussions on improving the overall learning experience for students.</li>
    </ul>
    </Experience>
    <Experience
    startYear={"February 2021"}
    endYear={"May 2021"}
    jobName="Third Job"
    jobDescription="Web development intern at LITTLE APP"
>
    <ul>
        <li>Conducted research on the latest web development technologies and best practices.</li>
        <li>Assisted in the design and implementation of user interfaces for web applications.</li>
        <li>Tested and debugged code to ensure the functionality and performance of web applications.</li>
        <li>Contributed to the documentation of code and development processes for future reference.</li>
        <li>Collaborated with team members to resolve technical issues and implement solutions effectively.</li>
        <li>Demonstrated a willingness to learn and adapt to new technologies and development techniques.</li>
        <li>Engaged in training sessions and workshops to enhance understanding of web development principles.</li>
    </ul>
</Experience>

<Experience
    startYear={"February 2022"}
    endYear={"recent"}
    jobName="Fourth Job"
    jobDescription="NET Developer at Ronford Digital Limited"
>
    <ul>
        <li>Participated in the design, development, and testing of .NET applications.</li>
        <li>Collaborated with team members to identify and address technical challenges in the development process.</li>
        <li>Contributed to the enhancement and maintenance of existing .NET applications.</li>
        <li>Assisted in the troubleshooting and resolution of issues related to .NET application functionality.</li>
        <li>Conducted code reviews and provided feedback to improve code quality and maintainability.</li>
        <li>Implemented security measures and best practices to ensure the integrity and safety of .NET applications.</li>
        <li>Engaged in regular communication with stakeholders to understand their requirements and provide effective solutions.</li>
        <li>Researched and implemented new technologies and tools to optimize .NET application development processes.</li>
        <li>Documented technical specifications and system functionalities for future reference and knowledge sharing.</li>
    </ul>
</Experience>


<Experience
    startYear={"April 2023"}
    endYear={"August 2023"}
    jobName="Fifth Job"
    jobDescription="Software Developer at Osomobegbe Global Ventures Limited"
>
    <ul>
        <li>Participated in the design and implementation of software solutions for specific business needs.</li>
        <li>Collaborated with team members to develop and maintain software applications.</li>
        <li>Contributed to the planning and execution of software development projects.</li>
        <li>Tested software applications and performed debugging to ensure high performance and reliability.</li>
        <li>Assisted in the documentation of software development processes, including requirements and specifications.</li>
        <li>Provided technical support and troubleshooting for software-related issues.</li>
        <li>Engaged in regular meetings to discuss project progress and address any challenges or roadblocks.</li>
        <li>Researched and implemented new technologies and methodologies to improve software development practices.</li>
        <li>Collaborated with clients to understand their requirements and provide customized software solutions.</li>
    </ul>
</Experience>

  <hr style={{borderTop: '3px solid #e22947'}} />
  <h2>Skills</h2>
  <Skills
    skill="C#"
    progress={100}
    />

<Skills
    skill=".NET"
    progress={100}
    />
    <Skills
      skill="HTML/CSS"
      progress={100}
      />
      <Skills
        skill="NodeJS"
        progress={50}
        />
        <Skills
          skill="React"
          progress={80}
          />

              </Cell>

              </Grid> 
            </div>
        )
    }
}
export default Resume;
