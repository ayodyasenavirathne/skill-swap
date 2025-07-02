import React from 'react';
import RatingCard from './components/RatingCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Rate Your Experience</h1>
          <p className="text-slate-300 text-lg">We value your feedback and would love to hear from you</p>
        </div>
        <RatingCard />
      </div>
    </div>
  );
}

export default App;