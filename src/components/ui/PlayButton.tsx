import React from 'react';
import { Button } from './Button';
import { Play } from 'lucide-react';
import { useAudio } from './GlobalAudioPlayer';

interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  src?: string;
}

interface PlayButtonProps {
  track: Track;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export function PlayButton({ 
  track, 
  variant = 'glass', 
  size = 'sm', 
  className,
  children 
}: PlayButtonProps) {
  const { playTrack } = useAudio();

  const handlePlay = () => {
    playTrack(track);
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handlePlay}
      className={className}
    >
      {children || (
        <>
          <Play size={16} />
          Play
        </>
      )}
    </Button>
  );
}