import { jsPDF } from "jspdf";

// Función para generar el PDF
export const generarCertificadoLaboral = (form, logoBase64) => {
  console.log("Generando certificado laboral...");
  // Validaciones de entrada
  if (
    !form ||
    !form.report_header ||
    !form.description ||
    !form.signature ||
    !form.report_footer
  ) {
    console.error("Faltan datos en el formulario.");
    return;
  }

  const doc = new jsPDF({
    orientation: "portrait", // Orientación vertical
    unit: "mm", // Unidades en milímetros
    format: "letter", // Tamaño carta
    putOnlyUsedFonts: true,
    precision: 16, // Precisión flotante
  });

  // Encabezado: agregar logo si está habilitado
  const imgData = logoBase64.value;
  if (form.show_logo && imgData) {
    doc.addImage(imgData, "JPEG", 15, 10, 30, 30); // (imagen, tipo, x, y, ancho, alto)
  }

  // Agregar encabezado del reporte
  doc.setFontSize(16);
  const maxWidthHeader = form.show_logo ? 150 : 200;
  const linesHeader = doc.splitTextToSize(form.report_header, maxWidthHeader);
  let yPosition = 20; // Posición Y inicial
  linesHeader.forEach((line) => {
    doc.text(line, form.show_logo ? 120 : 100, yPosition, { align: "center" });
    yPosition += 8;
  });

  yPosition += 20; // Incrementar posición Y para el siguiente bloque

  // Información del certificado
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  const certText = "CERTIFICA";
  const certTextWidth = doc.getTextWidth(certText);
  const certX = (doc.getPageWidth() - certTextWidth) / 2; // Centrar el texto
  doc.text(certText, certX, yPosition);

  // Descripción del certificado
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  const linesDescription = doc.splitTextToSize(form.description, 180);
  yPosition += 20;
  linesDescription.forEach((line) => {
    doc.text(line, 20, yPosition);
    yPosition += 10;
  });

  // Firma
  const firmaLinea = "__________________________________";
  const firmaTextWidth = doc.getTextWidth(firmaLinea);
  const firmaX = (doc.getPageWidth() - firmaTextWidth) / 2;
  doc.text(firmaLinea, firmaX, 230);

  doc.setFont("helvetica", "bold");
  const linesSignature = doc.splitTextToSize(form.signature, 180);
  yPosition = 235;
  linesSignature.forEach((line) => {
    const textWidth = doc.getTextWidth(line);
    const textX = (doc.getPageWidth() - textWidth) / 2;
    doc.text(line, textX, yPosition);
    yPosition += 4;
  });

  // Pie de informe
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  const linesFooter = doc.splitTextToSize(form.report_footer, 180);
  yPosition = 255;
  linesFooter.forEach((line) => {
    const textWidth = doc.getTextWidth(line);
    const textX = (doc.getPageWidth() - textWidth) / 2;
    doc.text(line, textX, yPosition);
    yPosition += 4;
  });

  // Generar salida como URL blob
  const pdfOutput = doc.output("bloburl");
  return pdfOutput; // Devolver la URL del PDF generado
};
