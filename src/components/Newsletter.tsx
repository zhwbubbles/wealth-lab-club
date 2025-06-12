export  default function Newsletter() {
  return (
    <section className="bg-primary py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Subscribe to Real's Substack</h2>
          <p className="text-gray-400 mb-8">
            Get daily market updates, trading insights, and cryptocurrency news directly in your inbox. Stay ahead of the market.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="https://realerose.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary text-lg px-6 py-3"
            >
              Subscribe to Substack
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            We respect your privacy and will never share your information.
          </div>
        </div>
      </div>
    </section>
  );
}
  