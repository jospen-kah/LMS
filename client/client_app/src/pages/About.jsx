import Skills from '../components/skills';
import Achievement from '../components/achievements';    
import Goals  from '../components/goals';
import './About.css'


const About= () =>{
    return(
        <diV className="about">
            <Skills />
            <Achievement  />
            <Goals />
        </diV>
    )
}

export default About;