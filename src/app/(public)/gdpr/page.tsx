// src/app/gdpr/page.tsx

import Typography from '@mui/material/Typography';

export const metadata = {title:" GDPR | MojaAppl"};

export default function GDPR() {
    return (
        <Typography component="div">
      <Typography variant="h4" gutterBottom>
        <strong>GDPR Compliance</strong>
      </Typography>

      <Typography variant="body1">
        At <strong>ZoškaSnap</strong>, we are committed to protecting your privacy and ensuring that your personal data is handled securely and in compliance with the General Data Protection Regulation (GDPR).
      </Typography>

      <Typography variant="h5" gutterBottom>
        Your Rights Under GDPR
      </Typography>
      <Typography variant="body1">
        As a user, you have the following rights regarding your personal data:
      </Typography>
      <Typography variant="body1">
        - The right to access your personal data. <br />
        - The right to request correction of inaccurate or incomplete data. <br />
        - The right to request deletion of your data under certain conditions. <br />
        - The right to restrict processing of your data. <br />
        - The right to data portability, allowing you to obtain and reuse your data. <br />
        - The right to object to the processing of your data for certain purposes. <br />
        - The right to withdraw consent at any time, where processing is based on consent.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Data Collection and Use
      </Typography>
      <Typography variant="body1">
        We collect and process only the data necessary to provide our services. This includes:
      </Typography>
      <Typography variant="body1">
        - Account information such as name, email, and profile details. <br />
        - Usage data to improve user experience and platform performance. <br />
        - Cookies and similar tracking technologies for analytics and personalization. <br />
        - Communications and support interactions.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Data Security
      </Typography>
      <Typography variant="body1">
        We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, or misuse. This includes encryption, access controls, and regular security assessments.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Data Retention
      </Typography>
      <Typography variant="body1">
        Your personal data is retained only for as long as necessary to fulfill the purposes for which it was collected, or as required by legal and regulatory obligations.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1">
        If you have any questions about how we handle your data or wish to exercise your GDPR rights, please contact us at <strong>masurik1@gmail.com</strong>.
      </Typography>

      <Typography variant="h6" color="primary">
        Last updated: 4. 5. 1865
      </Typography>
        </Typography>
    );
}

