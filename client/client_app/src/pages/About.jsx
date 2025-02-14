import Skills from '../components/skills';
import Achievement from '../components/achievements';    
import Goals  from '../components/goals';
import './About.css'


const About= () =>{
    return(
        <div className="about">
            <Skills />
            <Achievement  />
            <Goals />
        </div>
    )
}

export default About;