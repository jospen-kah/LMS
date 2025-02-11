import { ArrowUpRight } from 'lucide-react';

const Benefits = () => {


    const texts = [
        ["Flexible Learning Schedule",
            "Fit your coursework around your existing commitments and obligations."],
        ["Flexible Learning Schedule",
            "Fit your coursework around your existing commitments and obligations."],
        ["Flexible Learning Schedule",
            "Fit your coursework around your existing commitments and obligations."],
        ["Flexible Learning Schedule",
            "Fit your coursework around your existing commitments and obligations."],
        ["Flexible Learning Schedule",
            "Fit your coursework around your existing commitments and obligations."],
        ["Flexible ",
            "Fit your coursework around your existing commitments and obligations."]

    ]

    return (
        <div className="content-2" id="benefits">
            <div className='benefits'>
                <h1>Benefits</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt
                    etiam eget elit id imperdiet et. Cras eu sit dignissim lorem
                    nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            </div>
            <div className="benefits-list">

                {texts.map((item, index) => (
                    <div key={index} className="item">
                        <div className="avatar"> 0{index + 1}</div>
                        <div className="title">{item[0]}</div>
                        <div className="description">{item[1]}</div>
                        <div className="arrow"><ArrowUpRight size={30} color="#70caf0" strokeWidth={1} /></div>
                    </div>
                ))}
            </div>
        </div>


    )
}
export default Benefits;