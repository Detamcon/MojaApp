
// src/app/o-nas/page.tsx

import Typography from '@mui/material/Typography';

export const metadata = {title:" O nas | MojaAppl"};

export default function About() {
    return (
        <Typography component="div">
        <Typography variant="h4" gutterBottom>
          <strong>About Us</strong>
        </Typography>
        <Typography variant="body1">
          At <strong>ZoškaSnap</strong>, we are passionate about creating a digital space where people can truly connect, share, and engage. Our mission is to bring communities together and make online interactions more meaningful.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1">
          We believe social media should be more than just scrolling—it should be about real connections. That’s why we built a platform designed to empower you to:
        </Typography>
        <Typography variant="body1">
          🌍 <strong>Connect</strong> with people who share your interests. <br />
          💡 <strong>Inspire</strong> and be inspired by fresh ideas and content. <br />
          🔒 <strong>Stay Safe</strong> with a secure and welcoming environment. <br />
          🚀 <strong>Grow</strong> your network and expand your influence.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Why Choose Us?
        </Typography>
        <Typography variant="body1" >
          Unlike other platforms, we focus on building **genuine relationships, fostering positivity, and ensuring user privacy.** Whether you want to share your journey, discover new communities, or just have fun, we’re here to make your experience enjoyable and rewarding.
        </Typography>
        <Typography variant="h6" color="primary">
          Join us and be part of the future of social connection!
        </Typography>
        </Typography>
    );
}

