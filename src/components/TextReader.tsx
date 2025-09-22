import { useState, useRef } from 'react';
import { Sentence } from '../types';

interface TextReaderProps {
  sentences: Sentence[];
  lang: 'mandarin' | 'cantonese';
  onSentenceHighlight: (index: number) => void;
}

export default function TextReader({ sentences, lang, onSentenceHighlight }: TextReaderProps) {
  const [isReading, setIsReading] = useState(false);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(-1);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  
  const handleReadText = () => {
    if (isReading) {
      // 停止朗读
      window.speechSynthesis.cancel();
      setIsReading(false);
      setCurrentSentenceIndex(-1);
      onSentenceHighlight(-1);
      return;
    }
    
    // 开始朗读
    setIsReading(true);
    readSentence(0);
  };
  
  const readSentence = (index: number) => {
    if (index >= sentences.length) {
      // 朗读完成
      setIsReading(false);
      setCurrentSentenceIndex(-1);
      onSentenceHighlight(-1);
      return;
    }
    
    setCurrentSentenceIndex(index);
    onSentenceHighlight(index);
    
    // 使用Web Speech API朗读句子
     // 过滤掉标点符号，只朗读文字内容
     const textWithoutPunctuation = sentences[index].text.replace(/[。，！？；：,.!?;:\s]/g, '');
     const utterance = new SpeechSynthesisUtterance(textWithoutPunctuation);
    utterance.lang = lang === 'mandarin' ? 'zh-CN' : 'zh-HK';
    
    // 设置完成回调
    utterance.onend = () => {
      // 稍微延迟后朗读下一句
      setTimeout(() => readSentence(index + 1), 300);
    };
    
    // 保存引用以便可以取消
    speechRef.current = utterance;
    
    // 开始朗读
    window.speechSynthesis.speak(utterance);
  };
  
  return (
    <div className="flex items-center justify-center space-x-4 mt-6">
      <button
        onClick={handleReadText}
        className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center ${
          isReading 
            ? 'bg-red-500 hover:bg-red-600 text-white' 
            : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}
      >
        {isReading ? (
          <>
            <i className="fas fa-stop mr-2"></i> 停止朗读
          </>
        ) : (
          <>
            <i className="fas fa-volume-up mr-2"></i> {lang === 'mandarin' ? '普通话朗读' : '粤语朗读'}
          </>
        )}
      </button>
      
      {isReading && (
        <div className="text-sm text-gray-600 dark:text-gray-300">
          正在朗读第 {currentSentenceIndex + 1} 句
        </div>
      )}
    </div>
  );
}