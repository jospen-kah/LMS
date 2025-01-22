import { Zap } from 'lucide-react';
import  Benefits from  '../components/benefits';
import Courses from '../components/courses';
import Testimonial from '../components/testimonial';


// 
const Home = () => {

    
    return (
        <div className="home">
            <div className=" content-1">
                <div className="quotes">
                    <div className="quote-1">
                        <Zap fill size={20} color="#000" className="zap" />
                        <h2><span>Unlock</span> Your Creative Potential</h2>
                    </div>
                    <div className="quote-2">
                        <p>With Online Design and Development Courses</p>
                    </div>
                    <div className="quote-3">
                        <p>Learning from industry expert</p>
                    </div>
                    <div className="explore">
                        <p>Explore Courses</p>
                    </div>
                </div>
                <div className="bg-image">
                    <img src="https://media.istockphoto.com/id/1059510610/vector/it-communication-e-learning-internet-network-as-knowledge-base.jpg?s=612x612&w=0&k=20&c=QEyHx6JnZleLmW9lYgpzvLv765rizr__5zwwKylo300=" alt="img" />
                </div>
            </div>
            
                < Benefits />
                < Courses />
                < Testimonial />
            

        </div>
    )
}
export default Home;






