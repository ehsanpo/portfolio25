import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../../ui/Card';
import { AudioPlayer } from '../../ui/AudioPlayer';
import { ImageGallery } from '../../ui/ImageGallery';
import { VideoPlayer } from '../../ui/VideoPlayer';
import { PlayButton } from '../../ui/PlayButton';

export function MediaShowcase() {
  const sampleTracks = [
    { id: '1', title: 'Component Demo', artist: 'Design System', duration: '2:30' },
    { id: '2', title: 'Interactive Elements', artist: 'UI Library', duration: '1:45' },
    { id: '3', title: 'Ambient Soundscape', artist: 'Nature Sounds', duration: '4:30' },
    { id: '4', title: 'Electronic Vibes', artist: 'Synth Wave', duration: '3:45' },
  ];

  const sampleImages = [
    {
      id: '1',
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Modern workspace setup',
      title: 'Creative Workspace',
      description: 'A beautifully organized modern workspace with natural lighting',
      photographer: 'Pexels Photographer',
      tags: ['workspace', 'design', 'modern']
    },
    {
      id: '2',
      src: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Design tools and materials',
      title: 'Design Tools',
      description: 'Essential tools for creative professionals',
      photographer: 'Pexels Photographer',
      tags: ['tools', 'creative', 'design']
    },
    {
      id: '3',
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Team collaboration',
      title: 'Team Meeting',
      description: 'Collaborative design session with the team',
      photographer: 'Pexels Photographer',
      tags: ['team', 'collaboration', 'meeting']
    },
    {
      id: '4',
      src: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Digital interface design',
      title: 'UI Design',
      description: 'Modern user interface design on screen',
      photographer: 'Pexels Photographer',
      tags: ['ui', 'digital', 'interface']
    },
    {
      id: '5',
      src: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Brand identity materials',
      title: 'Brand Identity',
      description: 'Complete brand identity design materials',
      photographer: 'Pexels Photographer',
      tags: ['branding', 'identity', 'materials']
    },
    {
      id: '6',
      src: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Creative process',
      title: 'Creative Process',
      description: 'Behind the scenes of the creative design process',
      photographer: 'Pexels Photographer',
      tags: ['process', 'creative', 'behind-scenes']
    }
  ];

  const sampleVideoSources = [
    { src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_720x480_1mb.mp4', quality: '480p' as const },
    { src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4', quality: '720p' as const },
  ];

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Media Components</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Rich media components for audio, video, and image content with interactive features and beautiful styling.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Audio Players */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Audio Players</CardTitle>
          <CardDescription className="font-kabel">Interactive audio components and global player integration</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Global Audio Player Integration</h4>
                <p className="text-sm text-muted-foreground font-kabel mb-4">
                  Click any play button to start playing in the global player at the bottom of the screen.
                </p>
                <div className="flex flex-wrap gap-3">
                  <PlayButton 
                    track={{ 
                      id: 'track-1', 
                      title: 'Ambient Soundscape', 
                      artist: 'Nature Sounds', 
                      duration: '4:30' 
                    }}
                    variant="gradient"
                  />
                  <PlayButton 
                    track={{ 
                      id: 'track-2', 
                      title: 'Electronic Vibes', 
                      artist: 'Synth Wave', 
                      duration: '3:45' 
                    }}
                    variant="glass"
                  />
                  <PlayButton 
                    track={{ 
                      id: 'track-3', 
                      title: 'Chill Beats', 
                      artist: 'Lo-Fi Hip Hop', 
                      duration: '5:12' 
                    }}
                    variant="outline"
                  />
                </div>
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Single Track Player</h4>
                <AudioPlayer 
                  tracks={[sampleTracks[0]]}
                  variant="single"
                />
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Album Player</h4>
                <AudioPlayer 
                  tracks={sampleTracks}
                  albumTitle="Component Showcase"
                  albumArtist="Design System"
                  variant="album"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Image Gallery */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Image Gallery</CardTitle>
          <CardDescription className="font-kabel">Interactive photo galleries with lightbox and multiple layouts</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Grid Layout</h4>
                <ImageGallery 
                  images={sampleImages.slice(0, 6)}
                  variant="grid"
                  columns={3}
                  showTags={true}
                  showInfo={true}
                  allowDownload={true}
                />
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Masonry Layout</h4>
                <ImageGallery 
                  images={sampleImages.slice(0, 4)}
                  variant="masonry"
                  columns={3}
                  showTags={true}
                  showInfo={true}
                />
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Carousel Layout</h4>
                <ImageGallery 
                  images={sampleImages}
                  variant="carousel"
                  showTags={false}
                  showInfo={true}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Video Player */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Video Player</CardTitle>
          <CardDescription className="font-kabel">Custom video player with quality selection and full controls</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Default Player</h4>
                <VideoPlayer
                  title="Design System Demo"
                  description="A comprehensive overview of our design system components and features"
                  sources={sampleVideoSources}
                  poster="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  variant="default"
                  aspectRatio="16:9"
                  showInfo={true}
                  allowDownload={true}
                />
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Minimal Player</h4>
                <VideoPlayer
                  sources={sampleVideoSources}
                  variant="minimal"
                  aspectRatio="16:9"
                  showInfo={false}
                />
              </div>
              
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Cinema Mode</h4>
                <VideoPlayer
                  title="Cinema Experience"
                  sources={sampleVideoSources}
                  variant="cinema"
                  aspectRatio="21:9"
                  showInfo={true}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Media Best Practices */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Media Best Practices</CardTitle>
          <CardDescription className="font-kabel text-white/80 mb-6">
            Guidelines for implementing media components effectively
          </CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">✓ Do</h4>
                <ul className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>• Optimize images for web (WebP format)</li>
                  <li>• Provide alt text for all images</li>
                  <li>• Use appropriate aspect ratios</li>
                  <li>• Implement lazy loading for performance</li>
                  <li>• Provide multiple video quality options</li>
                  <li>• Include keyboard navigation support</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">✗ Don't</h4>
                <ul className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>• Auto-play videos with sound</li>
                  <li>• Use overly large image files</li>
                  <li>• Forget mobile responsiveness</li>
                  <li>• Skip accessibility considerations</li>
                  <li>• Use media without proper licensing</li>
                  <li>• Overwhelm users with too many media elements</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}