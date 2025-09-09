import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Shield, BookOpen, ExternalLink } from 'lucide-react';

const WhatsAppAndBlog: React.FC = () => {
  const links = [
    {
      icon: MessageCircle,
      title: 'Tips & Tricks Channel',
      description: 'Get daily tips, strategies, and insights for Shopify, Amazon, and business growth',
      link: 'https://whatsapp.com/channel/0029VazrkAC7oQhlRJdkBH3e',
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Channel',
      description: 'Latest cybersecurity news, ethical hacking tutorials, and security best practices',
      link: 'https://whatsapp.com/channel/0029Vb67HbM1XquadAXGPn3n',
      gradient: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50'
    },
    {
      icon: Users,
      title: 'WhatsApp Community Group',
      description: 'Connect with fellow learners, ask questions, and share your success stories',
      link: 'https://chat.whatsapp.com/FufXJ619MAIArsedDmWJdE?mode=ac_t',
      gradient: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      icon: BookOpen,
      title: 'ElevateX Blog',
      description: 'Read detailed articles, tutorials, and industry insights on our official blog',
      link: 'https://elevatexbyzaidexz.blogspot.com/?m=1',
      gradient: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50'
    }
  ];

  const openLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="community">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with thousands of learners, get exclusive content, and stay updated with the latest industry trends
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {links.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${item.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
              onClick={() => openLink(item.link)}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <motion.div
                  className={`px-4 py-2 bg-gradient-to-r ${item.gradient} text-white rounded-lg flex items-center gap-2 group-hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.05 }}
                >
                  Join Now
                  <ExternalLink className="w-4 h-4" />
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our growing community of over 1,000+ students and professionals. 
              Get instant access to exclusive content, live sessions, and direct support from our expert team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                onClick={() => openLink('https://whatsapp.com/channel/0029VazrkAC7oQhlRJdkBH3e')}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Tips Channel
              </motion.button>
              <motion.button
                onClick={() => openLink('https://chat.whatsapp.com/FufXJ619MAIArsedDmWJdE?mode=ac_t')}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Community
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppAndBlog;
