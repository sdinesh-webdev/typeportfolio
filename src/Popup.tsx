import React from 'react';
import './index.css';

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (!isMobile) {
    return null; // Do not render the popup if the screen is not mobile-sized
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-lg p-6 mx-10 w-full">
        <p className="text-4xl font-medium mb-5">For awesome experience, please view on desktop . </p>
        <p className="text-2xl font-semibold text-green-500 mb-5">Please Continue Thankyou..</p>
        <button 
          onClick={onClose} 
          className="bg-slate-800 text-white font-medium px-8 py-4 rounded-full "
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Popup;
