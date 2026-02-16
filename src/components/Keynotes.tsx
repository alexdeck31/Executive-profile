import React, { useState } from 'react';
import Section from './ui/Section';
import { VIDEOS } from '../constants';
import { Play, X } from 'lucide-react';
import { Video } from '../types';

const Keynotes: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <Section id="keynotes" className="bg-black">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 max-w-6xl mx-auto px-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Keynotes &</h2>
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Public Speaking</h2>
        </div>
        <p className="text-slate-400 max-w-sm mt-4 md:mt-0 text-right">
          Sharing insights during Keynotes and international conferences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {VIDEOS.map((video) => (
          <div 
            key={video.id} 
            className="group relative rounded-2xl overflow-hidden aspect-video cursor-pointer border border-white/10"
            onClick={() => setSelectedVideo(video)}
          >
            <img 
              src={video.thumbnail} 
              alt={video.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                <Play className="fill-white text-white ml-1" size={24} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="text-xl font-bold text-white mb-1">{video.title}</h3>
              <p className="text-sm text-slate-300 line-clamp-1">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4">
          <button 
            className="absolute top-6 right-6 text-white hover:text-cyan-400 transition-colors"
            onClick={() => setSelectedVideo(null)}
          >
            <X size={32} />
          </button>
          <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`} 
              title={selectedVideo.title}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Keynotes;