import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CertificateDownload = () => {
  const certificateRef = useRef(null);

  const handleDownload = () => {
    const input = certificateRef.current;
    if (!input) return;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape");
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("certificate.pdf");
    });
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Certificate Design */}
      <div ref={certificateRef} className="bg-white border rounded-lg shadow-lg p-8 w-[800px] text-center">
        <h1 className="">Certificate of Completion</h1>
        <p className="text-lg mt-2">This certifies that</p>
        <h2 className="text-2xl font-semibold mt-2">John Doe</h2>
        <p className="text-lg mt-2">has successfully completed the course</p>
        <h3 className="text-xl font-medium mt-2">"React for Beginners"</h3>
        <p className="mt-4">Issued on: {new Date().toLocaleDateString()}</p>
      </div>

      {/* Download Button */}
      <button 
        onClick={handleDownload} 
        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        Download Certificate
      </button>
    </div>
  );
};

export default CertificateDownload;
