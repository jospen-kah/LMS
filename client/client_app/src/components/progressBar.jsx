import React, { useState } from 'react';
import './progressBar.css';

function ProgressBar() {
       const [progress, setProgress] = useState(44); // Set initial progress value
    
        // Function to determine the color class
        const getColorClass = (percent) => {
            if (percent >= 0 && percent <= 25) return "red";
            if (percent >= 26 && percent <= 50) return "yellow";
            if (percent >= 51 && percent <= 75) return "greenish-yellow";
            return "green";
        };
  return (
    <div>
       {/* Progress Bar */}
       <div className="progress">
                <div className="progress-percentage">
                    <p>Progress</p>
                    <p>{progress}%</p>
                </div>
                <div className="progress-bar-container">
                    <div
                        className={`progress-bar ${getColorClass(progress)}`}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
    </div>
  )
}

export default ProgressBar;
