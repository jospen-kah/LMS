const Achievements = () => {
    const text = [
        ["text1", "text2", "text3"],
        ["text4", "text5", "text6"],
        ["text7", "text8", "text9"],
        ["text10", "text11", "text12"],
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
                                {item[0]}
                            </div>
                            <div className="title">
                                {item[1]}
                            </div>
                            <div className="description">
                                {item[2]}
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Achievements;