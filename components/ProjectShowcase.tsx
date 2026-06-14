import React, { useState } from 'react';
import { ArrowUpRight, Smartphone, Monitor, Database, LayoutGrid } from 'lucide-react';
import { useTranslation } from '../lib/i18n';
import { Link } from 'react-router-dom';

// -- Types --

type ProjectCategory = 'app' | 'data' | 'web';

interface Project {
  id: number;
  title: string;
  category: string;
  categoryKey: ProjectCategory;
  image: string;
  tags: string[];
  icon: React.ElementType;
  color: string;
}

interface ProjectShowcaseProps {
  /**
   * If true, hides the "View Full Portfolio" link at the bottom.
   * Useful when embedding this component on the Product page itself.
   */
  hideLink?: boolean;
}

/**
 * ProjectShowcase
 * 
 * Displays a grid of selected projects with filtering capabilities.
 * Supports filtering by category (Web, App, Data).
 */
export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ hideLink = false }) => {
  const { t } = useTranslation();
  
  // 'all' represents no specific filter active
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Dahabshiil Remit App",
      category: "Mobile App",
      categoryKey: 'app',
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
      tags: ["React Native", "Node.js", "Fintech"],
      icon: Smartphone,
      color: "bg-brand-green"
    },
    {
      id: 2,
      title: "Hargeisa Water Agency",
      category: "Data Analysis",
      categoryKey: 'data',
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      tags: ["Python", "Tableau", "Big Data"],
      icon: Database,
      color: "bg-brand-red"
    },
    {
      id: 3,
      title: "Somali Chamber of Commerce",
      category: "Web Platform",
      categoryKey: 'web',
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      tags: ["Next.js", "Supabase", "Portal"],
      icon: Monitor,
      color: "bg-brand-black"
    },
    {
      id: 4,
      title: "Berbera Port Logistics",
      category: "Data Analysis",
      categoryKey: 'data',
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
      tags: ["IoT", "Real-time Tracking", "Dashboard"],
      icon: Database,
      color: "bg-blue-600"
    },
    {
      id: 5,
      title: "EduSom E-Learning",
      category: "Web Platform",
      categoryKey: 'web',
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
      tags: ["LMS", "Video Streaming", "React"],
      icon: Monitor,
      color: "bg-orange-500"
    }
  ];

  // Logic to filter projects based on selection
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.categoryKey === activeFilter);

  const filters = [
    { id: 'all', label: 'All Work', icon: LayoutGrid },
    { id: 'web', label: 'Web Platforms', icon: Monitor },
    { id: 'app', label: 'Mobile Apps', icon: Smartphone },
    { id: 'data', label: 'Data & AI', icon: Database },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-green bg-green-50 px-3 py-1 rounded-full border border-green-100 w-fit">
              Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-black">
              Built by Cawiye.
            </h2>
          </div>
          
          {/* Filters Bar */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-brand-black text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <filter.icon size={14} />
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 min-h-[500px]">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer animate-in fade-in zoom-in duration-500">
              
              {/* Image Card Container */}
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] mb-6 border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/10 transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Hover Reveal Arrow */}
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={20} className="text-brand-black" />
                </div>
                
                {/* Floating Icon */}
                <div className={`absolute top-4 left-4 z-20 ${project.color} text-white p-2.5 rounded-xl shadow-lg`}>
                   <project.icon size={20} />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-3 px-2">
                <div className="flex items-center gap-3 text-xs font-medium text-gray-500 uppercase tracking-wide">
                  <span>{project.category}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <div className="flex gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-gray-400">#{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-black group-hover:text-brand-green transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Conditional Footer Link */}
        {!hideLink && (
          <div className="mt-12 text-center">
              <Link to="/product" className="group inline-flex items-center gap-2 text-sm font-bold border-b-2 border-brand-green/20 pb-1 hover:border-brand-green hover:text-brand-green transition-all">
                  View Full Portfolio <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
          </div>
        )}
      </div>
    </section>
  );
};