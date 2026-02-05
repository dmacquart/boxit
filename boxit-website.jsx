import React, { useState } from 'react';
import { Box, Calculator, Truck, QrCode, ArrowRight } from 'lucide-react';

export default function BoxItWebsite() {
  const [boxCount, setBoxCount] = useState(5);
  
  const MONTHLY_MEMBERSHIP = 25.00;
  const PRICE_PER_BOX = 15.00;
  
  const calculateTotal = () => {
    return (MONTHLY_MEMBERSHIP + (boxCount * PRICE_PER_BOX)).toFixed(2);
  };
  
  const calculateBoxCost = () => {
    return (boxCount * PRICE_PER_BOX).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&display=swap');
        
        * {
          font-family: 'DM Sans', sans-serif;
        }
        
        .headline {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }
        
        input[type="range"]::-webkit-slider-thumb {
          background: #3B82F6;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          background: #2563EB;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img 
            src="/mnt/user-data/uploads/Boxit_logo.png" 
            alt="Box It Logo" 
            className="h-10 opacity-0 animate-fade-in"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:scale-105 opacity-0 animate-fade-in delay-200">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="headline text-6xl lg:text-7xl font-bold text-slate-900 leading-tight opacity-0 animate-slide-in">
              Storage by the box.
              <span className="text-blue-500"> Simple as that.</span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed opacity-0 animate-slide-in delay-100">
              Stop paying for empty space. Store only what you need with Box It's 
              revolutionary by-the-box storage service.
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-slide-in delay-200">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-500/30">
                Calculate Your Cost
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg">
                How It Works
              </button>
            </div>
          </div>
          
          <div className="relative opacity-0 animate-fade-in delay-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl blur-3xl opacity-20 animate-float"></div>
            <img 
              src="/mnt/user-data/uploads/Boxes.png" 
              alt="Storage Boxes" 
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="headline text-5xl font-bold text-center text-slate-900 mb-16">
            Three simple steps
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Box,
                title: "Pack Your Boxes",
                description: "Use your own boxes. Pack whatever you want to store. We provide QR-coded labels for each box.",
                color: "blue"
              },
              {
                icon: Truck,
                title: "We Pick Up",
                description: "Schedule a pickup time. Our team comes to you and transports your boxes to our secure facility.",
                color: "indigo"
              },
              {
                icon: QrCode,
                title: "Retrieve Anytime",
                description: "Need something? Request delivery through our app. We'll bring your boxes right back to your door.",
                color: "violet"
              }
            ].map((step, i) => (
              <div 
                key={i}
                className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 opacity-0 animate-slide-in"
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-${step.color}-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-${step.color}-500/30`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-12 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="w-8 h-8 text-blue-500" />
              <h2 className="headline text-4xl font-bold text-slate-900">
                Estimate Your Monthly Cost
              </h2>
            </div>
            
            <div className="space-y-8">
              {/* Box Count Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-lg font-semibold text-slate-700">
                    Number of Boxes
                  </label>
                  <span className="headline text-3xl font-bold text-blue-500">
                    {boxCount}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="25"
                  value={boxCount}
                  onChange={(e) => setBoxCount(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-slate-500 mt-2">
                  <span>1 box</span>
                  <span>25 boxes</span>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                  <span className="text-slate-600 font-medium">Monthly Membership</span>
                  <span className="text-2xl font-bold text-slate-900">
                    ${MONTHLY_MEMBERSHIP.toFixed(2)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                  <span className="text-slate-600 font-medium">
                    Storage ({boxCount} boxes × ${PRICE_PER_BOX})
                  </span>
                  <span className="text-2xl font-bold text-slate-900">
                    ${calculateBoxCost()}
                  </span>
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <span className="headline text-xl font-bold text-slate-900">
                    Total Monthly Cost
                  </span>
                  <span className="headline text-5xl font-bold text-blue-500">
                    ${calculateTotal()}
                  </span>
                </div>
                
                <p className="text-sm text-slate-500 text-center pt-2">
                  * 6-month minimum commitment required
                </p>
              </div>

              {/* Value Props */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                {[
                  { label: "Per Box", value: `$${PRICE_PER_BOX.toFixed(0)}` },
                  { label: "Membership", value: `$${MONTHLY_MEMBERSHIP.toFixed(0)}` },
                  { label: "Minimum", value: "6 Months" }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="headline text-2xl font-bold text-blue-500 mb-1">
                      {item.value}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/30">
                Get Started with {boxCount} {boxCount === 1 ? 'Box' : 'Boxes'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="headline text-5xl font-bold text-center mb-16">
            Why choose Box It?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "No Hidden Fees", desc: "What you see is what you pay. Period." },
              { title: "Same-Day Delivery", desc: "Need it fast? We've got you covered." },
              { title: "Secure Storage", desc: "Climate-controlled, 24/7 monitored facilities." },
              { title: "Easy Tracking", desc: "Know exactly what's in each box with our app." }
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <h3 className="headline text-2xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="headline text-5xl font-bold text-slate-900 mb-6">
            Ready to simplify your storage?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join hundreds of happy customers who've ditched traditional storage units.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-2xl shadow-blue-500/40">
            Start Storing Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <img 
            src="/mnt/user-data/uploads/Boxit_logo.png" 
            alt="Box It Logo" 
            className="h-8 mx-auto mb-4 brightness-0 invert"
          />
          <p className="text-slate-400">
            © 2026 Box It Storage. Storage made simple.
          </p>
        </div>
      </footer>
    </div>
  );
}
