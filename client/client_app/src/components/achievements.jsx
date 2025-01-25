import {Crown, Club, Medal, Handshake} from 'lucide-react'
const Achievements = () => {
    const key1 = <Crown strokeWidth={3} color="rgb(25 25 25)" fill='rgb(25 25 25)' size={18}/>;
    const key2 = <Club strokeWidth={3} color="rgb(25 25 25)" fill='rgb(25 25 25)' size={18}/>;
    const key3 = <Medal strokeWidth={2} color="rgb(25 25 25)"  size={18}/>;
    const key4 = <Handshake strokeWidth={2} color="rgb(25 25 25)"  size={18}/>;
    const text = [
            {
                icon: key1, 
                title: "Trusted By Thousand", 
                description: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals."
            },
            {
                icon: key2, 
                title: "Positive Student Feedback", 
                description: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials."
            },
            {
                icon: key3, 
                title: "Award-Winning Courses", 
                description: "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies."
            },
            {
                icon: key4, 
                title: "Industry Partnerships", 
                description: "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies"
            }
    ]
    return (
        <div className="achievements">
            <div className="achievement-1">
                <h2>Achievements</h2>
                <p>Our commitment to excellence has led us to achieve
                    significant milestones along our journey.
                    Here are some of our notable achievements</p>
            </div>
            <div className="achievement-2">

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

        </div>
    )
}

export default Achievements;