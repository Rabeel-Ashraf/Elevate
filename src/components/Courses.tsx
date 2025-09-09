import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Package, Shield, TrendingUp, ExternalLink } from 'lucide-react';

const Courses: React.FC = () => {
  const courses = [
    {
      icon: ShoppingCart,
      title: 'Shopify Mastery',
      description: 'Learn to build, customize, and scale profitable Shopify stores from scratch. Master themes, apps, and advanced e-commerce strategies.',
      features: ['Store Setup & Design', 'Product Management', 'Marketing Automation', 'Advanced Analytics'],
      link: 'https://whatsapp.com/channel/0029VazrkAC7oQhlRJdkBH3e',
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      icon: Package,
      title: 'Amazon Dropshipping',
      description: 'Master the art of Amazon dropshipping with proven strategies for product research, supplier management, and profit optimization.',
      features: ['Product Research', 'Supplier Relations', 'Inventory Management', 'Sales Optimization'],
      link: 'https://whatsapp.com/channel/0029VazrkAC7oQhlRJdkBH3e',
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-50'
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Ethical Hacking',
      description: 'Comprehensive cybersecurity training covering ethical hacking, penetration testing, and security best practices.',
      features: ['Penetration Testing', 'Network Security', 'Vulnerability Assessment', 'Security Frameworks'],
      link: 'https://whatsapp.com/channel/0029Vb67HbM1XquadAXGPn3n',
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50'
    },
    {
      icon: TrendingUp,
      title: 'Business Growth Tips & Tricks',
      description: 'Strategic business insights, growth hacking techniques, and entrepreneurial wisdom for scaling your ventures.',
      features: ['Growth Strategies', 'Market Analysis', 'Leadership Skills', 'Financial Planning'],
      link: 'https://whatsapp.com/channel/0029VazrkAC7oQhlRJdkBH3e',
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50'
    }
  ];

  const openWhatsApp = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of professional courses designed to elevate your skills and career prospects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${course.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${course.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <course.icon className="w-8 h-8 text-white" />
                </div>
                <motion.button
                  onClick={() => openWhatsApp(course.link)}
                  className={`px-4 py-2 bg-gradient-to-r ${course.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 group/btn`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Now
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {course.title}
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {course.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 mb-3">What you'll learn:</h4>
                {course.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${course.gradient} rounded-full`}></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-blue-100 mb-6">Join thousands of successful students who have transformed their careers with ElevateX</p>
            <motion.button
              onClick={() => openWhatsApp('https://whatsapp.com/channel/0029VazrkAC7oQhlRJdkBH3e')}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
