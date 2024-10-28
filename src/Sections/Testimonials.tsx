import React from 'react';
import { AppColors } from '../colors';
import { commonStyles, typography } from '../common';
import { zIndex } from '../constants/zIndex';

const { white, primary, grayText } = AppColors;

const testimonials = [
  {
    id: 1,
    username: 'sarah_fitness',
    userImage: 'images/SirSupremeLogo.png',
    message:
      'Your podcast literally changed my perspective on content creation! Thanks for being such an inspiration 🙌',
    time: '8th Nov',
    verified: true,
  },
  {
    id: 2,
    username: 'tech_mike',
    userImage: 'images/SirSupremeLogo.png',
    message:
      'Bro the latest episode was fire! The insights about YouTube algorithm were game-changing 🔥',
    time: '8th Nov',
    verified: true,
  },
  {
    id: 3,
    username: 'creative_jenny',
    userImage: 'images/SirSupremeLogo.png',
    message:
      'Been following since day 1. The growth and value you provide is insane! Keep it up 💪',
    time: '8th Nov',
    verified: true,
  },
  {
    id: 4,
    username: 'startup_sam',
    userImage: 'images/SirSupremeLogo.png',
    message:
      'Your tips helped me grow my channel from 0 to 100K! Forever grateful 🙏',
    time: '8th Nov',
    verified: false,
  },
  {
    id: 5,
    username: 'gamer_girl',
    userImage: 'images/SirSupremeLogo.png',
    message: "The gaming streams are epic! Love the community you've built ❤️",
    time: '8th Nov',
    verified: true,
  },
  {
    id: 6,
    username: 'content_king',
    userImage: 'images/SirSupremeLogo.png',
    message:
      "You're the reason I started my own podcast. Thank you for showing the way! 🎯",
    time: '8th Nov',
    verified: true,
  },
  {
    id: 7,
    username: 'digital_nomad',
    userImage: 'images/SirSupremeLogo.png',
    message:
      'Your consistency and quality is unmatched! Big fan from Australia 🦘',
    time: '8th Nov',
    verified: false,
  },
  {
    id: 8,
    username: 'podcast_pro',
    userImage: 'images/SirSupremeLogo.png',
    message:
      'The way you break down complex topics is just amazing! Learning so much 📚',
    time: '8th Nov',
    verified: true,
  },
  {
    id: 9,
    username: 'marketing_maven',
    userImage: 'images/SirSupremeLogo.png',
    message:
      'Your social media strategy session changed my business! Revenue up 3x 📈',
    time: '8th Nov',
    verified: true,
  },
  {
    id: 10,
    username: 'inspired_ian',
    userImage: 'images/SirSupremeLogo.png',
    message:
      'Never miss an episode! The value you provide is just incredible 🌟',
    time: '8th Nov',
    verified: true,
  },
] as const;

const styles = {
  container: {
    backgroundColor: primary,
    padding: '8rem 0 6rem',
    overflow: 'hidden',
  },
  heading: {
    ...commonStyles.heading2,
    fontFamily: typography.fontFamily.special,
    color: white,
    textAlign: 'center',
    marginBottom: '4rem',
    fontSize: 'calc(3.5rem + 1vw)', // Larger heading
  },
  scrollWrapper: {
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '150px',
      height: '100%',
      background: 'linear-gradient(to right, #000000, transparent)',
      zIndex: zIndex.base + 1,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      right: 0,
      top: 0,
      width: '150px',
      height: '100%',
      background: 'linear-gradient(to left, #000000, transparent)',
      zIndex: zIndex.base + 1,
    },
  },
  scrollContainer: {
    display: 'flex',
    gap: '3rem', // Increased gap between cards
    padding: '3rem',
    width: 'max-content',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)', // Lighter background
    borderRadius: '20px',
    padding: '2.5rem',
    width: '350px', // Slightly wider cards
    flexShrink: 0,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
      transform: 'translateY(-5px)',
    },
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  userImage: {
    width: '50px', // Larger user image
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid rgba(255, 255, 255, 0.2)',
  },
  userInfo: {
    flex: 1,
  },
  username: {
    color: white,
    fontSize: 'calc(1.6rem + 0.2vw)', // Larger username
    fontWeight: 'bold',
    fontFamily: typography.fontFamily.primaryMedium,
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
  },
  verifiedBadge: {
    width: '18px', // Larger badge
    height: '18px',
    borderRadius: '50%',
    backgroundColor: grayText,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    color: white,
  },
  time: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 'calc(1.2rem + 0.1vw)', // Larger time
    marginTop: '0.4rem',
    fontFamily: typography.fontFamily.primary,
  },
  message: {
    color: 'rgba(255, 255, 255, 0.9)', // More contrast for message
    fontSize: 'calc(1.5rem + 0.1vw)', // Larger message
    lineHeight: 1.6,
    fontFamily: typography.fontFamily.primary,
  },
} as const;

const InstagramCard: React.FC<{
  username: string;
  userImage: string;
  message: string;
  time: string;
  verified: boolean;
}> = ({ username, userImage, message, time, verified }) => (
  <div style={styles.card}>
    <div style={styles.cardHeader}>
      <img src={userImage} alt={username} style={styles.userImage} />
      <div style={styles.userInfo}>
        <div style={styles.username}>
          {username}
          {verified && <span style={styles.verifiedBadge}>✓</span>}
        </div>
        <div style={styles.time}>{time}</div>
      </div>
    </div>
    <p style={styles.message}>{message}</p>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>What Our Community Says</h2>

      <div style={styles.scrollWrapper}>
        <div className="scroll-content" style={styles.scrollContainer}>
          {/* First set of testimonials */}
          {testimonials.map((testimonial) => (
            <InstagramCard key={testimonial.id} {...testimonial} />
          ))}
          {/* Duplicate set for seamless loop */}
          {testimonials.map((testimonial) => (
            <InstagramCard
              key={`duplicate-${testimonial.id}`}
              {...testimonial}
            />
          ))}
        </div>
      </div>

      <style>
        {`
          .scroll-content {
            animation: scroll 60s linear infinite;
          }

          .scroll-content:hover {
            animation-play-state: paused;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${testimonials.length * 100}px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Testimonials;
