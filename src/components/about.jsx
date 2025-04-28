import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiHeart, FiGlobe, FiImage } from 'react-icons/fi';
import { HiLightBulb, HiCode, HiColorSwatch, HiSpeakerphone, HiCog } from 'react-icons/hi';

const AboutUs = () => {
  const stats = [
    { number: '10K+', label: 'Artists', icon: FiUsers },
    { number: '50K+', label: 'Artworks', icon: FiAward },
    { number: '100K+', label: 'Happy Customers', icon: FiHeart },
    { number: '150+', label: 'Countries', icon: FiGlobe },
  ];

  const features = [
    {
      title: 'Curated Art Collection',
      description: 'Discover unique artworks from talented artists around the world, carefully selected to ensure quality and authenticity.',
      icon: '🎨',
    },
    {
      title: 'Secure Transactions',
      description: 'Shop with confidence using our secure payment system and buyer protection policies.',
      icon: '🔒',
    },
    {
      title: 'Artist Support',
      description: 'We provide artists with the tools and platform they need to showcase and sell their work globally.',
      icon: '👨‍🎨',
    },
    {
      title: 'Global Shipping',
      description: 'We offer worldwide shipping with careful packaging to ensure your artwork arrives safely.',
      icon: '🌍',
    },
  ];

  const teamMembers = [
    {
      name: 'Yash Suthar',
      role: 'Founder & CEO',
      icon: HiLightBulb,
      description: 'Visionary leader with a passion for connecting artists and art enthusiasts. Driving innovation in the art marketplace.',
      expertise: ['Strategic Planning', 'Business Development', 'Team Leadership'],
    },
    {
      name: 'Karm Patel',
      role: 'Head of Technology',
      icon: HiCode,
      description: 'Tech expert focused on creating seamless digital experiences for artists and buyers.',
      expertise: ['Full Stack Development', 'System Architecture', 'Technical Innovation'],
    },
    {
      name: 'Yuvraj Parmar',
      role: 'Art Curation Director',
      icon: HiColorSwatch,
      description: 'Art connoisseur dedicated to discovering and promoting exceptional artistic talent.',
      expertise: ['Art Curation', 'Artist Relations', 'Quality Assurance'],
    },
    {
      name: 'Krish Rathod',
      role: 'Marketing & Community Manager',
      icon: HiSpeakerphone,
      description: 'Creative marketer building strong connections between artists and art lovers.',
      expertise: ['Digital Marketing', 'Community Building', 'Brand Strategy'],
    },
    {
      name: 'Harsh Patel',
      role: 'Operations Director',
      icon: HiCog,
      description: 'Operations expert ensuring smooth platform functionality and user satisfaction.',
      expertise: ['Process Optimization', 'Customer Experience', 'Logistics Management'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              About Craftera
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We're on a mission to connect artists with art lovers, creating a global marketplace
              where creativity thrives and unique artworks find their perfect homes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-neutral-900" />
                </div>
                <div className="text-3xl font-bold text-neutral-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Our Story
              </h2>
              <p className="text-neutral-600 mb-6">
                Craftera was born from a simple idea: to create a platform where artists could
                showcase their work to a global audience and art lovers could discover unique
                pieces that speak to their souls.
              </p>
              <p className="text-neutral-600">
                Today, we're proud to be a thriving community of artists and art enthusiasts,
                connecting through the universal language of creativity.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden bg-neutral-50 flex items-center justify-center">
              <div className="text-center p-8">
                <FiImage className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Our Journey</h3>
                <p className="text-neutral-600">
                  From humble beginnings to a global art marketplace, we've been connecting
                  artists and art lovers since 2023.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
            Why Choose Craftera
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <member.icon className="w-10 h-10 text-neutral-900" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {member.name}
                    </h3>
                    <p className="text-neutral-600">{member.role}</p>
                  </div>
                </div>
                <p className="text-neutral-600 mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-neutral-100 text-neutral-600 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Creative Community
          </h2>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Whether you're an artist looking to showcase your work or an art lover
            seeking unique pieces, Craftera is the perfect platform for you.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/signup"
              className="px-6 py-3 bg-white text-neutral-900 rounded-lg font-medium hover:bg-neutral-100 transition-colors duration-200"
            >
              Get Started
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;