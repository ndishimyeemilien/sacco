
import { NextRequest, NextResponse } from 'next/server';
import PDFDocument from 'pdfkit';

export async function POST(req: NextRequest) {
  try {
    const loan = await req.json();

    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    
    const buffers: Buffer[] = [];
    doc.on('data', buffers.push.bind(buffers));
    
    const pdfData = await new Promise<Buffer>((resolve) => {
        doc.on('end', () => {
            resolve(Buffer.concat(buffers));
        });

        doc.fontSize(20).font('Helvetica-Bold').text('Loan Agreement', { align: 'center' });
        doc.moveDown(2);

        doc.fontSize(12).font('Helvetica');
        doc.text(`Date: ${new Date().toLocaleDateString()}`);
        doc.moveDown();

        doc.text('This Loan Agreement ("Agreement") is made between:');
        doc.moveDown();
        doc.font('Helvetica-Bold').text('Lender: SACCO Connect');
        doc.font('Helvetica-Bold').text('Borrower: Client Name'); // In a real app, you'd use the actual client name
        doc.moveDown(2);

        doc.font('Helvetica-Bold').text('1. Loan Details', { underline: true });
        doc.moveDown();
        doc.font('Helvetica')
           .text(`Principal Loan Amount: ${loan.amount}`)
           .text(`Loan Term: ${loan.months} months`)
           .text(`Interest Rate: 12% per annum`)
           .text(`Repayment Start Date: ${new Date(new Date().setMonth(new Date().getMonth()+1)).toLocaleDateString()}`);
        doc.moveDown(2);

        doc.font('Helvetica-Bold').text('2. Repayment Terms', { underline: true });
        doc.moveDown();
        doc.font('Helvetica').text(`The Borrower agrees to repay the loan amount, including principal and interest, in ${loan.months} equal monthly installments. Payments are due on the 1st of each month.`);
        doc.moveDown(2);

        doc.font('Helvetica-Bold').text('3. Default', { underline: true });
        doc.moveDown();
        doc.font('Helvetica').text('If the Borrower fails to make a payment by the due date, a late fee of 5% of the overdue amount will be applied. Defaulting on the loan for more than 60 days may result in legal action.');
        doc.moveDown(4);

        doc.font('Helvetica-Bold').text('4. Signatures', { underline: true });
        doc.moveDown();
        doc.font('Helvetica').text('By signing below, both parties agree to the terms of this Agreement.');
        doc.moveDown(3);

        doc.text('_________________________', { continued: true });
        doc.text('_________________________', { align: 'right' });
        doc.text('Borrower (Client Name)', { continued: true });
        doc.text('Lender (SACCO Connect)', { align: 'right' });

        doc.end();
    });

    return new NextResponse(pdfData, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="loan-agreement-${loan.id}.pdf"`,
      },
    });

  } catch (error) {
    console.error('Failed to generate PDF:', error);
    return new NextResponse('Failed to generate PDF', { status: 500 });
  }
}
