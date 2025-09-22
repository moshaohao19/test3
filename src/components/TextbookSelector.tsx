import { useState } from 'react';
import { textbooks } from '../data/textbooks';

interface TextbookSelectorProps {
  onSelectTextbook: (textbookId: string) => void;
}

export default function TextbookSelector({ onSelectTextbook }: TextbookSelectorProps) {
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  
  const handleGradeClick = (grade: string) => {
    setSelectedGrade(grade);
  };
  
  const handleTextbookClick = (textbookId: string) => {
    onSelectTextbook(textbookId);
  };
  
  const getTextbooksByGrade = (grade: string) => {
    return textbooks.filter(textbook => {
      if (grade === 'junior') return textbook.grade.startsWith('初');
      if (grade === 'senior') return textbook.grade.startsWith('高');
      return false;
    });
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">选择课本</h2>
      
       {!selectedGrade ? (
        <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
          <button
            onClick={() => handleGradeClick('junior')}
            className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-98"
          >
            <h3 className="text-xl font-semibold">初中课本</h3>
            <p className="text-sm opacity-90">初一至初三</p>
          </button>
          
          <button
            onClick={() => handleGradeClick('senior')}
            className="bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-98"
          >
            <h3 className="text-xl font-semibold">高中课本</h3>
            <p className="text-sm opacity-90">高一至高三</p>
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => setSelectedGrade(null)}
            className="mb-4 text-blue-500 hover:text-blue-700 font-medium flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i> 返回年级选择
          </button>
          
           <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
            {getTextbooksByGrade(selectedGrade).map(textbook => (
              <div
                key={textbook.id}
                onClick={() => handleTextbookClick(textbook.id)}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-200 dark:border-gray-700 active:scale-98"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{textbook.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{textbook.grade}</p>
                <div className="mt-4 flex justify-end">
                  <span className="text-blue-500 font-medium">查看文章</span>
                  <i className="fas fa-chevron-right ml-1 text-xs text-blue-500"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}