import React, { useState } from 'react';
import './LoveMoodboard.css';

// PUBLIC_INTERFACE
function LoveMoodboard() {
  /**
   * Love Moodboard: Dreamy, pastel themed moodboard with a Pacifico heading,
   * grid of randomized romantic images, shuffle button, and glow hover effect.
   */

  // Placeholder image URLs (Unsplash, royalty-free soft/aesthetic)
  const allImages = [
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', // Pastel sky
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', // Couple in field
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', // Heart cloud
    'https://images.unsplash.com/photo-1462820351707-97f4bca89835?auto=format&fit=crop&w=400&q=80', // Soft roses
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', // Holding hands
    'https://images.unsplash.com/photo-1457530378978-8bac673b8062?auto=format&fit=crop&w=400&q=80', // Love note
    'https://images.unsplash.com/photo-1483794344563-d27a8d38b75b?auto=format&fit=crop&w=400&q=80', // Neon heart
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80', // Pink tulips
    'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?auto=format&fit=crop&w=400&q=80', // Soft pink sunset
    'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80', // Pink sunglasses
  ];

  // Utility to shuffle array and pick N
  function getShuffledImages(n = 8) {
    const shuffled = [...allImages].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, n);
  }

  // State: moodboard images (default = 8 of 10)
  const [images, setImages] = useState(() => getShuffledImages(8));

  // Shuffle handler
  function handleShuffle() {
    setImages(getShuffledImages(8));
  }

  return (
    <section className="love-moodboard-root">
      <h2 className="love-moodboard-title">
        <span role="img" aria-label="sparkle heart">💖</span> Your Love Moodboard
      </h2>

      <div className="love-moodboard-grid" tabIndex="0" aria-label="Dreamy romantic moodboard grid">
        {images.map((url, idx) => (
          <div key={idx} className="love-moodboard-imgbox">
            <img
              src={url}
              alt="romantic moodboard"
              className="love-moodboard-img"
              draggable={false}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <button
        className="love-moodboard-shuffle"
        type="button"
        aria-label="Shuffle moodboard"
        onClick={handleShuffle}
      >
        <span role="img" aria-label="palette">🎨</span> Shuffle Moodboard
      </button>
    </section>
  );
}

export default LoveMoodboard;
