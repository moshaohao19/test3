import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getArticleById } from '../data/articles';
import CharacterTooltip from '../components/CharacterTooltip';
import TextReader from '../components/TextReader';
import { useTheme } from '../hooks/useTheme';

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any>(null);
  const [readingLang, setReadingLang] = useState<'mandarin' | 'cantonese'>('mandarin');
  const [highlightedSentenceIndex, setHighlightedSentenceIndex] = useState(-1);
  const { theme } = useTheme();
  
  useEffect(() => {
    const foundArticle = getArticleById(id || '');
    if (foundArticle) {
      setArticle(foundArticle);
    } else {
      // 如果没有找到文章，返回首页
      navigate('/');
    }
  }, [id, navigate]);
  
  const handleLangChange = (lang: 'mandarin' | 'cantonese') => {
    setReadingLang(lang);
  };
  
  const handleBack = () => {
    navigate(-1);
  };
  
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <i className="fas fa-book-open text-4xl text-gray-400 mb-4"></i>
          <p className="text-gray-600 dark:text-gray-300">加载文章中...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* 顶部导航栏 */}
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <button
            onClick={handleBack}
            className="p-2 mr-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white truncate flex-1">
            {article.title}
          </h1>
        </div>
      </header>
      
      {/* 文章内容 */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {/* 文章标题和作者信息 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-2">{article.title}</h2>
          <div className="text-center text-gray-600 dark:text-gray-300 mb-6">
            <p className="text-lg">{article.author} · {article.dynasty}</p>
            {article.textbook && <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">选自：{article.textbook}</p>}
          </div>
          
          {/* 文章标签 */}
          <div className="flex justify-center mb-6">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              article.type === 'poetry' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200' :
              article.type === 'prose' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200' :
              'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200'
            }`}>
              {article.type === 'poetry' ? '诗词' : article.type === 'prose' ? '散文' : '经典'}
            </span>
          </div>
        </div>
        
        {/* 文章原文 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <i className="fas fa-scroll text-blue-500 mr-2"></i> 原文
          </h3>
          
           <div className="prose dark:prose-invert max-w-none">
            {article.content.map((sentence: any, sentenceIndex: number) => (
              <p 
                key={sentenceIndex} 
                className={`mb-4 text-lg leading-relaxed ${
                  highlightedSentenceIndex === sentenceIndex ? 'text-red-500 font-medium' : ''
                } transition-colors duration-300`}
              >
               {/* 处理句子中的每个字符，包括标点符号 */}
               {Array.from(sentence.text).map((char, charIndex) => {
                 // 查找当前字符的详细信息
                 const charInfo = sentence.characters.find((c: any) => c.char === char);
                 if (charInfo) {
                   // 如果有字符信息，显示tooltip
                   return (
                     <CharacterTooltip key={charIndex} character={charInfo}>
                       <span className="inline-block py-1">{char}</span>
                     </CharacterTooltip>
                   );
                 } else {
                   // 如果是标点符号，直接显示
                   return <span key={charIndex} className="inline-block py-1">{char}</span>;
                 }
               })}
              </p>
            ))}
          </div>
          
          {/* 朗读控制区域 */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
             <div className="flex flex-col sm:flex-row justify-center gap-3 mb-4">
              <button
                onClick={() => handleLangChange('mandarin')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  readingLang === 'mandarin' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                } active:scale-98`}
              >
                <i className="fas fa-comment-alt mr-1"></i> 普通话
              </button>
              
              <button
                onClick={() => handleLangChange('cantonese')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  readingLang === 'cantonese' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                } active:scale-98`}
              >
                <i className="fas fa-comment-dots mr-1"></i> 粤语
              </button>
            </div>
            
            <TextReader
              sentences={article.content}
              lang={readingLang}
              onSentenceHighlight={setHighlightedSentenceIndex}
            />
          </div>
        </div>
        
        {/* 现代文解释 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <i className="fas fa-language text-green-500 mr-2"></i> 现代文解释
          </h3>
          
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>{article.modernTranslation}</p>
          </div>
        </div>
        
        {/* 深度剖析 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <i className="fas fa-brain text-purple-500 mr-2"></i> 深度剖析
          </h3>
          
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            {/* 主要内容 */}
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">主要内容</h4>
              <ul className="list-disc list-inside space-y-2 pl-2">
                {article.deepAnalysis.mainPoints.map((point: string, index: number) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            
            {/* 现代例子 */}
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">现代视角</h4>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 space-y-3">
                {article.deepAnalysis.modernExamples.map((example: string, index: number) => (
                  <div key={index} className="flex">
                    <i className="fas fa-lightbulb text-yellow-500 mr-3 mt-1 flex-shrink-0"></i>
                    <p>{example}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 结论 */}
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">总结</h4>
              <p className="italic text-gray-600 dark:text-gray-400 border-l-4 border-blue-500 pl-4 py-1">
                {article.deepAnalysis.conclusion}
              </p>
            </div>
          </div>
        </div>
        
        {/* 操作按钮 */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={handleBack}
            className="px-5 py-2.5 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full font-medium transition-all duration-300"
          >
            <i className="fas fa-arrow-left mr-2"></i> 返回
          </button>
        </div>
      </main>
      
      {/* 页脚 */}
      <footer className="bg-white dark:bg-gray-800 shadow-inner py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © 2025 古文学习助手 | 传承中华文化，弘扬经典魅力
          </p>
        </div>
      </footer>
    </div>
  );
}