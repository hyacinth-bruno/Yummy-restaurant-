// src/pages/Contact.tsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const ContactContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundImage: 'url(https://source.unsplash.com/random)', // You can replace this with any image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  textAlign: 'center',
  padding: '20px',
});

const ContentBox = styled(Box)({
  background: 'rgba(0, 0, 0, 0.6)',
  padding: '20px',
  borderRadius: '10px',
  maxWidth: '600px',
  width: '100%',
});

const ContactLink = styled('a')({
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
  '&:hover': {
    color: '#ffd700',
  },
});

const SocialMediaContainer = styled(Box)({
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
});

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <ContentBox>
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          We love hearing from you! Please contact us via the email address or phone numbers below.
        </Typography>
        <Typography variant="body1" gutterBottom>
          For answers to frequently asked questions about your subscription, please check out our FAQ page.
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>
          Email address:
        </Typography>
        <ContactLink href="mailto:help@yummy.com">help@yummy.com</ContactLink>
        <Typography variant="h6" component="h3" gutterBottom>
          Toll-free number:
        </Typography>
        <ContactLink href="tel:855-753-1037">855-753-1037</ContactLink>
        <Typography variant="h6" component="h3" gutterBottom>
          International number:
        </Typography>
        <ContactLink href="tel:332-239-2921">332-239-2921</ContactLink>
        <Typography variant="body1" gutterBottom>
          We will respond to your email within 72 hours.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Hours of operation: Monday through Friday, 9 a.m. to 7 p.m. E.T.
        </Typography>
        <SocialMediaContainer>
          <ContactLink href="https://www.facebook.com" target="_blank">
            <Facebook fontSize="large" />
          </ContactLink>
          <ContactLink href="https://www.twitter.com" target="_blank">
            <Twitter fontSize="large" />
          </ContactLink>
          <ContactLink href="https://www.instagram.com" target="_blank">
            <Instagram fontSize="large" />
          </ContactLink>
          <ContactLink href="https://www.linkedin.com" target="_blank">
            <LinkedIn fontSize="large" />
          </ContactLink>
        </SocialMediaContainer>
      </ContentBox>
    </ContactContainer>
  );
};

export default Contact;
