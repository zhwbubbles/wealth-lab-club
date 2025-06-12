import  { Book, Database, Clipboard, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section bg-gray-900 pt-40 text-white">
      <div className="container">
        <h2 className="section-title text-center mt-20 text-white">About Wealth Lab</h2>
        <p className="section-subtitle text-center text-gray-300">
          We're on a mission to democratize cryptocurrency education and empower individuals with the knowledge and skills needed to thrive in the digital economy.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-700 hover:border-secondary/20 hover:shadow-md transition-all">
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 text-secondary">
              <Book className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Expert Instructors</h3>
            <p className="text-gray-300">
              Learn from seasoned traders and blockchain experts with years of experience in the cryptocurrency market.
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-700 hover:border-secondary/20 hover:shadow-md transition-all">
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 text-secondary">
              <Database className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Practical Knowledge</h3>
            <p className="text-gray-300">
              Our courses focus on actionable skills that you can apply immediately to your crypto trading and investment strategies.
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-700 hover:border-secondary/20 hover:shadow-md transition-all">
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 text-secondary">
              <Clipboard className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Community Support</h3>
            <p className="text-gray-300">
              Join a thriving community of like-minded individuals to share insights, strategies, and support on your crypto journey.
            </p>
          </div>
        </div>
        
        <div className="mt-20 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <img 
                src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/d46a68d7-8f4a-43fe-f165-70b40a6b3f00/public"  
                alt="Real Rose - Founder & Bitcoin Expert" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <div className="font-semibold">Real Rose</div>
                  <div className="text-sm opacity-80">Founder & Bitcoin Expert</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-gradient-to-r border-b border-gray-700 pb-4">Our Story</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Wealth Lab was founded by Real Rose, a passionate Bitcoin expert and professional trader who recognized the need for quality education in the rapidly evolving blockchain space.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We believe that everyone should have access to the knowledge and tools required to participate successfully in the cryptocurrency revolution, regardless of their background or experience level.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Since our inception, we've helped hundreds of students transform their understanding of digital assets and develop profitable trading strategies.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 flex items-center justify-center text-white">
            <Users className="mr-3 h-6 w-6" />
            Meet Our Experts
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/d46a68d7-8f4a-43fe-f165-70b40a6b3f00/public" 
                  alt="Real Rose" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-1 text-white">Real Rose</h4>
                <p className="text-secondary font-medium text-sm mb-3">Founder & Bitcoin Expert</p>
                <p className="text-gray-300 text-sm">
                  Pioneer in Bitcoin education and cryptocurrency trading with extensive experience in blockchain technologies.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/64b2fe37-f235-4b3f-7fdb-ef8c049b3500/public" 
                  alt="Eric Okenchukwu" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
    
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-1 text-white">Eric Okenchukwu</h4>
                <p className="text-secondary font-medium text-sm mb-3">Futures, Technical Analysis and Options Trading Expert</p>
                <p className="text-gray-300 text-sm">
                  With a detailed study and focus on price action and chart patterns across various asset classes, Eric has developed effective, real-world trading strategies that deliver results.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/f4ffb786-d4bf-4e9e-2566-65d45b041900/public" 
                  alt="Xavier Humblet" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-1 text-white">Xavier Humblet</h4>
                <p className="text-secondary font-medium text-sm mb-3">Options and Futures Trading Expert</p>
                <p className="text-gray-300 text-sm">
                  Xavier has spent 20+ years moving from big-desk derivatives to crypto, launching Canada’s first crypto-derivatives fund and guiding teams through every market turn.He turns that hard-won experience into clear, practical guidance so traders at any level can see the big picture and act with confidence.

                </p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/754676b7-746f-4265-dd35-d85fbae92300/public" 
                  alt="Zahwah Jameel" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-1 text-white">Zahwah Jameel</h4>
                <p className="text-secondary font-medium text-sm mb-3">Manager</p>
                <p className="text-gray-300 text-sm">
                  Oversees operations and coordinates educational initiatives across Wealth Lab's various cryptocurrency and trading programs.
                </p>
              </div>
            </div>
          </div>
        </div>
        
                 <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-10 flex items-center justify-center text-white">
            <Users className="mr-3 h-6 w-6" />
            Our Moderators
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/b7635646-9cdc-493f-6792-58deaf5fba00/public" 
                  alt="Loveth" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-1 text-white">Loveth</h4>
                <p className="text-secondary font-medium text-sm mb-3">Community Moderator</p>
                <p className="text-gray-300 text-sm">
                  Dedicated to creating a supportive learning environment and answering member questions.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/12a71bcc-8ef4-4232-9e33-66552cc5ad00/public" 
                  alt="Victor Dominic" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-1 text-white">Victor Dominic</h4>
                <p className="text-secondary font-medium text-sm mb-3">Technical Support Moderator</p>
                <p className="text-gray-300 text-sm">
                  Victor has been active in the crypto space since 2022, first entering through NFTs. He is also a researcher and writer with a focus on web3 and blockchain. His experience includes NFT trading, futures trading, meme coin trading, and spot market activity.
                </p>
              </div>
            </div>
          </div>
        </div>
 
      </div>
    </section>
  );
}
  