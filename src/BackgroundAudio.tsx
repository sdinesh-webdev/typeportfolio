import React, { useEffect, useRef } from 'react';

const BackgroundAudio: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handlePlayAudio = () => {
        const audio = audioRef.current;
        if (audio) {
            audio.play().catch((error) => {
                console.error("Audio playback failed:", error);
            });
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = 0.5; // Set volume to 50%
            audio.loop = true;   // Enable looping
            audio.addEventListener('error', (e) => {
                console.error("Audio error:", e);
            });
        }
    }, []);

    return (
        <div>
            <audio ref={audioRef} src="../assets/BigD.mp3"/>
            <button onClick={handlePlayAudio}>Play Audio</button>
        </div>
    );
};

export default BackgroundAudio;