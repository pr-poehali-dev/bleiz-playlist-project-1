import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  cover: string;
}

const Index = () => {
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLetters, setShowLetters] = useState(false);

  const nickname = "bleiz¹⁰⁵⁰";
  const letters = nickname.split('');

  useEffect(() => {
    setTimeout(() => setShowLetters(true), 300);
  }, []);

  const tracks: Track[] = [
    {
      id: 1,
      title: "Midnight Dreams",
      artist: "bleiz¹⁰⁵⁰",
      duration: "3:24",
      cover: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Neon Lights",
      artist: "bleiz¹⁰⁵⁰",
      duration: "4:12",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Urban Echoes",
      artist: "bleiz¹⁰⁵⁰",
      duration: "3:56",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Digital Soul",
      artist: "bleiz¹⁰⁵⁰",
      duration: "4:45",
      cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Crystal Clear",
      artist: "bleiz¹⁰⁵⁰",
      duration: "3:18",
      cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Cosmic Waves",
      artist: "bleiz¹⁰⁵⁰",
      duration: "5:02",
      cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop"
    }
  ];

  const handlePlayTrack = (trackId: number) => {
    if (currentTrack === trackId && isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentTrack(trackId);
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-7xl md:text-8xl font-bold mb-4 tracking-tight">
            {letters.map((letter, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-300 ${
                  showLetters ? 'animate-letter-pop' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'backwards'
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
          <p className="text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'backwards' }}>
            Music Collection
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Icon name="Music" size={28} className="text-primary" />
            Playlist
          </h2>
        </div>

        <div className="grid gap-4">
          {tracks.map((track, index) => (
            <Card
              key={track.id}
              className="p-4 hover:bg-secondary/50 transition-all duration-300 cursor-pointer group animate-fade-in"
              style={{
                animationDelay: `${1.5 + index * 0.1}s`,
                animationFillMode: 'backwards'
              }}
              onClick={() => handlePlayTrack(track.id)}
            >
              <div className="flex items-center gap-4">
                <div className="relative flex-shrink-0">
                  <img
                    src={track.cover}
                    alt={track.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Icon
                      name={currentTrack === track.id && isPlaying ? "Pause" : "Play"}
                      size={24}
                      className="text-white"
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg truncate">{track.title}</h3>
                  <p className="text-muted-foreground text-sm">{track.artist}</p>
                </div>

                <div className="flex items-center gap-6">
                  <span className="text-muted-foreground text-sm">{track.duration}</span>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary"
                  >
                    <Icon name="Heart" size={20} />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary"
                  >
                    <Icon name="MoreHorizontal" size={20} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {currentTrack && (
          <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 animate-fade-in">
            <div className="container mx-auto max-w-6xl">
              <div className="flex items-center gap-4">
                <img
                  src={tracks.find(t => t.id === currentTrack)?.cover}
                  alt="Now playing"
                  className="w-14 h-14 rounded-lg object-cover"
                />
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold truncate">
                    {tracks.find(t => t.id === currentTrack)?.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {tracks.find(t => t.id === currentTrack)?.artist}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <Icon name="Shuffle" size={20} />
                  </Button>
                  
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <Icon name="SkipBack" size={20} />
                  </Button>
                  
                  <Button
                    variant="default"
                    size="icon"
                    className="w-12 h-12 rounded-full animate-pulse-glow"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPlaying(!isPlaying);
                    }}
                  >
                    <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
                  </Button>
                  
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <Icon name="SkipForward" size={20} />
                  </Button>
                  
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <Icon name="Repeat" size={20} />
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <Icon name="Volume2" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
