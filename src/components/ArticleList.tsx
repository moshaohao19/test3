import { Article } from '../types';
import { Link } from 'react-router-dom';

interface ArticleListProps {
  articles: Article[];
  title?: string;
  onBack?: () => void;
}

export default function ArticleList({ articles, title = '文章列表', onBack }: ArticleListProps) {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {onBack && (
        <button
          onClick={onBack}
          className="mb-4 text-blue-500 hover:text-blue-700 font-medium flex items-center"
        >
          <i className="fas fa-arrow-left mr-2"></i> 返回
        </button>
      )}
      
      {title && <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">{title}</h2>}
      
      {articles.length === 0 ? (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          <i className="fas fa-book-open text-4xl mb-3 opacity-50"></i>
          <p>暂无文章</p>
        </div>
      ) : (
         <div className="space-y-4">
          {articles.map(article => (
            <Link
              to={`/article/${article.id}`}
              key={article.id}
              className="block bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 active:scale-98"
            >
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{article.title}</h3>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                    article.type === 'poetry' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                    article.type === 'prose' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                    'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
                  }`}>
                    {article.type === 'poetry' ? '诗词' : article.type === 'prose' ? '散文' : '经典'}
                  </span>
                </div>
                
                <div className="mt-2 text-gray-600 dark:text-gray-300">
                  <p className="text-sm">作者：{article.author} · {article.dynasty}</p>
                  {article.textbook && <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">选自：{article.textbook}</p>}
                </div>
                
                <div className="mt-3 text-gray-700 dark:text-gray-200 line-clamp-2">
                  {article.content[0]?.text}
                </div>
                
                <div className="mt-4 flex justify-end">
                  <span className="text-blue-500 font-medium text-sm">阅读全文</span>
                  <i className="fas fa-arrow-right ml-1 text-xs text-blue-500"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}