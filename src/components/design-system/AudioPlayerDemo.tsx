import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { PlayButton } from '../ui/PlayButton';
import { Button } from '../ui/Button';
import { useAudio } from '../ui/GlobalAudioPlayer';
import { Music, Play, Pause, SkipBack, SkipForward, Volume2, Headphones, Radio, Disc3 } from 'lucide-react';

export function AudioPlayerDemo() {
  const { currentTrack, isPlaying, pauseTrack, resumeTrack, nextTrack, prevTrack, playlist } = useAudio();

  const demoTracks = [
    {
      id: 'ambient-1',
      title: 'Forest Whispers',
      artist: 'Nature Sounds',
      duration: '4:32',
      genre: 'Ambient',
      description: 'Peaceful forest sounds with gentle wind and bird songs'
    },
    {
      id: 'electronic-1',
      title: 'Neon Dreams',
      artist: 'Synthwave Collective',
      duration: '3:45',
      genre: 'Electronic',
      description: 'Retro synthwave with pulsing beats and nostalgic melodies'
    },
    {
      id: 'lofi-1',
      title: 'Midnight Study',
      artist: 'Lo-Fi Beats',
      duration: '2:58',
      genre: 'Lo-Fi',
      description: 'Relaxing lo-fi hip hop perfect for studying or working'
    },
    {
      id: 'classical-1',
      title: 'Digital Symphony',
      artist: 'Modern Orchestra',
      duration: '5:12',
      genre: 'Classical',
      description: 'Contemporary classical piece with electronic elements'
    },
    {
      id: 'jazz-1',
      title: 'City Lights',
      artist: 'Urban Jazz Trio',
      duration: '4:18',
      genre: 'Jazz',
      description: 'Smooth jazz with urban influences and modern production'
    },
    {
      id: 'rock-1',
      title: 'Electric Horizon',
      artist: 'Digital Rock Band',
      duration: '3:33',
      genre: 'Rock',
      description: 'High-energy rock with electronic guitar effects'
    },
    {
      id: 'ambient-2',
      title: 'Ocean Waves',
      artist: 'Coastal Sounds',
      duration: '6:45',
      genre: 'Ambient',
      description: 'Calming ocean waves with seagull calls and gentle breeze'
    },
    {
      id: 'electronic-2',
      title: 'Cyber Pulse',
      artist: 'Future Bass',
      duration: '3:21',
      genre: 'Electronic',
      description: 'Futuristic electronic music with heavy bass and synth leads'
    }
  ];

  const genreGroups = demoTracks.reduce((groups, track) => {
    const genre = track.genre;
    if (!groups[genre]) {
      groups[genre] = [];
    }
    groups[genre].push(track);
    return groups;
  }, {} as Record<string, typeof demoTracks>);

  const genreIcons = {
    'Ambient': Headphones,
    'Electronic': Disc3,
    'Lo-Fi': Radio,
    'Classical': Music,
    'Jazz': Music,
    'Rock': Music
  };

  const genreColors = {
    'Ambient': 'success',
    'Electronic': 'primary',
    'Lo-Fi': 'secondary',
    'Classical': 'accent',
    'Jazz': 'warning',
    'Rock': 'error'
  } as const;

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Global Audio Player Demo</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Experience our global audio player with a curated collection of tracks. Click any play button to start listening!
        </p>
      </div>

      <div className="grid gap-8">
        {/* Player Status */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white mb-4">Player Status</CardTitle>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {currentTrack ? (
                <>
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-basement text-white text-lg">{currentTrack.title}</h3>
                    <p className="text-white/80 font-kabel">{currentTrack.artist}</p>
                    <Badge variant="glass" className="mt-1">
                      {isPlaying ? 'Playing' : 'Paused'}
                    </Badge>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Music className="w-8 h-8 text-white/60" />
                  </div>
                  <p className="text-white/80 font-kabel">No track selected</p>
                  <p className="text-white/60 font-kabel text-sm">Choose a track below to start listening</p>
                </div>
              )}
            </div>
            
            {currentTrack && (
              <div className="flex items-center space-x-3">
                <Button variant="glass" size="sm" onClick={prevTrack} disabled={playlist.length === 0}>
                  <SkipBack size={16} />
                </Button>
                <Button 
                  variant="glass" 
                  size="lg" 
                  onClick={isPlaying ? pauseTrack : resumeTrack}
                  className="w-12 h-12 rounded-full"
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </Button>
                <Button variant="glass" size="sm" onClick={nextTrack} disabled={playlist.length === 0}>
                  <SkipForward size={16} />
                </Button>
              </div>
            )}
          </div>
        </Card>

        {/* Quick Play Section */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Quick Play</CardTitle>
          <CardDescription className="font-kabel">Popular tracks to get you started</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {demoTracks.slice(0, 4).map((track) => (
                <div key={track.id} className="p-4 glass-card rounded-lg text-center group hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Music className="w-8 h-8 text-primary-400" />
                  </div>
                  <h4 className="font-basement text-foreground text-sm mb-1">{track.title}</h4>
                  <p className="text-xs text-muted-foreground font-kabel mb-3">{track.artist}</p>
                  <PlayButton 
                    track={track}
                    variant="gradient"
                    size="sm"
                    className="w-full"
                  >
                    <Play size={14} className="mr-2" />
                    Play
                  </PlayButton>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Genre Collections */}
        {Object.entries(genreGroups).map(([genre, tracks]) => {
          const Icon = genreIcons[genre as keyof typeof genreIcons] || Music;
          const colorVariant = genreColors[genre as keyof typeof genreColors];
          
          return (
            <Card key={genre} variant="default" padding="lg" blockReveal>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-primary-500/20 rounded-lg border border-primary-500/30">
                  <Icon className="h-6 w-6 text-primary-400" />
                </div>
                <div>
                  <CardTitle className="font-basement">{genre} Collection</CardTitle>
                  <CardDescription className="font-kabel">{tracks.length} tracks available</CardDescription>
                </div>
              </div>
              
              <CardContent>
                <div className="space-y-3">
                  {tracks.map((track, index) => (
                    <div key={track.id} className="flex items-center justify-between p-4 glass-card rounded-lg hover:bg-muted/50 transition-colors group">
                      <div className="flex items-center space-x-4 flex-1 min-w-0">
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-3">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-basement text-foreground text-sm truncate">{track.title}</h4>
                              <p className="text-xs text-muted-foreground font-kabel truncate">{track.artist}</p>
                            </div>
                            <div className="flex items-center space-x-3 flex-shrink-0">
                              <Badge variant={colorVariant} className="text-xs">
                                {track.duration}
                              </Badge>
                              <PlayButton 
                                track={track}
                                variant="ghost"
                                size="sm"
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Play size={14} />
                              </PlayButton>
                            </div>
                          </div>
                          {track.description && (
                            <p className="text-xs text-muted-foreground font-kabel mt-1 line-clamp-1">
                              {track.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* Player Features */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Player Features</CardTitle>
          <CardDescription className="font-kabel">What makes our global audio player special</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4 glass-card rounded-lg">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Volume2 className="w-6 h-6 text-primary-400" />
                </div>
                <h4 className="font-basement text-foreground mb-2">Visual Equalizer</h4>
                <p className="text-xs text-muted-foreground font-kabel">
                  Real-time visual feedback with animated bars that respond to the music
                </p>
              </div>
              
              <div className="text-center p-4 glass-card rounded-lg">
                <div className="w-12 h-12 bg-secondary-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Play className="w-6 h-6 text-secondary-400" />
                </div>
                <h4 className="font-basement text-foreground mb-2">Global Playback</h4>
                <p className="text-xs text-muted-foreground font-kabel">
                  Play tracks from anywhere in the app - music continues as you navigate
                </p>
              </div>
              
              <div className="text-center p-4 glass-card rounded-lg">
                <div className="w-12 h-12 bg-accent-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Disc3 className="w-6 h-6 text-accent-400" />
                </div>
                <h4 className="font-basement text-foreground mb-2">Smart Playlists</h4>
                <p className="text-xs text-muted-foreground font-kabel">
                  Automatically builds playlists as you play tracks with seamless transitions
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Instructions */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">How to Use</CardTitle>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold font-basement flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="font-basement text-foreground mb-1">Click Any Play Button</h4>
                  <p className="text-sm text-muted-foreground font-kabel">
                    Click any play button on this page to start playing a track in the global player at the bottom of the screen.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary-500 text-white rounded-full flex items-center justify-center text-xs font-bold font-basement flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="font-basement text-foreground mb-1">Watch the Equalizer</h4>
                  <p className="text-sm text-muted-foreground font-kabel">
                    The visual equalizer in the center of the player animates in real-time with the music playback.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent-500 text-white rounded-full flex items-center justify-center text-xs font-bold font-basement flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="font-basement text-foreground mb-1">Navigate Freely</h4>
                  <p className="text-sm text-muted-foreground font-kabel">
                    Music continues playing as you navigate to other sections of the design system.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-warning-500 text-white rounded-full flex items-center justify-center text-xs font-bold font-basement flex-shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <h4 className="font-basement text-foreground mb-1">Control Playback</h4>
                  <p className="text-sm text-muted-foreground font-kabel">
                    Use the controls in the global player or the status card above to pause, skip, or adjust volume.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}