import { useState, useEffect, useRef } from 'react';
import { CharacterInfo } from '../types';

interface CharacterTooltipProps {
  character: CharacterInfo;
  children: React.ReactNode;
}

export default function CharacterTooltip({ character, children }: CharacterTooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isAbove, setIsAbove] = useState(true);
  const characterRef = useRef<HTMLSpanElement>(null);
  
  // 定义tooltip的固定尺寸
  const tooltipWidth = 150;
  const tooltipHeight = 80;
  
  useEffect(() => {
    if (showTooltip && characterRef.current) {
      const rect = characterRef.current.getBoundingClientRect();
      
      // 计算tooltip位置，使其位于字符上方居中
      let x = rect.left + window.scrollX + rect.width / 2 - tooltipWidth / 2;
      let y = rect.top + window.scrollY - tooltipHeight - 10;
      
      // 判断是否需要显示在下方
      let above = true;
      if (y < 0) {
        y = rect.bottom + window.scrollY + 10;
        above = false;
      }
      
      // 调整水平位置以确保tooltip在视窗内
      if (x < 0) x = 10;
      
      setTooltipPosition({ x, y });
      setIsAbove(above);
    }
  }, [showTooltip]);
  
  return (
    <span
      ref={characterRef}
      className="relative cursor-help border-b border-dashed border-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      
      {showTooltip && (
        <div
          className="absolute z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 border border-gray-200 dark:border-gray-700 w-[150px]"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
            position: 'fixed'
          }}
        >
          <div className="text-lg font-bold text-gray-800 dark:text-white">{character.char}</div>
          <div className="text-blue-500 text-sm mt-1">{character.pinyin}</div>
          <div className="text-gray-600 dark:text-gray-300 text-xs mt-2 line-clamp-2">{character.explanation}</div>
          <div 
            className="absolute w-3 h-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transform rotate-45" 
            style={{
              left: `${tooltipWidth / 2 - 6}px`,
              top: isAbove ? `${tooltipHeight}px` : '-6px'
            }}
          ></div>
        </div>
      )}
    </span>
  );
}