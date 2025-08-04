import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="fade-in">
    {/* Hero Section */}
    <section className="text-center py-20 mb-16">
      <div className="max-w-4xl mx-auto">
        <div className="float mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 slide-up">
          Welcome to <span className="text-gradient">ZAMXTRON</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light leading-relaxed slide-up">
          Your reliable technology partner for <span className="font-semibold text-blue-600 dark:text-blue-400">websites</span>, 
          <span className="font-semibold text-purple-600 dark:text-purple-400"> apps</span>, 
          <span className="font-semibold text-cyan-600 dark:text-cyan-400"> automation</span>, and 
          <span className="font-semibold text-green-600 dark:text-green-400"> AI-powered platforms</span>.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 slide-up">
          <Link to="/services" className="btn-primary text-lg py-4 px-8">
            Explore Our Services
            <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link to="/contact" className="btn-outline text-lg py-4 px-8">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Why Choose <span className="text-gradient">ZAMXTRON</span>?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We deliver cutting-edge solutions that drive your business forward
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="card card-hover p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Web Development</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Creating stunning, responsive websites that convert visitors into customers with modern technologies and best practices.
          </p>
        </div>
        
        <div className="card card-hover p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">App Development</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Building powerful, intuitive mobile applications for iOS and Android that deliver exceptional user experiences.
          </p>
        </div>
        
        <div className="card card-hover p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">AI Solutions</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Leveraging artificial intelligence to automate processes, gain insights, and drive innovation in your business.
          </p>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="card p-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-none">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Ready to Transform Your Ideas?
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        Let's collaborate to bring your vision to life with innovative technology solutions.
      </p>
      <Link to="/contact" className="btn-secondary text-lg py-4 px-8">
        Start Your Project Today
        <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    </section>
  </div>
);

export default Home;
