import React, { useState, useEffect } from 'react';
import {
  Play, ArrowRight, CheckCircle, MessageCircle,
  Building, Triangle, X, Github, Instagram, Sparkles,
  Zap, Globe, Shield, Clock, Users
} from 'lucide-react';

// Mock PricingTable component
const PricingTable = () => (
  <div className="py-20 px-6 bg-gradient-to-br from-slate-50 to-gray-100" id='pricing'>
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan for your needs. Scale as you grow.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Starter Plan */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
            <div className="text-4xl font-bold text-gray-900 mb-1">Free</div>
            <p className="text-gray-600 mb-6">Perfect for getting started</p>
            <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl border-2 border-gray-800 transform scale-105 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 text-sm font-medium">
            Most Popular
          </div>
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <div className="text-4xl font-bold mb-1">$29<span className="text-lg font-normal">/month</span></div>
            <p className="text-gray-300 mb-6">For growing teams</p>
            <button className="w-full bg-white text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Start Free Trial
            </button>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
            <div className="text-4xl font-bold text-gray-900 mb-1">Custom</div>
            <p className="text-gray-600 mb-6">For large organizations</p>
            <button className="w-full border-2 border-gray-900 text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-900 hover:text-white transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { icon: Zap, title: "Lightning Fast", desc: "Deploy in seconds with zero configuration" },
    { icon: Globe, title: "Global Edge", desc: "Worldwide CDN for optimal performance" },
    { icon: Shield, title: "Enterprise Security", desc: "Bank-grade security and compliance" },
    { icon: Users, title: "Team Collaboration", desc: "Built for teams of all sizes" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 text-gray-900 relative overflow-hidden" id='/'>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            left: '10%',
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            top: '60%',
            right: '10%',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        {/* Geometric Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-96 h-96 border-2 border-gray-400 transform rotate-12 animate-pulse"></div>
          <div className="absolute w-64 h-64 border border-gray-500 transform -rotate-12 animate-pulse delay-1000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-2 mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Server Cloud Platform</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Build and deploy on the{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Server Cloud
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            World-class Server development tools and cloud infrastructure to build, scale, and deploy
            <span className="font-semibold text-gray-900"> AI-first applications</span> that adapt to your users.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-gray-900 to-gray-700 text-white px-10 py-4 rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Start Building
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group text-gray-900 border-2 border-gray-300 px-10 py-4 rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300 hover:border-gray-900 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Book a Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">10M+</div>
              <div className="text-gray-600">Deployments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Develop with your favorite tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Launch globally, iterate quickly ⚡ Keep pushing boundaries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="group bg-white/80 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    From localhost to Planet
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Deploy from your IDE with zero configuration. Scale globally instantly.
                </p>
                <div className="space-y-4">
                  {['Instant deployment', 'Global edge network', 'Automatic scaling'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    AI-First Development
                  </h3>
                </div>
                <p className="text-gray-600 text-lg">
                  Every conversation becomes part of your AI. Turn ideas into applications with intelligent tools.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-gray-400 text-sm">Terminal</span>
                </div>

                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400">$</span>
                    <span className="text-white">Server-cloud deploy</span>
                  </div>
                  <div className="text-gray-300 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Building application...</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                      <span>Optimizing for production...</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span>Deploying to global edge...</span>
                    </div>
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <span>🚀</span>
                      <span>Live at https://your-app.ai-cloud.dev</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group text-center p-6 rounded-xl hover:bg-white/80 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingTable />

      {/* About Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white" id="about">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            About Server Cloud
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-gray-200">
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Welcome to <span className="font-bold text-gray-900">Server Cloud</span>, your ultimate platform for AI-powered development.
              Our platform combines cutting-edge AI tools with enterprise-grade infrastructure to deliver
              <span className="font-semibold text-blue-600"> seamless, scalable solutions</span>.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Lightning Fast</h3>
                    <p className="text-gray-600">High-speed performance with minimal latency for optimal user experience.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Enterprise Security</h3>
                    <p className="text-gray-600">Bank-grade security and compliance to keep your data safe.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Team Collaboration</h3>
                    <p className="text-gray-600">Built for teams of all sizes with seamless collaboration tools.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock assistance from our dedicated support team.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to transform your development?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of developers building the future with Server Cloud. Start your journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-white text-gray-900 px-10 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 justify-center font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-white to-gray-50" id="contact">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We're here to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Product Support</h3>
              </div>
              <p className="text-gray-600 mb-8 text-lg">
                Get help from our community and dedicated support team for all your technical questions.
              </p>
              <div className="flex items-center justify-between">
                <button className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-3 rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Support
                </button>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600 font-medium">All systems operational</span>
                </div>
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Sales Team</h3>
              </div>
              <p className="text-gray-600 mb-8 text-lg">
                Discuss your requirements, explore custom pricing, or schedule a personalized demo.
              </p>
              <button className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-3 rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Contact Sales
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-xl hover:bg-white/80 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <X className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Follow us on X</h3>
              <p className="text-gray-600 mb-4">Get the latest news and updates</p>
              <button className="text-gray-900 border-2 border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300">
                @Azzunique_
              </button>
            </div>

            <div className="text-center p-6 rounded-xl hover:bg-white/80 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Follow on Instagram</h3>
              <p className="text-gray-600 mb-4">Behind the scenes content</p>
              <button className="text-gray-900 border-2 border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300">
                @azzunique_software
              </button>
            </div>

            <div className="text-center p-6 rounded-xl hover:bg-white/80 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Open Source</h3>
              <p className="text-gray-600 mb-4">Contribute to our projects</p>
              <button className="text-gray-900 border-2 border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300">
                View on GitHub
              </button>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold mb-6">Ready to get started?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Begin your AI development journey today with our free tier, or speak with our team about enterprise solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  Start Building Free
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}