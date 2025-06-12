export  default function Testimonials() {
   const testimonials = [
    {
      id: 1,
      name: "Jean Marie Ndimbira",
      location: "Namibia",
      quote: "It was the first time for me to be introduced to bitcoin in an elaborate way. I understood the stuff and I enjoyed Real's course."
    },
    {
      id: 2,
      name: "Carmen Chang",
      location: "Lauderhill, Florida, USA",
      quote: "I took the Bitcoin 101 seminar with Mr Real in January 2022. It gave me a better understanding of how Bitcoin works as a monetary system. I highly recommend taking the course."
    },
    {
      id: 3,
      name: "Patrick David",
      location: "Brooklyn, NY",
      quote: "I've taken Real's Bitcoin & Crypto 101 course and it was a true learning experience. From terms to strategy and coming to a concrete understanding as to where we are moving towards in this new market. I will continuously encourage all that wish to learn, to seek out his courses. You will not regret it."
    },
    {
      id: 4,
      name: "Patrizio Sanzari",
      location: "Montreal, Canada",
      quote: "Real's three-weekend course was a great introduction to the Bitcoin and Crypto world, and I left feeling less intimidated about the topic at hand. It provided an in-depth understanding of what cryptocurrency is and how Bitcoin and cryptocurrency works. I am looking forward to taking more classes, and I highly recommend this one."
    },
    {
      id: 5,
      name: "Miki Jahkar",
      location: "Montréal, Canada",
      quote: "I was always interested in investing in Bitcoin, but I intimidated by the confusing information available online. This course was perfect for me, it allowed me to learn and understand the history of bitcoin, it also gave me the tools and the confidence to invest for my benefit. This course is highly informative yet it is simple and unpretentious - I highly recommend it!"
    },
    {
      id: 6,
      name: "Dorian King",
      location: "",
      quote: "One conversation with Real kickstarted my crypto journey. Prior to signing up for his beginner course, my curiosity was peaking and my limited learnings came from scattered information on the web. I needed guidance and I needed to learn the basics. Real's Bitcoin & Crypto 101 Seminar gave me the education I needed to gain understanding, clarity and direction. Most importantly I gained the confidence to put plans into action. I've since formulated my own investment strategy and am now on the road to setting up my family for a successful future. I'm thankful and I highly recommend The Real Crypto Academy"
    }
  ];
    

  return (
    <section id="testimonials" className="section bg-primary">
      <div className="container">
        <h2 className="section-title text-center">What Our Students Say</h2>
        <p className="section-subtitle text-center">
          Join thousands of satisfied students who have transformed their approach to cryptocurrency trading and investing.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-primary-light p-8 rounded-lg shadow-md relative border border-gray-800">
              <svg className="h-8 w-8 text-gradient-mid/20 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <blockquote className="text-gray-300 italic mb-6">"{testimonial.quote}"</blockquote>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                <p className="text-gray-400 text-sm">{testimonial.location}</p>
              </div>
              <div className="mt-4 flex">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-gradient-mid" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  