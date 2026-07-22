import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, ArrowRight, Clock, Search, Tag, X, CheckCircle, Share2, MessageCircle, PhoneCall, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { blogPosts, BlogPost } from '../data/blogPosts';
import { BlogPostSkeleton } from '../components/Skeletons';

export const BlogPage = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalPost, setActiveModalPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 350);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);

  // Handle URL path /blog/:id
  React.useEffect(() => {
    if (id) {
      const found = blogPosts.find(p => p.id === Number(id) || p.slug === id);
      if (found) {
        setActiveModalPost(found);
      }
    } else {
      setActiveModalPost(null);
    }
  }, [id]);

  const categories = ["Tous", "Conseils Auto", "Santé", "Habitation", "Professionnel", "Épargne", "Prévoyance", "Actualités"];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === "Tous" || post.category === selectedCategory;
      const matchesSearch = searchQuery.trim() === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const openPostModal = (post: BlogPost) => {
    setActiveModalPost(post);
    navigate(`/blog/${post.id}`, { replace: false });
  };

  const closeModal = () => {
    setActiveModalPost(null);
    navigate('/blog', { replace: false });
  };

  const handleShareWhatsApp = (post: BlogPost) => {
    const text = encodeURIComponent(`Découvrez cet article d'Assurances Touzini AXA : "${post.title}" - https://axa-agent.ma/blog/${post.id}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="pt-24 pb-24 bg-slate-50 min-h-screen bg-tile-pattern">
      <Helmet>
        <title>Blog & Conseils Assurance Maroc | Assurances Touzini Agent AXA</title>
        <meta name="description" content="Guides pratiques, actualités et conseils d'experts sur l'assurance Auto, Santé, Habitation et Pro au Maroc par Assurances Touzini, Agent Général AXA." />
      </Helmet>

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden bg-tile-pattern-dark">
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-axa-red font-bold tracking-widest uppercase text-xs sm:text-sm inline-block mb-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md"
          >
            Guide & Expertise Assurance
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-balance"
          >
            Conseils d'Experts pour Votre Protection au Maroc
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Comprenez vos garanties, découvrez les astuces pour faire des économies et restez informé des évolutions du secteur de l'assurance avec Assurances Touzini.
          </motion.p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input 
              type="text"
              placeholder="Rechercher un sujet (ex: Auto, Tiers Payant, Défiscalisation)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-full bg-white text-slate-900 placeholder-slate-400 font-medium focus:outline-none focus:ring-4 focus:ring-axa-blue/40 shadow-xl"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={22} />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-12">
        {/* Category Filters */}
        <div className="flex justify-center gap-2.5 flex-wrap mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm ${
                selectedCategory === cat
                  ? "bg-axa-blue text-white shadow-axa-blue/30 shadow-md scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Grid Header */}
        <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
          <h2 className="text-xl font-bold text-slate-900">
            {selectedCategory === "Tous" ? "Tous nos articles récents" : `Articles dans "${selectedCategory}"`}
            <span className="text-slate-400 font-normal ml-2 text-sm">({filteredPosts.length})</span>
          </h2>
        </div>

        {/* Article Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Array.from({ length: 6 }).map((_, idx) => (
              <BlogPostSkeleton key={idx} />
            ))}
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-200 flex flex-col"
              >
                <div className="h-60 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-axa-blue shadow-md">
                    {post.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] px-2.5 py-0.5 rounded-md flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-3 font-medium">
                      <span className="flex items-center gap-1"><Calendar size={13} />{post.date}</span>
                      <span className="flex items-center gap-1"><User size={13} />{post.author}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-axa-blue transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="bg-slate-50 text-slate-500 text-[11px] px-2.5 py-0.5 rounded-full border border-slate-200">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button 
                      onClick={() => openPostModal(post)}
                      className="w-full bg-slate-100 hover:bg-axa-blue hover:text-white text-axa-blue font-bold text-sm py-3 rounded-full transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      Lire la suite
                      <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
            <Search className="mx-auto text-slate-300 mb-4" size={48} />
            <h3 className="text-xl font-bold text-slate-800 mb-2">Aucun article trouvé</h3>
            <p className="text-slate-500 mb-6">Essayez avec un autre mot-clé ou modifiez les filtres de catégories.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("Tous"); }}
              className="bg-axa-blue text-white font-bold px-6 py-2.5 rounded-full hover:bg-blue-900 transition-colors"
            >
              Réinitialiser la recherche
            </button>
          </div>
        )}
      </div>

      {/* FULL ARTICLE MODAL READER */}
      <AnimatePresence>
        {activeModalPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative my-auto border border-slate-200 text-slate-900"
            >
              {/* Sticky Top Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md z-20 px-6 sm:px-8 py-4 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-axa-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  {activeModalPost.category}
                </span>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleShareWhatsApp(activeModalPost)}
                    className="p-2 text-slate-500 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors flex items-center gap-1.5 text-xs font-bold"
                    title="Partager sur WhatsApp"
                  >
                    <Share2 size={16} />
                    <span className="hidden sm:inline">Partager</span>
                  </button>
                  <button
                    onClick={closeModal}
                    className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>

              {/* Main Modal Image */}
              <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                <img
                  src={activeModalPost.image}
                  alt={activeModalPost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-4 text-xs text-slate-200 mb-2 font-medium">
                    <span className="flex items-center gap-1"><Calendar size={14} />{activeModalPost.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} />{activeModalPost.readTime}</span>
                    <span className="flex items-center gap-1"><User size={14} />{activeModalPost.author}</span>
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-bold leading-tight text-white">
                    {activeModalPost.title}
                  </h1>
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="p-6 sm:p-10 space-y-8">
                {/* Intro Paragraph */}
                <p className="text-lg text-slate-700 leading-relaxed font-normal bg-blue-50/50 p-6 rounded-2xl border-l-4 border-axa-blue">
                  {activeModalPost.content.intro}
                </p>

                {/* Key Takeaways Box */}
                <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-md">
                  <h3 className="text-base font-bold text-axa-red uppercase tracking-wider mb-4 flex items-center gap-2">
                    <ShieldCheck size={20} className="text-blue-400" />
                    Points clés à retenir :
                  </h3>
                  <ul className="space-y-3">
                    {activeModalPost.keyTakeaways.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-slate-200">
                        <CheckCircle size={18} className="text-blue-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Body Sections */}
                <div className="space-y-8">
                  {activeModalPost.content.sections.map((section, idx) => (
                    <div key={idx} className="space-y-3">
                      <h2 className="text-xl sm:text-2xl font-bold text-axa-blue">
                        {section.heading}
                      </h2>
                      <p className="text-slate-600 leading-relaxed text-base">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Conclusion */}
                <div className="pt-6 border-t border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">En conclusion</h3>
                  <p className="text-slate-600 leading-relaxed italic text-base">
                    "{activeModalPost.content.conclusion}"
                  </p>
                </div>

                {/* Author Card & CTA */}
                <div className="bg-slate-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-200">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-axa-blue text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
                      AT
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{activeModalPost.author}</h4>
                      <p className="text-xs text-slate-500">{activeModalPost.authorRole}</p>
                      <p className="text-xs text-axa-blue mt-1 font-semibold">Conseils & Protection AXA Maroc</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <Link
                      to="/contact"
                      onClick={closeModal}
                      className="bg-axa-red text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full hover:bg-red-700 transition-colors shadow-md text-center flex items-center justify-center gap-2"
                    >
                      <PhoneCall size={16} />
                      Demander un conseil
                    </Link>
                    <a
                      href="https://wa.me/212600000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full hover:bg-green-700 transition-colors shadow-md text-center flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={16} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
