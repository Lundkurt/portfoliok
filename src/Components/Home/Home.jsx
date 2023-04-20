import React from 'react'
import { Button } from 'react-bootstrap'

function Home() {
  return (
    <>
    <div className='d-flex flex-column flex-md-row justify-content-center'>
    <div className='home-content flex-1'>
      <h1>Hi there!</h1>
      <p>Welcome to my portfolio! My name is Kurt André Lund, and I'm a 27-year-old programmer based in Sandnes, Norway. My journey into the world of programming began when I decided to take the Noroff Front-end Developer course. Since then, I've developed a strong passion for coding and have expanded my skillset to include back-end development, with a focus on Java.</p>

      <p>I have the most experience in front-end development, and I'm proficient in HTML, CSS, and JavaScript. However, I'm always eager to learn and explore new technologies and programming languages to enhance my skills as a developer. I'm a problem solver at heart and enjoy finding creative solutions to complex challenges.</p>

      <p>As a developer, I'm committed to delivering high-quality work that meets my clients' needs and exceeds their expectations. I believe that good design is as important as good functionality and always strive to create visually appealing and user-friendly websites that are easy to navigate and interact with.</p>

      <p>Please take a look at some examples of my work and projects on this portfolio, and feel free to contact me if you have any questions or would like to work together. Thank you for your interest!</p>

    <Button className='cta-git' href='https://github.com/Lundkurt'>My Github</Button>

    </div>
    <div className='flex-1 d-flex justify-content-center align-items-center'>
      <img className='profile-img' src="./images/profile.jpg" alt="Profile" />
    </div>
    </div>
    </>
  )
}

export default Home
