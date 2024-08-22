import React from 'react'
import img from '../Header/about-img.jpeg'
import './About.css'

const About = () => {
  return (
    <div className='AboutUs'>
        
        <img className='round-img'src={img} alt="About-img" />
        

            <div className='About-right'>
            <h1>About Us</h1>
            <p>A non-governmental organization (NGO) (see spelling differences) is an organization that generally is formed independent from government.  They are typically nonprofit entities, and many of them are active in humanitarianism or the social sciences; they can also include clubs and associations that provide services to their members and others.NGOs are social and political organizations that work independently from governments. Most NGOs are nonprofits, but not all nonprofits are NGOs. While it’s difficult to count how many NGOs exist today, 2021 data from The U.S. Department of State estimates there are 1.5 million NGOs working in the US alone. Which ones are the biggest? This article describes 15 influential NGOs located in places like the United States, Europe, and South Asia.</p>
            </div>
        </div>
    
  )
}

export default About