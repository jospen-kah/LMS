

const Testimonial = () => {
    const text = [
        ["The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
             "data:image/jpeg;base64,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", 
             "Bossadi Zenith"]
    ]

    return (
        <div id="testimonial" className="content-4">
            <h1>Testimonial</h1>

            <div className="content-card">
                {text.map((item, index) => (
                    <div key={index} className="card">
                        <div className="quote">
                            <p>{item[0]}</p>
                        </div>
                        <div className="info">
                            <div className="author">
                                <img src={item[1]} alt="author" />
                                <p>{item[2]}</p>
                            </div>
                            <button>Read Full story</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial;