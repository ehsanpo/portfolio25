import React, { useState, useRef, useEffect } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Badge } from './Badge';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  SkipBack, 
  SkipForward,
  Settings,
  Download,
  Share2,
  Heart,
  MoreHorizontal
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface VideoSource {
  src: string;
  quality: '480p' | '720p' | '1080p' | '4K';
  type?: string;
}

interface VideoPlayerProps {
  title?: string;
  description?: string;
  thumbnail?: string;
  sources: VideoSource[];
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  variant?: 'default' | 'minimal' | 'cinema';
  aspectRatio?: '16:9' | '4:3' | '1:1' | '21:9';
  showInfo?: boolean;
  allowDownload?: boolean;
  className?: string;
}

export function VideoPlayer({
  title,
  description,
  thumbnail,
  sources,
  poster,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  variant = 'default',
  aspectRatio = '16:9',
  showInfo = true,
  allowDownload = false,
  className,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(muted);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [currentQuality, setCurrentQuality] = useState(sources[0]?.quality || '720p');
  const [isLiked, setIsLiked] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleDurationChange = () => setDuration(video.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleVolumeChange = () => {
      setVolume(video.volume);
      setIsMuted(video.muted);
    };
    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('durationchange', handleDurationChange);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('volumechange', handleVolumeChange);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('durationchange', handleDurationChange);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('volumechange', handleVolumeChange);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    video.currentTime = newTime;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!isFullscreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const skip = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = Math.max(0, Math.min(duration, video.currentTime + seconds));
  };

  const changeQuality = (quality: string) => {
    const video = videoRef.current;
    if (!video) return;

    const currentTimeBackup = video.currentTime;
    const wasPlaying = !video.paused;

    const newSource = sources.find(s => s.quality === quality);
    if (newSource) {
      video.src = newSource.src;
      video.currentTime = currentTimeBackup;
      setCurrentQuality(quality as any);
      
      if (wasPlaying) {
        video.play();
      }
    }
    setShowSettings(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const handleShare = async () => {
    if (navigator.share && sources[0]) {
      try {
        await navigator.share({
          title: title || 'Video',
          text: description,
          url: sources[0].src,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  const handleDownload = () => {
    const currentSource = sources.find(s => s.quality === currentQuality) || sources[0];
    if (currentSource) {
      const link = document.createElement('a');
      link.href = currentSource.src;
      link.download = `${title || 'video'}.mp4`;
      link.click();
    }
  };

  const getAspectRatioClass = () => {
    const ratios = {
      '16:9': 'aspect-video',
      '4:3': 'aspect-[4/3]',
      '1:1': 'aspect-square',
      '21:9': 'aspect-[21/9]',
    };
    return ratios[aspectRatio];
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <Card 
      variant={variant === 'cinema' ? 'default' : 'glass'} 
      className={cn(
        'relative overflow-hidden group',
        variant === 'cinema' && 'bg-black',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      {/* Video Element */}
      <div className={cn('relative', getAspectRatioClass())}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={poster || thumbnail}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline
        >
          {sources.map((source, index) => (
            <source key={index} src={source.src} type={source.type || 'video/mp4'} />
          ))}
          Your browser does not support the video tag.
        </video>

        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        )}

        {/* Play Button Overlay */}
        {!isPlaying && !isLoading && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <Button
              variant="glass"
              size="lg"
              onClick={togglePlay}
              className="w-20 h-20 rounded-full text-white hover:scale-110 transition-transform"
            >
              <Play size={32} className="ml-1" />
            </Button>
          </div>
        )}

        {/* Controls Overlay */}
        {controls && (
          <div className={cn(
            'absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 transition-opacity duration-300',
            showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
          )}>
            {/* Top Controls */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {title && (
                  <h3 className="text-white font-basement text-lg">{title}</h3>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant="glass"
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                  className="text-white"
                >
                  <Heart size={16} className={isLiked ? 'fill-current text-error-500' : ''} />
                </Button>
                <Button
                  variant="glass"
                  size="sm"
                  onClick={handleShare}
                  className="text-white"
                >
                  <Share2 size={16} />
                </Button>
                {allowDownload && (
                  <Button
                    variant="glass"
                    size="sm"
                    onClick={handleDownload}
                    className="text-white"
                  >
                    <Download size={16} />
                  </Button>
                )}
                <Button
                  variant="glass"
                  size="sm"
                  className="text-white"
                >
                  <MoreHorizontal size={16} />
                </Button>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-4 left-4 right-4">
              {/* Progress Bar */}
              <div 
                className="w-full h-2 bg-white/30 rounded-full cursor-pointer mb-4 group/progress"
                onClick={handleSeek}
              >
                <div 
                  className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all duration-150 group-hover/progress:h-3"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Button
                    variant="glass"
                    size="sm"
                    onClick={togglePlay}
                    className="text-white"
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </Button>
                  
                  <Button
                    variant="glass"
                    size="sm"
                    onClick={() => skip(-10)}
                    className="text-white"
                  >
                    <SkipBack size={16} />
                  </Button>
                  
                  <Button
                    variant="glass"
                    size="sm"
                    onClick={() => skip(10)}
                    className="text-white"
                  >
                    <SkipForward size={16} />
                  </Button>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="glass"
                      size="sm"
                      onClick={toggleMute}
                      className="text-white"
                    >
                      {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </Button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <div className="text-white text-sm font-kabel">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Quality Settings */}
                  <div className="relative">
                    <Button
                      variant="glass"
                      size="sm"
                      onClick={() => setShowSettings(!showSettings)}
                      className="text-white"
                    >
                      <Settings size={16} />
                    </Button>
                    
                    {showSettings && (
                      <div className="absolute bottom-full right-0 mb-2 bg-black/90 rounded-lg p-2 min-w-[120px]">
                        <div className="text-white text-xs font-kabel mb-2">Quality</div>
                        {sources.map((source) => (
                          <button
                            key={source.quality}
                            onClick={() => changeQuality(source.quality)}
                            className={cn(
                              'block w-full text-left px-2 py-1 text-xs font-kabel rounded transition-colors',
                              currentQuality === source.quality 
                                ? 'bg-primary-500 text-white' 
                                : 'text-white/80 hover:bg-white/20'
                            )}
                          >
                            {source.quality}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <Button
                    variant="glass"
                    size="sm"
                    onClick={toggleFullscreen}
                    className="text-white"
                  >
                    {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quality Badge */}
        {variant !== 'minimal' && (
          <div className="absolute top-4 right-4">
            <Badge variant="glass" className="text-white">
              {currentQuality}
            </Badge>
          </div>
        )}
      </div>

      {/* Video Info */}
      {showInfo && variant !== 'minimal' && (title || description) && (
        <div className="p-4">
          {title && (
            <h3 className="font-basement text-foreground text-lg mb-2">{title}</h3>
          )}
          {description && (
            <p className="text-muted-foreground font-kabel text-sm">{description}</p>
          )}
        </div>
      )}
    </Card>
  );
}