import React, { useState, useRef } from 'react';
import './CrushOMeter.css';

// PUBLIC_INTERFACE
function CrushOMeter() {
  /**
   * Crush-O-Meter Main Component.
   * Features glowing animated title, pastel name inputs, scan button,
   * animated result with flirty prediction, DM pickup line, heart/sparkle anims, and reset.
   * Pacifico font for heading, Poppins for text.
   */

  // 20 flirty pickup lines
  const pickupLines =
    [ "Are you a magician? Because whenever I look at you, everyone else disappears.",
      "Do you have a map? I keep getting lost in your eyes.",
      "Is your name Wi-Fi? Because I'm feeling a connection.",
      "If beauty were time, you’d be an eternity.",
      "Can I follow you? Cause my mom told me to follow my dreams.",
      "Do you have a name, or can I call you mine?",
      "Are you a campfire? Because you’re hot and I want s’more.",
      "Do you believe in love at first sight, or should I walk by again?",
      "If kisses were snowflakes, I’d send you a blizzard.",
      "Are we at the airport? Cause my heart is taking off.",
      "If you were a vegetable, you’d be a cute-cumber.",
      "I must be a snowflake, because I’ve fallen for you.",
      "Is this the Hogwarts Express? Because it feels like you and I are headed somewhere magical.",
      "Excuse me, but I think you dropped something: MY JAW!",
      "Are you French? Because Eiffel for you.",
      "Can you lend me a kiss? I promise I’ll give it back.",
      "If looks could kill, you'd be a weapon of mass attraction.",
      "Your hand looks heavy—can I hold it for you?",
      "Do you like Star Wars? Because Yoda one for me.",
      "Aside from being gorgeous, what do you do for a living?" ];
  
  // 8+ catchily flirty results for the verdict
  const verdicts =
    [ "🔥 Sizzling Chemistry Detected! Quick, someone fetch the fire extinguisher.",
      "💞 The stars say... mutual butterflies are in the air.",
      "💓 Heartbeats in sync! This might be a match made in meme heaven.",
      "🌈 Your vibe check is off the charts—shoot your shot!",
      "😏 Flirty energy over 9000. Expect sparks (and maybe DMs) soon.",
      "🍬 Sugar, spice, and everything nice—you two are vibe soulmates.",
      "✨ Your names spell out destiny. Don't leave each other on read.",
      "💘 True Crush Potential: Apply some courage and see what happens!",
      "🎶 The heart playlist says: Love on repeat.",
      "❤️ Swipe right on fate! This connection is too cute to ignore." ];

  // Form states
  const [userName, setUserName] = useState('');
  const [crushName, setCrushName] = useState('');
  const [resultStage, setResultStage] = useState('input'); // 'input' | 'scanned'
  const [verdict, setVerdict] = useState('');
  const [showVerdictCard, setShowVerdictCard] = useState(false);
  const [dmLine, setDmLine] = useState('');
  const [dmAnimating, setDmAnimating] = useState(false);
  const [heartsOn, setHeartsOn] = useState(false);

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);

  // For pastel random
  function randomFromArr(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function handleScan(e) {
    e.preventDefault();
    if (!userName.trim() || !crushName.trim()) {
      if (!userName.trim()) input1Ref.current.focus();
      else input2Ref.current.focus();
      return;
    }
    setVerdict(randomFromArr(verdicts));
    setShowVerdictCard(false);
    setResultStage('scanned');
    setTimeout(() => {
      setShowVerdictCard(true);
      setHeartsOn(true);
    }, 350); // Smol delay for anticipation
  }

  function getPickup() {
    setDmAnimating(true);
    setTimeout(() => {
      setDmLine(randomFromArr(pickupLines));
      setDmAnimating(false);
    }, 350);
  }

  function handleReset() {
    setUserName('');
    setCrushName('');
    setResultStage('input');
    setVerdict('');
    setDmLine('');
    setShowVerdictCard(false);
    setHeartsOn(false);
    setTimeout(() => {
      if (input1Ref.current) input1Ref.current.focus();
    }, 120);
  }

  // UI color palette
  const pastelList = [
    '#FFD1DC', // pink
    '#F5DCFF', // lavender
    '#E1F6FC', // pale blue
    '#FFF9C7', // pale yellow
    '#C5F1DD', // mint
    '#FFE1F0'  // blush
  ];
  // For dynamic bg and heart pastel color
  function pastelPick(idx) { return pastelList[idx % pastelList.length]; }

  // Sparkle heart animation utility
  const renderHearts = () => {
    return (
      <>
        {[1,2,3,4,5,6,7].map(i =>
          <span key={i}
            className={'coM-heart-float heart'+i}
            style={{
              left: (10+(i*11))+'%',
              animationDelay: (i*0.5)+'s',
              color: pastelPick(i)
            }}>
            <svg width="34" height="28" viewBox="0 0 34 28" fill="none"><path d="M17 25s-14-8.35-14-15.38C3 4.59 7.27 2 11.13 2A8.06 8.06 0 0117 6.71 8.06 8.06 0 0122.87 2C26.73 2 31 4.59 31 9.62 31 16.65 17 25 17 25z" 
              fill="currentColor" opacity="0.68"/>
            </svg>
          </span>
        )}
      </>
    );
  };

  // Sparkle overlay for result
  const SparkleAnim = () => (
    <span className="coM-sparkle">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <g>
          <path d="M18 4.5L20.25 15.75L31.5 18L20.25 20.25L18 31.5L15.75 20.25L4.5 18L15.75 15.75L18 4.5Z"
            fill="#ffe0ed" fillOpacity="0.82"/>
        </g>
      </svg>
    </span>
  );

  return (
    <div className="crushOMeter-root">
      <div className="coM-heading">
        <span className="coM-glow-shadow">Crush-O-Meter <span role="img" aria-label="love">💘</span></span>
        <span className="coM-heading-anim">*</span>
        <div className="coM-hearts-anim">{renderHearts()}</div>
      </div>

      <form className="coM-form" autoComplete="off" onSubmit={handleScan}>
        <div className="coM-inputbox-set">
          <input
            type="text"
            className="coM-input"
            style={{background: pastelPick(0)}}
            ref={input1Ref}
            value={userName}
            disabled={resultStage==="scanned"}
            placeholder="Your Name"
            maxLength={18}
            autoFocus
            onChange={e=>setUserName(e.target.value)}
          />
          <input
            type="text"
            className="coM-input"
            style={{background: pastelPick(1)}}
            ref={input2Ref}
            value={crushName}
            disabled={resultStage==="scanned"}
            placeholder="Crush's Name"
            maxLength={18}
            onChange={e=>setCrushName(e.target.value)}
          />
        </div>
        { resultStage === "input" &&
          (<button
            className="coM-btn-scan"
            type="submit"
            aria-label="Scan the Vibe!">
            <span className="coM-heart-btn">
              <span className="coM-heart-icon">💖</span>
            </span>
            <span className="coM-btn-label">Scan the Vibe</span>
          </button>)
        }
      </form>

      {/* Animated result */}
      <div className="coM-result-section">
        { resultStage === "scanned" && (
          <div
            className={
              "coM-result-card" +
              (showVerdictCard ? " coM-result-reveal anim-pop" : "")
            }
            style={{background: pastelPick(3)}}>
              { showVerdictCard
                  ? (<>
                      <div className="coM-result-icon"><SparkleAnim /></div>
                      <div className="coM-result-main">
                        <span className="coM-result-from">{userName.trim() || "You"}</span>
                        <span className="coM-vs">&nbsp; &amp; &nbsp;</span>
                        <span className="coM-result-to">{crushName.trim() || "?"}</span>
                      </div>
                      <div className="coM-verdict">{verdict}</div>
                    </>)
                  : null
              }
          </div>
        )}
        {heartsOn && <div className="coM-result-hearts">{renderHearts()}</div>}
      </div>

      {/* Flirty DM / Pickup Bubble */}
      { resultStage === "scanned" && (
        <div className="coM-dm-section">
          <div className={
            "coM-dm-bubble" +
            (dmAnimating ? " dm-pop" : "")
          }
            style={{ background: pastelPick(5) }}>
            { dmLine
              ? (<>
                  <span className="coM-sparkle-tiny"><SparkleAnim /></span>
                  {dmLine}
                </>)
              : (<span>
                  <span className="coM-sparkle-tiny"><SparkleAnim /></span>
                  Wanna DM them? Get your flirty opening line!
                </span>)
            }
          </div>
          <button
            type="button"
            className="coM-btn-dm"
            style={{background: pastelPick(2)}}
            onClick={getPickup}>
            <span role="img" aria-label="sparkle">💬</span> Get Flirty DM
          </button>
        </div>
      )}

      {/* RESET */}
      { resultStage === "scanned" &&
        <button
          className="coM-btn-reset"
          type="button"
          onClick={handleReset}
          style={{background: pastelPick(4)}}>
          <span role="img" aria-label="reset">🔄</span> Start Over
        </button>
      }
    </div>
  );
}

export default CrushOMeter;

