import { Zap } from 'lucide-react'


// 
const Home = () => {

    const texts = [
        ["I am the true son", "Hello", "food"],
        ["I am the true son", "Hello", "food"],
        ["I am the true son", "Hello", "food"],
        ["I am the true son", "Hello", "food"],
        ["I am the true son", "Hello", "food"],
        ["I am the true son", "Hello", "food"]
    ]
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
            <div className="content-2">
                <div className='benefits'>
                    <h3>Benefits</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt
                        etiam eget elit id imperdiet et. Cras eu sit dignissim lorem
                        nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                </div>
                <div className="benefits-list">
                    {Array.from({ length: texts.length }).map((_, index) => (
                        <div key={index} className="item">
                            <div className="avatar"> {index + 1}</div>
                            <div className="text-list">
                                {texts[index].map((text, textIndex) => (
                                    <p key={textIndex} className="text-item">{text}</p>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
export default Home;






