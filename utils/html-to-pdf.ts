import jsPDF, { type HTMLWorker, type HTMLOptions } from 'jspdf';

export const convertHTMLToPDF = async (
  filename: string,
  html: string | HTMLElement,
  numPages = 3,
): HTMLWorker => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    putOnlyUsedFonts: true,
    floatPrecision: 4,
    compress: true,
  });

  const htmlOptions = {
    margin: [10, 10, 10, 10],
    image: { quality: 0.9, type: 'jpeg' },
    autoPaging: false,

    x: 0,
    y: 0,
    width: 190, //target width in the PDF document
    windowWidth: 1000, //window width in CSS pixels
    html2canvas: {
      onclone(document) {
        document.documentElement.classList.add('exportToPDF');
      },
    },
  } satisfies HTMLOptions;

  for (let index = 1; index < numPages; index++) {
    await doc.html(html, htmlOptions);
    doc.addPage();
  }

  return doc.html(html, {
    ...htmlOptions,
    callback: function (doc) {
      doc.output('dataurlnewwindow', { filename });
    },
  });
};
