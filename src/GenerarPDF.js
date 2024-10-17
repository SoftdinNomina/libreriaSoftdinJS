import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

// Registrar las fuentes de pdfmake
pdfMake.vfs = pdfFonts.pdfMake.vfs;

// Función para generar el PDF
export const generarCertificadoLaboral = (logo, employeeName, companyName, jobTitle, startDate, endDate) => {
  const docDefinition = {
    header: {
      columns: [
        { image: logo, width: 100 }, // Logo en base64 o URL
        {
          text: companyName,
          alignment: 'center',
          margin: [0, 15, 0, 0],
          fontSize: 18,
          bold: true
        }
      ]
    },
    content: [
      { text: 'Certificado Laboral', style: 'header' },
      {
        text: `A quien corresponda:`,
        margin: [0, 20]
      },
      {
        text: [
          `Por medio de la presente se certifica que el señor/a `,
          { text: employeeName, bold: true },
          ` ha laborado en nuestra empresa `,
          { text: companyName, bold: true },
          ` como `,
          { text: jobTitle, bold: true },
          ` desde `,
          { text: startDate, bold: true },
          ` hasta `,
          { text: endDate, bold: true },
          `.`
        ]
      },
      { text: 'Agradecemos la atención a la presente.', margin: [0, 20] }
    ],
    footer: function(currentPage, pageCount) {
      return {
        columns: [
          { text: `Página ${currentPage} de ${pageCount}`, alignment: 'right', margin: [0, 0, 20, 0] },
          { text: 'Pie de página - Información de contacto', alignment: 'center', margin: [0, 0, 0, 10] }
        ]
      };
    },
    styles: {
      header: {
        fontSize: 22,
        bold: true,
        alignment: 'center'
      }
    }
  };

  // Generar el PDF
  pdfMake.createPdf(docDefinition).open();
};

