import React, { useState } from 'react';
import { X, Calendar, MapPin, Ruler, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { ProjectItem } from '../../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquireAboutProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquireAboutProject }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  if (!project) return null;

  const allImages = [project.imageUrl, ...(project.galleryImages || [])];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-8 text-slate-800">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors"
          title="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Showcase */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full bg-slate-100 overflow-hidden">
          <img
            src={allImages[activeImageIndex]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

          {/* Badges on Hero */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-3 text-white">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500 text-slate-950 uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/20 backdrop-blur-xs text-white">
                  {project.deliveryMethod}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/20 backdrop-blur-xs text-white">
                  {project.year}
                </span>
              </div>
              <h2 className="text-xl sm:text-3xl font-display font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-slate-300 mt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {project.location}
                </span>
                {project.client && (
                  <span>• Client: {project.client}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector */}
        {allImages.length > 1 && (
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex gap-2 overflow-x-auto">
            {allImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative h-16 w-24 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                  activeImageIndex === idx ? 'border-amber-600 scale-102' : 'border-slate-200 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900">Project Overview</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
            <div className="space-y-1">
              <span className="text-slate-400 font-mono block">AREA / SCOPE</span>
              <strong className="text-slate-900 font-bold block">{project.specs.sqft}</strong>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400 font-mono block">TIMELINE</span>
              <strong className="text-slate-900 font-bold block">{project.specs.timeline}</strong>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400 font-mono block">DIVISION LEAD</span>
              <strong className="text-slate-900 font-bold block">{project.specs.engineerOrFabricator}</strong>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400 font-mono block">COMPLETION</span>
              <strong className="text-slate-900 font-bold block">{project.year}</strong>
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Key Highlights & Deliverables:
            </h4>
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              href={`https://wa.me/27710826359?text=Hello%20Grange%20Construction,%20I%20saw%20your%20project%20${encodeURIComponent(project.title)}%20in%20Cape%20Town%20and%20would%20like%20a%20similar%20quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp About Similar Project</span>
            </a>

            <a
              href="#contact"
              onClick={() => {
                onClose();
                onInquireAboutProject(project.title);
              }}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-2"
            >
              <span>Request Quote for Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
