import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardTitle } from './Card';
import { Button } from './Button';
import { Badge } from './Badge';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Repeat, Shuffle, Heart, MoreHorizontal } from 'lucide-react';
import { cn } from '../../utils/cn';

interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  src?: string;
}

interface AudioPlayerProps {
  tracks: Track[];
  albumTitle?: string;
  albumArtist?: string;
  albumCover?: string;
  variant?: 'single' | 'album';
  className?: string;
}

export function AudioPlayer({ 
  tracks, 
  albumTitle, 
  albumArtist, 
  albumCover,
  variant = 'album',
  className 
}: AudioPlayerProps) {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState<'off' | 'all' | 'one'>('off');
  const [isLiked, setIsLiked] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Simulate audio progress for demo
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          if (newTime >= 180) { // 3 minutes demo duration
            setIsPlaying(false);
            return 0;
          }
          return newTime;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  useEffect(() => {
    setDuration(180); // 3 minutes demo duration
  }, [currentTrack]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    if (currentTrack < tracks.length - 1) {
      setCurrentTrack(currentTrack + 1);
      setCurrentTime(0);
    }
  };

  const prevTrack = () => {
    if (currentTrack > 0) {
      setCurrentTrack(currentTrack - 1);
      setCurrentTime(0);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled);
  };

  const toggleRepeat = () => {
    const modes: ('off' | 'all' | 'one')[] = ['off', 'all', 'one'];
    const currentIndex = modes.indexOf(repeatMode);
    setRepeatMode(modes[(currentIndex + 1) % modes.length]);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * duration;
      setCurrentTime(newTime);
    }
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (variant === 'single') {
    return (
      <Card variant="glass" className={cn('max-w-md', className)}>
        <div className="p-6">
          {/* Album Art */}
          <div className="aspect-square bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg mb-4 flex items-center justify-center">
            <div className="text-4xl">🎵</div>
          </div>

          {/* Track Info */}
          <div className="text-center mb-4">
            <h3 className="font-basement text-foreground text-lg mb-1">{tracks[0]?.title}</h3>
            <p className="text-muted-foreground font-kabel text-sm">{tracks[0]?.artist}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div 
              ref={progressRef}
              className="h-2 bg-muted rounded-full cursor-pointer mb-2"
              onClick={handleProgressClick}
            >
              <div 
                className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground font-kabel">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-4">
            <Button variant="ghost" size="sm" onClick={toggleShuffle}>
              <Shuffle size={16} className={isShuffled ? 'text-primary-500' : ''} />
            </Button>
            
            <Button variant="ghost" size="sm" onClick={prevTrack} disabled={currentTrack === 0}>
              <SkipBack size={20} />
            </Button>
            
            <Button 
              variant="gradient" 
              size="lg" 
              onClick={togglePlay}
              className="w-12 h-12 rounded-full"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </Button>
            
            <Button variant="ghost" size="sm" onClick={nextTrack} disabled={currentTrack === tracks.length - 1}>
              <SkipForward size={20} />
            </Button>
            
            <Button variant="ghost" size="sm" onClick={toggleRepeat}>
              <Repeat size={16} className={repeatMode !== 'off' ? 'text-primary-500' : ''} />
            </Button>
          </div>

          {/* Volume & Actions */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={toggleMute}>
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </Button>
              <div className="w-16 h-1 bg-muted rounded-full">
                <div 
                  className="h-full bg-primary-500 rounded-full"
                  style={{ width: `${isMuted ? 0 : volume * 100}%` }}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={() => setIsLiked(!isLiked)}>
                <Heart size={16} className={isLiked ? 'text-error-500 fill-current' : ''} />
              </Button>
              <Button variant="ghost" size="sm">
                <MoreHorizontal size={16} />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card variant="glass" className={cn('max-w-2xl', className)}>
      <div className="p-6">
        {/* Album Header */}
        <div className="flex items-start space-x-4 mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <div className="text-2xl">🎵</div>
          </div>
          <div className="flex-1">
            <h2 className="font-basement text-foreground text-xl mb-1">{albumTitle}</h2>
            <p className="text-muted-foreground font-kabel mb-2">{albumArtist}</p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground font-kabel">
              <span>{tracks.length} tracks</span>
              <span>45 min</span>
              <Badge variant="primary" className="text-xs">Album</Badge>
            </div>
          </div>
        </div>

        {/* Current Track Display */}
        <div className="mb-4 p-4 glass-card rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-basement text-foreground">{tracks[currentTrack]?.title}</h3>
              <p className="text-sm text-muted-foreground font-kabel">{tracks[currentTrack]?.artist}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsLiked(!isLiked)}>
              <Heart size={16} className={isLiked ? 'text-error-500 fill-current' : ''} />
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="mb-3">
            <div 
              ref={progressRef}
              className="h-2 bg-muted rounded-full cursor-pointer mb-2"
              onClick={handleProgressClick}
            >
              <div 
                className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground font-kabel">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={toggleShuffle}>
                <Shuffle size={16} className={isShuffled ? 'text-primary-500' : ''} />
              </Button>
              <Button variant="ghost" size="sm" onClick={toggleRepeat}>
                <Repeat size={16} className={repeatMode !== 'off' ? 'text-primary-500' : ''} />
              </Button>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" onClick={prevTrack} disabled={currentTrack === 0}>
                <SkipBack size={20} />
              </Button>
              
              <Button 
                variant="gradient" 
                size="lg" 
                onClick={togglePlay}
                className="w-12 h-12 rounded-full"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </Button>
              
              <Button variant="ghost" size="sm" onClick={nextTrack} disabled={currentTrack === tracks.length - 1}>
                <SkipForward size={20} />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={toggleMute}>
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </Button>
              <div className="w-16 h-1 bg-muted rounded-full">
                <div 
                  className="h-full bg-primary-500 rounded-full"
                  style={{ width: `${isMuted ? 0 : volume * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Track List */}
        <div className="space-y-1">
          <h4 className="font-basement text-foreground mb-3">Tracks</h4>
          {tracks.map((track, index) => (
            <div 
              key={track.id}
              className={cn(
                'flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200',
                'hover:bg-muted/50',
                currentTrack === index ? 'bg-primary-500/10 border border-primary-500/30' : ''
              )}
              onClick={() => {
                setCurrentTrack(index);
                setCurrentTime(0);
              }}
            >
              <div className="w-8 text-center">
                {currentTrack === index && isPlaying ? (
                  <div className="flex space-x-1 items-center justify-center">
                    <div className="w-1 h-3 bg-primary-500 animate-pulse"></div>
                    <div className="w-1 h-2 bg-primary-500 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1 h-4 bg-primary-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                ) : (
                  <span className="text-sm text-muted-foreground font-kabel">{index + 1}</span>
                )}
              </div>
              <div className="flex-1">
                <div className="font-basement text-foreground text-sm">{track.title}</div>
                <div className="text-xs text-muted-foreground font-kabel">{track.artist}</div>
              </div>
              <div className="text-xs text-muted-foreground font-kabel">{track.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}