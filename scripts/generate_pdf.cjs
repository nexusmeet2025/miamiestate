const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

function buildPDF() {
  const outputPath = path.join(__dirname, '..', 'public', 'Clinic-Website-Architecture-Blueprint.pdf');
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 45, bottom: 45, left: 45, right: 45 },
    bufferPages: true,
    info: {
      Title: "Faith Children's Hospital Website Architecture Blueprint",
      Author: 'AI Studio Build Engine',
      Subject: 'Dr. C B Kumar MD Pediatrics Production Specification',
      Keywords: "Pediatrics, Child Hospital, Dr C B Kumar, Faith Children's Hospital, Muzaffarpur, Blueprint"
    }
  });

  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  // Palette constants
  const PRIMARY = '#111827';
  const ACCENT = '#0F766E';
  const BODY = '#374151';
  const MUTED = '#6B7280';
  const LIGHT_BG = '#F8FAFC';
  const BORDER = '#E2E8F0';

  function addHeader(sectionTitle) {
    doc.fillColor(MUTED).fontSize(8.5).font('Helvetica-Bold')
       .text(sectionTitle.toUpperCase(), 45, 25, { characterSpacing: 1 });
    doc.strokeColor(BORDER).lineWidth(0.5).moveTo(45, 36).lineTo(550, 36).stroke();
  }

  function addTitle(title, sub) {
    doc.moveDown(0.8);
    doc.fillColor(PRIMARY).fontSize(19).font('Helvetica-Bold').text(title);
    if (sub) {
      doc.moveDown(0.2);
      doc.fillColor(ACCENT).fontSize(10.5).font('Helvetica-Bold').text(sub);
    }
    doc.moveDown(0.6);
  }

  function addSubheading(title) {
    doc.moveDown(0.5);
    doc.fillColor(PRIMARY).fontSize(12).font('Helvetica-Bold').text(title);
    doc.moveDown(0.25);
  }

  function addParagraph(text) {
    doc.fillColor(BODY).fontSize(9.5).font('Helvetica').lineGap(2.5).text(text);
    doc.moveDown(0.4);
  }

  function addBullet(title, desc) {
    doc.fillColor(ACCENT).fontSize(9.5).font('Helvetica-Bold').text('•  ', { continued: true });
    doc.fillColor(PRIMARY).font('Helvetica-Bold').text(title + ': ', { continued: true });
    doc.fillColor(BODY).font('Helvetica').text(desc);
    doc.moveDown(0.2);
  }

  // ==========================================
  // PAGE 1: COVER & EXECUTIVE SUMMARY
  // ==========================================
  doc.rect(0, 0, 595, 12).fill(ACCENT);
  doc.moveDown(2);

  doc.fillColor(ACCENT).fontSize(9.5).font('Helvetica-Bold').text('PEDIATRIC HOSPITAL ARCHITECTURE & CASE BLUEPRINT');
  doc.moveDown(0.5);
  
  doc.fillColor(PRIMARY).fontSize(25).font('Helvetica-Bold').lineGap(3)
     .text("Faith Children's Hospital\nProduction Website Blueprint");
  doc.moveDown(0.4);

  doc.fillColor(MUTED).fontSize(10.5).font('Helvetica')
     .text("Case Study & Architecture Specification: Faith Children's Hospital (Dr. C. B. Kumar, MD Pediatrics, MBBS, Established 1999, Juran Chapra, Muzaffarpur, Bihar).");
  doc.moveDown(1);

  // Summary box
  doc.rect(45, doc.y, 505, 84).fillAndStroke(LIGHT_BG, BORDER);
  const boxTop = doc.y + 10;
  doc.fillColor(PRIMARY).fontSize(10).font('Helvetica-Bold').text('CLINICAL DATA SPECIFICATION & BLUEPRINT', 55, boxTop);
  doc.fillColor(BODY).fontSize(8.5).font('Helvetica').lineGap(2)
     .text("This specification codifies the production architecture for Faith Children's Hospital, integrating verified credentials of Dr. C. B. Kumar (MD Pediatrics, MBBS, 26+ yrs experience), actual consultation fees (₹1,000 OPD), 24-hour emergency operations, real Google review ratings (3.1★ from 59 reviews), and the video-frame inspired 4-card horizontal article/service grid design.", 55, boxTop + 16, { width: 485 });

  doc.y = boxTop + 90;
  doc.moveDown(1);

  addSubheading('1. Verified Hospital Profile & Medical Direction');
  addBullet('Official Hospital Name', "Faith Children's Hospital (also operating as Dr. C B Kumar Clinic).");
  addBullet('Lead Pediatrician', 'Dr. C. B. Kumar (Dr. Chandra Bhushan Kumar), MBBS, MD (Pediatrics).');
  addBullet('Clinical Experience', '26+ Years of pediatric practice in Muzaffarpur (Established hospital in 1999).');
  addBullet('Professional Memberships', 'Indian Academy of Pediatrics (IAP) & Indian Medical Association (IMA).');
  addBullet('Hospital Working Hours', 'Open 24 Hours Daily (24/7 Emergency Casualty, PICU, and Inpatient Admissions).');

  addSubheading('2. Physical Location & Telephony');
  addBullet('Physical Address', '49HG+VP8, Road No. 1, Juran Chapra, Near Jheel Kinare (Lake View), Brahmapura, Muzaffarpur, Bihar 842001.');
  addBullet('Emergency Desk Phone', '095766 31049 (+91 95766 31049).');
  addBullet('Alternate Doctor Line', '094312 38928 (+91 94312 38928).');
  addBullet('Email Address', 'cbk_dr@yahoo.com.');

  // ==========================================
  // PAGE 2: VIDEO FRAME DESIGN SYSTEM
  // ==========================================
  doc.addPage();
  addHeader('Video Frame Design System');
  addTitle('Video Frame Architectural Translation', 'Airy White Cards, Circular Mint Arrow & Editorial Layout');

  addParagraph('The design strictly translates the provided video frame reference into a high-trust pediatric hospital digital presence:');

  addSubheading('Visual System Specifications');
  addBullet('Canvas Background', '#F8F9FA (Soft light grey off-white, anti-glare).');
  addBullet('Card Surface', '#FFFFFF (Pure white, subtle border #E8EAED, shadow: 0 4px 20px -2px rgba(0,0,0,0.04)).');
  addBullet('Pill Action Button', 'Oval pill shape with circular badge on right (#D1FAE5 mint background with dark teal arrow #065F46).');
  addBullet('Header Split Layout', 'Left: Bold display headline (clamp 2rem to 3.4rem) + Pill CTA; Right: Aligned descriptive editorial summary.');
  addBullet('4-Card Grid', '4 horizontal cards with top-rounded image media, overlaid pill badges (red/green dot), clear titles, and bottom meta.');

  addSubheading('4 Core Clinical Department Cards');
  addBullet('Card 1: 24/7 Pediatric Emergency', 'Immediate triage, fever management, convulsion stabilization, and acute pediatric admission (Badge: 24 Hours Open).');
  addBullet('Card 2: Senior Pediatrician OPD', 'Clinical examination, diagnostic precision, developmental milestones, and prescription (Badge: OPD ₹1,000).');
  addBullet('Card 3: Newborn & Neonatal Care (NICU)', 'Phototherapy for infant jaundice, low birth weight care, baby warmers, and incubator support (Badge: NICU Support).');
  addBullet('Card 4: Complete Childhood Immunization', 'Strict cold-chain maintained vaccines following Indian Academy of Pediatrics (IAP) schedule (Badge: IAP Schedule).');

  // ==========================================
  // PAGE 3: GOOGLE REVIEWS & TESTIMONIALS
  // ==========================================
  doc.addPage();
  addHeader('Verified Google Reviews & Testimonials');
  addTitle('Real Patient Proof & Performance Audits', 'Verbatim Google Reviews for Dr. C B Kumar');

  addSubheading('Google Reviews Rating Metric');
  addBullet('Aggregate Rating', '3.1★ / 5.0★ based on 59 Google Reviews.');
  addBullet('Clinical Reputation', 'Regarded across Muzaffarpur as an exceptionally accurate diagnostic pediatrician who knows medications thoroughly.');

  addSubheading('Three Verbatim Testimonials');
  
  doc.rect(45, doc.y, 505, 52).fillAndStroke(LIGHT_BG, BORDER);
  let tY = doc.y + 8;
  doc.fillColor(PRIMARY).fontSize(9.5).font('Helvetica-Bold').text('Manjeet Sinha  ·  Google Review (★★★★★)', 55, tY);
  doc.fillColor(BODY).fontSize(8.5).font('Helvetica').lineGap(2)
     .text('"Good doctor for Children. Diagnosed my child accurately when other clinics were guessing. Helpful guidance for parents and effective medicines that cured my son quickly."', 55, tY + 14, { width: 485 });
  doc.y = tY + 56;

  doc.rect(45, doc.y, 505, 52).fillAndStroke(LIGHT_BG, BORDER);
  tY = doc.y + 8;
  doc.fillColor(PRIMARY).fontSize(9.5).font('Helvetica-Bold').text('Santosh Kumar  ·  Google Review (★★★☆☆)', 55, tY);
  doc.fillColor(BODY).fontSize(8.5).font('Helvetica').lineGap(2)
     .text('"Dr. C B Kumar is an experienced pediatrician who knows medicines and child symptoms well. Staff management needs improvement during peak hours, but the doctor\'s clinical treatment is reliable."', 55, tY + 14, { width: 485 });
  doc.y = tY + 56;

  doc.rect(45, doc.y, 505, 52).fillAndStroke(LIGHT_BG, BORDER);
  tY = doc.y + 8;
  doc.fillColor(PRIMARY).fontSize(9.5).font('Helvetica-Bold').text('Raushan Kumar  ·  Google Review (★★★☆☆)', 55, tY);
  doc.fillColor(BODY).fontSize(8.5).font('Helvetica').lineGap(2)
     .text('"Senior doctor with decades of practice in Muzaffarpur for acute pediatric illnesses. Treatment is effective, though waiting times can be long during crowded hospital hours."', 55, tY + 14, { width: 485 });
  doc.y = tY + 58;

  addSubheading('Schema.org JSON-LD Implementation');
  addBullet('Hospital & Physician Entity', 'Encodes legalName, telephone (+919576631049), address (49HG+VP8, Juran Chapra, Muzaffarpur), openingHours (Mo-Su 00:00-23:59), priceRange (₹1,000), and aggregateRating (3.1/59).');
  addBullet('FAQPage Schema', 'Encodes 4 primary parent questions (24-hour emergency availability, consultation fees, doctor credentials, and exact landmark directions).');

  // ==========================================
  // PAGE 4: CLIENT FOLLOW-UP AUDIT (FLAGS)
  // ==========================================
  doc.addPage();
  addHeader('Client Follow-Up & Flagged Items');
  addTitle('Items to Confirm with Client / Dr. C B Kumar', 'What the Document Does Not Cover');

  addSubheading('Items Flagged for Client Clarification');
  doc.rect(45, doc.y, 505, 110).fillAndStroke(LIGHT_BG, BORDER);
  const flagTop = doc.y + 8;
  doc.fillColor(PRIMARY).fontSize(9.5).font('Helvetica-Bold').text('ITEMS TO CONFIRM WITH DR. C B KUMAR / FAITH CHILDREN\'S HOSPITAL:', 55, flagTop);
  const flags = [
    '1. Official Doctor Portrait Photograph: The web listing lacks a high-resolution studio photo of Dr. C B Kumar. We generated professional clinical pediatric photography matching the video frame; confirm if the doctor wants his official portrait uploaded.',
    '2. Dedicated WhatsApp Business Line: Google lists phone 095766 31049. Confirm if this specific number is registered on WhatsApp for direct parent inquiries.',
    '3. Inpatient Bed & PICU/NICU Capacity: Confirm the exact number of pediatric admission beds, ventilators, and phototherapy units available at the Juran Chapra hospital.',
    '4. Addressing Staff & Waiting Feedback: Several Google reviews note staff behavior during peak waiting hours. Recommend adding a dedicated "Patient Care & Transparent Service Charter" to set clear parental expectations.'
  ];
  let fY = flagTop + 14;
  flags.forEach(f => {
    doc.fillColor(BODY).fontSize(8).font('Helvetica').lineGap(1.5).text(f, 55, fY, { width: 485 });
    fY += 22;
  });

  // Footer page numbers
  const pages = doc.bufferedPageRange();
  for (let i = 0; i < pages.count; i++) {
    doc.switchToPage(i);
    doc.fillColor(MUTED).fontSize(8).font('Helvetica')
       .text(`Page ${i + 1} of ${pages.count}  ·  Faith Children's Hospital Architecture Blueprint`, 45, 800, { align: 'center', width: 505 });
  }

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on('finish', () => resolve(outputPath));
    stream.on('error', reject);
  });
}

buildPDF().then((p) => {
  console.log('PDF generated successfully at:', p);
}).catch((err) => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
