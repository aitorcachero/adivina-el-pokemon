'use client';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="text-center block bg-gradient-to-r from-gray-900 to-black w-full p-3 z-50 text-white border-t border-gray-700/50 backdrop-blur-sm">
      <div className="flex items-center justify-center space-x-2">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 font-bold">
          WarSages
        </span>
        <span className="text-gray-300">{currentYear} ©</span>
        <span className="text-gray-400">Made with</span>
        <span className="text-red-500 animate-pulse">❤️</span>
        <span className="text-gray-400">by aicadev</span>
      </div>
    </div>
  );
}
