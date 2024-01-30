import jsPDF, { type HTMLWorker } from 'jspdf';

export const useHTMLToPDF = (
  filename: string,
  html: string | HTMLElement,
): HTMLWorker => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    putOnlyUsedFonts: true,
    floatPrecision: 4,
    compress: true,
  });

  return doc.html(html, {
    callback: function (doc) {
      doc.save(`${filename}.pdf`);
    },
    margin: [10, 10, 10, 10],
    image: { quality: 0.9, type: 'jpeg' },
    autoPaging: 'text',
    x: 0,
    y: 0,
    width: 190, //target width in the PDF document
    windowWidth: 1000, //window width in CSS pixels
    html2canvas: {
      onclone(document) {
        document.documentElement.classList.add('exportToPDF');
      },
    },
  });
};
