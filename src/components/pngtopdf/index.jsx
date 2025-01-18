// filepath: /D:/projetos/projetos/JavaScript/react/potfolio-react-v-2/src/components/pngtopdf/index.jsx
import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import './styles.css';

const CreatePdf = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  };
  
  const createPdf = async () => {
    const pdfDoc = await PDFDocument.create();

    for (const file of files) {
      const img = await loadImage(URL.createObjectURL(file));
      const page = pdfDoc.addPage([img.width, img.height]);
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const imgData = canvas.toDataURL('image/png').split(',')[1];
      const pngImage = await pdfDoc.embedPng(imgData);
      page.drawImage(pngImage, {
        x: 0,
        y: 0,
        width: img.width,
        height: img.height,
      });
    }

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.pdf';
    a.click();
  };

  return (
    <div className="create-pdf-container">
            <h1>Criar PNG para PDF</h1>
      <p>Selecione arquivos PNG para criar um PDF</p>
      <i class="fas fa-h1    "></i>

      <h1>Create PNG for PDF</h1>
      <p>Select PNG files to create a PDF</p>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={createPdf}>Create PDF</button>
    </div>
  );
};

export default CreatePdf;