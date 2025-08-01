import  React from 'react';

export default function About() {
   const teamMembers = [
    {
      name: "Real Rose",
      title: "Founder. Bitcoin and Spot trading expert",
      image: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/8fe61478-6be6-4e07-b26e-5fc826d04100/public",
      description: "Entrepreneur and investor with 17+ years of managing commercial assets. Current ventures are Bitcoin Treasury and Wealth Lab."
    },
    {
      name: "Eric Okenchukwu",
      title: "Futures Trading and Technical Analysis",
      image: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/69de3075-b188-4066-3b49-11fd70180a00/public",
      description: "With a detailed study and focus on price action and chart patterns across various asset classes, Eric has developed effective, real-world trading strategies that deliver results."
    },
    {
      name: "Xavier Humblet",
      title: "Options and Futures Trading Expert",
      image: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/cc5b3ba8-bc63-4f69-0b04-34c86c0b9b00/public",
      description: "Xavier has spent 20+ years moving from big-desk derivatives to crypto, launching Canada's first crypto-derivatives fund and guiding teams through every market turn."
    },
    {
      name: "Zahwah Jameel",
      title: "Manager",
      image: "https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/f8edc231-1383-42c0-f5be-0aa97a1e7200/public",
      description: "Results-driven manager who turns vision into clear plans, leads teams with creativity and precision, and leverages hands-on crypto expertise to drive innovative outcomes."
    }
  ];
 

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-24 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 gradient-text mt-16">About Wealth Lab</h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8">
              At Wealth Lab, we're on a mission to democratize cryptocurrency education and empower individuals with the knowledge and skills needed to navigate the dynamic world of digital assets and trading.
            </p>
            
            <p className="text-gray-300 mb-8">
              Founded by a team of experienced traders and cryptocurrency experts, Wealth Lab bridges the gap between complex financial concepts and practical, actionable strategies that anyone can implement. We believe that quality education should be accessible to everyone, regardless of their background or experience level.
            </p>
            
            <p className="text-gray-300 mb-12">
              Our comprehensive courses are designed to take you from beginner to advanced levels, providing you with the tools, strategies, and insights needed to make informed decisions in the cryptocurrency and futures markets.
            </p>
          </div>
          
          <div className="my-16">
            <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Meet Our Experts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-105">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-gray-400 mb-3">{member.title}</p>
                    <p className="text-gray-300 text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="my-16">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Our Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-800 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Practical Knowledge</h3>
                <p className="text-gray-300">
                  We focus on real-world applications and strategies that you can implement immediately after completing our courses.
                </p>
              </div>
              
              <div className="bg-gray-800 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Expert Guidance</h3>
                <p className="text-gray-300">
                  Learn directly from industry professionals with years of experience in cryptocurrency and trading markets.
                </p>
              </div>
              
              <div className="bg-gray-800 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Community Support</h3>
                <p className="text-gray-300">
                  Join a community of like-minded individuals on the same journey, sharing insights and strategies.
                </p>
              </div>
            </div>
          </div>
          
          <div className="my-16">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Our Values</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-blue-500 to-green-400 rounded-full p-3 mr-5 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Education First</h3>
                  <p className="text-gray-300">
                    We believe that educated traders make better decisions. Our primary focus is on providing high-quality, comprehensive education that empowers you to navigate the markets confidently.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-blue-500 to-green-400 rounded-full p-3 mr-5 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-gray-300">
                    The cryptocurrency and trading landscapes are constantly evolving. We stay ahead of trends and continuously update our curriculum to reflect the latest developments and strategies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-blue-500 to-green-400 rounded-full p-3 mr-5 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Community</h3>
                  <p className="text-gray-300">
                    We're building more than just courses – we're creating a community of traders who support each other, share insights, and grow together in their trading journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="my-16">
            <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Our Moderators</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-105">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/d938e0c9-91b0-4ffa-c415-76ab18dee100/public" 
                    alt="Loveth" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">Loveth</h3>
                  <p className="text-gray-400 mb-3">Community Moderator</p>
                  <p className="text-gray-300 text-sm">
                    Cryptocurrency trader and educator who energises WhatsApp, Telegram, and Discord communities by sharing clear market insights, enforcing rules, and onboarding new users.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-105">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/12a71bcc-8ef4-4232-9e33-66552cc5ad00/public" 
                    alt="Victor Dominic" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">Victor Dominic</h3>
                  <p className="text-gray-400 mb-3">Technical Support Moderator</p>
                  <p className="text-gray-300 text-sm">
                    Victor has been active in the crypto space since 2022, first entering through NFTs. He is also a researcher and writer with a focus on web3 and blockchain. His experience includes NFT trading, futures trading, meme coin trading, and spot market activity.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-105">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/a6f5060f-880c-4582-13a5-30bd31f8db00/public" 
                    alt="Michael" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">Michael</h3>
                  <p className="text-gray-400 mb-3">Content Moderator</p>
                  <p className="text-gray-300 text-sm">
                    Crypto content strategist who distills research on 100+ Web3 tokens into clear insights for everyday users, then unwinds with fiction and football.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  