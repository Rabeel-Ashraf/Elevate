import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, BookOpen, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Expert-Led Training',
      description: 'Learn from industry professionals with real-world experience'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join thousands of learners in our active WhatsApp communities'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Content',
      description: 'From beginner basics to advanced strategies across multiple domains'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Our students consistently achieve their professional goals'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ElevateX</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ElevateX By Zaid (ExZ) is your gateway to professional growth and digital mastery. 
            We specialize in delivering high-quality education across Shopify development, 
            Amazon dropshipping, cybersecurity, and business growth strategies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose ElevateX?
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At ElevateX, we believe in empowering individuals with practical, 
                industry-relevant skills. Our courses are designed by experts who 
                understand the current market demands and future trends.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you're a complete beginner or looking to advance your 
                existing skills, our comprehensive curriculum and supportive 
                community will help you achieve your goals.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-700 mb-4">Students Enrolled</div>
                <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-700 mb-4">Success Rate</div>
                <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-700">Community Support</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
