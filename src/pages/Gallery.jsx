const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    title: "Classroom Learning",
    desc: "Students engaged in focused classroom learning with teacher guidance.",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    title: "Interactive Teaching",
    desc: "Modern teaching methods encouraging student participation.",
  },
  {
    src: "https://media.istockphoto.com/id/1979289151/photo/data-analysis-science-and-big-data-with-ai-technology-analyst-or-scientist-uses-a-computer.jpg?s=2048x2048&w=is&k=20&c=jkSM7Pi0XzQBxhGZUxGC-Y12ZhMKfaeY0Uycs18iTLk=",
    title: "Computer & AI Lab",
    desc: "Hands-on learning with computers and introductory AI education.",
  },
  {
    src: "https://images.unsplash.com/photo-1601933470096-0e34634ffcde",
    title: "Co-Curricular Activities",
    desc: "Activities that promote creativity, teamwork, and confidence.",
  },
  {
    src: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178",
    title: "Group Learning",
    desc: "Collaborative learning to improve communication and teamwork.",
  },
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
    title: "Safe & Secure Campus",
    desc: "A clean, safe, and monitored campus environment for children.",
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          School Gallery
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto opacity-95">
          Discover moments that reflect learning, growth, and campus life at
          Al-Wataniya International School.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 bg-gray-50 text-center">
        <p className="text-gray-600 text-lg">
          Every moment captured reflects our commitment to quality education and values.
        </p>
      </section>

    </div>
  );
};

export default Gallery;
