import  { ArrowRight, Book, Lock, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BitcoinCrypto() {
  const topics = [
    "Bitcoin origins and history",
    "Blockchain fundamentals",
    "Public and private keys",
    "Cryptography basics",
    "Consensus mechanisms",
    "Cryptocurrency wallets",
    "Altcoins and tokenomics",
    "DeFi fundamentals",
    "NFTs and digital ownership",
    "Market cycles and investment strategies"
  ];

  const modules = [
    {
      id: 1,
      title: "Introduction to Bitcoin",
      description: "Understand the history, purpose, and fundamental technology behind Bitcoin.",
      icon: <Book />
    },
    {
      id: 2,
      title: "Blockchain Technology",
      description: "Learn how blockchain works and why it's revolutionary for digital transactions.",
      icon: <Lock />
    },
    {
      id: 3,
      title: "The Cryptocurrency Ecosystem",
      description: "Explore the broader landscape of digital assets beyond Bitcoin.",
      icon: <Globe />
    },
    {
      id: 4,
      title: "Security and Best Practices",
      description: "Essential knowledge to protect your digital assets from threats and scams.",
      icon: <Shield />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-primary-dark">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="text-white">
                <div className="inline-flex items-center justify-center px-4 py-1 mb-6 rounded-full bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 text-sm">
                  <span className="gradient-text font-medium">Coming Soon</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Bitcoin & Crypto 101
                </h1>
                <p className="text-lg text-gray-300 mb-6">
                  A comprehensive introduction to Bitcoin, blockchain technology, and the fundamentals of cryptocurrency for beginners.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-primary-light/50 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-800">
                    <span className="text-white font-medium">20+ Video Lessons</span>
                  </div>
                  <div className="bg-primary-light/50 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-800">
                    <span className="text-white font-medium">10+ Hours Content</span>
                  </div>
                  <div className="bg-primary-light/50 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-800">
                    <span className="text-white font-medium">Beginner Friendly</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn btn-primary opacity-75 cursor-not-allowed">
                    Coming Soon
                  </button>
                  <Link to="/about" className="btn btn-outline">
                    Join Waitlist
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10 md:hidden"></div>
              <img 
                src="https://images.unsplash.com/photo-1629537060162-41ff48997d2d?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxjcnlwdG9jdXJyZW5jeSUyMHRyYWRpbmclMjBhbmFseXNpcyUyMHByb2Zlc3Npb25hbCUyMGRhcmslMjBibHVlJTIwZ3JlZW4lMjBjaGFydHxlbnwwfHx8fDE3NDY1NDcyMDh8MA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
                alt="Bitcoin and Cryptocurrency Concept" 
                className="rounded-lg shadow-xl w-full border border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Course Overview</h2>
            <p className="text-gray-300 mb-12 text-center">
              Our Bitcoin & Crypto 101 course is designed for beginners who want to understand the foundational concepts of cryptocurrency and blockchain technology.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {modules.map((module) => (
                <div key={module.id} className="bg-primary-light p-6 rounded-lg border border-gray-800">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 text-gradient-mid">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Module {module.id}: {module.title}</h3>
                  <p className="text-gray-400">{module.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-primary-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">What You'll Learn</h2>
            <p className="text-gray-300 mb-12 text-center">
              By the end of this course, you'll have a comprehensive understanding of cryptocurrency concepts and be ready to navigate the crypto ecosystem with confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topics.map((topic, index) => (
                <div key={index} className="flex items-start bg-primary/60 p-4 rounded-lg">
                  <svg className="h-6 w-6 text-gradient-mid mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-gradient-start/10 via-gradient-mid/10 to-gradient-end/10 p-8 md:p-12 rounded-lg border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-6">Be First to Know When We Launch</h2>
              <p className="text-gray-300 mb-8">
                Join our waitlist to be notified when Bitcoin & Crypto 101 becomes available. Early registrants will receive special pricing and bonus content.
              </p>
              <form className="max-w-md mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow newsletter-input"
                    required
                  />
                  <button
                    type="submit"
                    className="btn btn-primary whitespace-nowrap"
                  >
                    Join Waitlist
                  </button>
                </div>
              </form>
              <p className="text-sm text-gray-500">
                In the meantime, check out our <Link to="/courses/futures-trading" className="text-gradient-mid hover:underline">Futures Trading Masterclass</Link> which is available now.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
  