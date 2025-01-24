import {Crown, Club, Medal, Handshake} from 'lucide-react'


const Goals = () => {

    const key1 = <Crown strokeWidth={3} color="#0095FF" fill='#0095FF' size={18}/>;
    const key2 = <Club strokeWidth={3} color="#0095FF" fill='#0095FF' size={18}/>;
    const key3 = <Medal strokeWidth={2} color="#0095FF"  size={18}/>;
    const key4 = <Handshake strokeWidth={2} color="#0095FF"  size={18}/>;
    const text = [
            {
                icon: key1, 
                title: "Provide Practical Skills", 
                description: "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field."
            },
            {
                icon: key2, 
                title: "Foster Creative Problem-Solving", 
                description: "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation."
            },
            {
                icon: key3, 
                title: "Promote Collaboration and Community", 
                description: "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together."
            },
            {
                icon: key4, 
                title: "Stay Ahead of the Curve", 
                description: "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills."
            }
        ]

    return (
       
            <div className="goals">
            <div className="goal-1">
                <h2>Our Goals</h2>
                <p>At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
                <br/>Through our carefully crafted courses, we aim to</p>
            </div>
            <div className="goal-2">

                {
                    text.map((item, index) => (
                        <div key={index} className="card">
                            <div className="icon">
                                {item.icon}
                            </div>
                            <div className="title">
                                {item.title}
                            </div>
                            <div className="description">
                                {item.description}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='together'>
                <div>
                    <h2>
                        <span>Together</span>, Let&rsquo;s shape the future of digital innovation
                    </h2>
                    <p>Join us on this exciting learning journey and unlock your potential in design and development.</p>
                </div>
                <button>Join Now</button>
            </div>
        
        </div>
    )
}

export default Goals