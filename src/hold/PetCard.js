import React from 'react'
import useSound from 'use-sound'
import soundUrl from './beep.mp3'

function PetCard() {
    
  
    const [playbackRate, setPlaybackRate] = React.useState(0.75);
  
    const [play] = useSound(soundUrl, {
      playbackRate,
      volume: 0.5,
    });
  
    const handleClick = () => {
      setPlaybackRate(playbackRate + 0.1);
      play();
    };
  
    return (
      <button onClick={handleClick}>
        <span role="img" aria-label="Heart">
          💖
        </span>
      </button>
     
    );
  }

export default PetCard