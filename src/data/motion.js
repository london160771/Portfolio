// Motion pieces. Web copies (720p, H.264, faststart) and posters live in public/assets/motion/<slug>/.
// Originals stay on the author's machine. None of these are client work. type: 'concept' = unofficial piece using a real brand; 'contest' = contest entry; null = personal/practice.
const piece = (slug, title, aspect, duration, type = null) => ({
  slug, title, aspect, duration,
  type, tools: [], year: null, oneLiner: null,
  poster: `/assets/motion/${slug}/poster.webp`,
  src: `/assets/motion/${slug}/video.mp4`,
});

export const motionPieces = [
  piece('montra-house-of-all-launches', 'Montra — House of All Launches', '16:9', 26, 'contest'),
  piece('after-hours', 'After Hours', '9:16', 20),
  piece('wolfswap-long-night', 'WolfSwap — The Long Night', '1:1', 25, 'contest'),
  piece('nike-one-step', 'Nike — One Step', '9:16', 20, 'concept'),
  piece('moonroll-2', 'Moonroll II', '16:9', 20, 'contest'),
  piece('alert-don-land', 'Alert Don Land', '9:16', 30),
  piece('timon-home', 'Home Came With Us', '9:16', 45),
  piece('montra-where-it-goes', 'Montra — Where It Goes', '16:9', 60, 'contest'),
  piece('built-to-hold', 'Built to Hold', '9:16', 19),
  piece('spotify', 'Spotify', '4:3', 29, 'concept'),
  piece('worm-walkthrough', 'Worm Walkthrough', '1:1', 65),
  piece('nike-every-mile', 'Nike — Every Mile', '9:16', 25, 'concept'),
  piece('montra-one-signature', 'Montra — One Signature', '16:9', 65, 'contest'),
  piece('the-plug', 'The Plug', '16:9', 37),
  piece('dear-valued-customer', 'Dear Valued Customer', '9:16', 71),
  piece('moonroll-1', 'Moonroll I', '16:9', 32, 'contest'),
  piece('webdev-promo', 'Web Dev Promo', '9:16', 17),
];

export const typeLabel = { concept: 'Concept', contest: 'Contest entry' };

export const formatDuration = (s) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;
