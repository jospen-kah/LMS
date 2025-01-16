
// 
const Home = () => {
    return (
        <div className="home">
            <div className="quote">
                <img src="https://www.life-global.org/_next/image?url=https%3A%2F%2Fhplife.blob.core.windows.net%2Fcms%2F2020%2F04%2FAboutUsHomePage2023.png&w=1920&q=75" alt="lady with phone" />
                <div className="quote-content">
                    <h2>Improve Your Business Skills With Free Courses From TIC </h2>
                    <div className="sub-content">
                        <div className="sub-content-1">
                            <img src="https://www.life-global.org/_next/image?url=https%3A%2F%2Fhplife.blob.core.windows.net%2Fcms%2F2020%2F09%2Ficon-learn1.png&w=96&q=75" alt="icon" />

                            <p>Learn in-demand skills free of charge.
                                Including marketing, finance, digital business skills, and more.</p>
                        </div>
                        <div className="sub-content-2">
                            <img src="https://www.life-global.org/_next/image?url=https%3A%2F%2Fhplife.blob.core.windows.net%2Fcms%2F2020%2F09%2Ficon-certificate-1.png&w=96&q=75" alt="certificate" />
                            <p>Learn in-demand skills free of charge.
                                Including marketing, finance, digital business skills, and more.</p>
                        </div>

                    </div>
                    <a href="/about">More about LMS</a>
                </div>
            </div>
            <div className="testimonials">
                <div className="test-1">
                    <p>Knowledge is your superpower invest in
                        learning today to shape a brighter tomorrow!</p>
                </div>
                <div className="test-2">
                    <div className="sub-test-1">
                        <h1>50+</h1>
                        <p>New learners</p>
                    </div>
                    <div className="sub-test-2">
                        <h1>5+</h1>
                        <p>Regions</p>
                    </div>
                </div>
            </div>
            <div className="real">
                <img src="data:image/jpeg;base64,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" alt="bill" />
                <div className="real-result">
                    <h2>Real People.Real Result</h2>
                    <p>“Incorporating leadership principles into my work at the
                        TIC Foundation has allowed me to mentor aspiring leaders,
                        offering them practical insights into effective leadership,
                        strategic thinking, and community impact. This approach
                        supports my goal of empowering individuals to become
                        confident, compassionate leaders who can drive positive
                        change in their communities.”

                    </p>
                </div>
            </div>
            <div className="partners">
                <h1>Our Partners</h1>
                <div>
                    <div className="partner"></div>
                    <div className="partner"></div>
                    <div className="partner"></div>
                    <div className="partner"></div>

                </div>
            </div>
        </div>
    )

}
export default Home;