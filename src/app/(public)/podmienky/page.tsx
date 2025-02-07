
// src/app/podmienky/page.tsx


import Typography from '@mui/material/Typography';

export const metadata = {title:" Podmienky | MojaAppl"};

export default function TermsConditions() {
    return (
        <Typography component="div">
        <Typography variant="h4" gutterBottom>
          <strong>Terms and Conditions</strong>
        </Typography>
  
        <Typography variant="body1">
          These Terms and Conditions govern your use of <strong>ZoškaSnap</strong>. By accessing or using our platform, you agree to comply with these terms. If you do not agree, you must discontinue use immediately.
        </Typography>
  
        <Typography variant="h5" gutterBottom>
          1. Account Registration
        </Typography>
        <Typography variant="body1">
          - You must provide accurate and complete information when creating an account. <br />
          - You are responsible for maintaining the security of your account and password. <br />
          - We reserve the right to suspend or terminate accounts that violate these terms.
        </Typography>
  
        <Typography variant="h5" gutterBottom>
          2. Acceptable Use
        </Typography>
        <Typography variant="body1">
          - You agree to use the platform in a lawful manner. <br />
          - You must not post harmful, illegal, or misleading content. <br />
          - Any attempt to disrupt the platform or compromise security is strictly prohibited.
        </Typography>
  
        <Typography variant="h5" gutterBottom>
          3. Privacy Policy
        </Typography>
        <Typography variant="body1">
          Your use of <strong>ZoškaSnap</strong> is also governed by our <strong>Privacy Policy</strong>, which outlines how we collect, use, and protect your data.
        </Typography>
  
        <Typography variant="h5" gutterBottom>
          4. Intellectual Property
        </Typography>
        <Typography variant="body1">
          - All content and materials on the platform are the property of <strong>ZoškaSnap</strong> or its licensors. <br />
          - You may not copy, distribute, or modify content without explicit permission.
        </Typography>
  
        <Typography variant="h5" gutterBottom>
          5. Limitation of Liability
        </Typography>
        <Typography variant="body1">
          - We are not responsible for any damages or losses resulting from the use of our platform. <br />
          - We do not guarantee uninterrupted or error-free service.
        </Typography>
  
        <Typography variant="h5" gutterBottom>
          6. Termination
        </Typography>
        <Typography variant="body1">
          We reserve the right to suspend or terminate access to our platform at any time, with or without notice, for any violations of these Terms and Conditions.
        </Typography>
  
        <Typography variant="h5" gutterBottom>
          7. Changes to Terms
        </Typography>
        <Typography variant="body1">
          We may update these Terms and Conditions from time to time. Continued use of the platform after changes are made constitutes acceptance of the revised terms.
        </Typography>
  
        <Typography variant="h5" gutterBottom>
          8. Contact Information
        </Typography>
        <Typography variant="body1">
          If you have any questions about these Terms and Conditions, please contact us at <strong>masurik1@gmail.com</strong>.
        </Typography>
  
        <Typography variant="h6" color="primary">
          Last updated: 6. 7. 1921
        </Typography>
        </Typography>
    );
}