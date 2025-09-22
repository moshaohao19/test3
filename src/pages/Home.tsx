import { useState } from "react";
import TextbookSelector from "../components/TextbookSelector";
import ArticleList from "../components/ArticleList";
import { getArticlesByTextbook, getFamousArticles } from "../data/articles";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
    const [selectedTextbook, setSelectedTextbook] = useState<string | null>(null);
    const [showFamousArticles, setShowFamousArticles] = useState(false);

    const {
        theme,
        toggleTheme
    } = useTheme();

    const handleTextbookSelect = (textbookId: string) => {
        setSelectedTextbook(textbookId);
        setShowFamousArticles(false);
    };

    const handleBackToTextbookSelect = () => {
        setSelectedTextbook(null);
    };

    const handleShowFamousArticles = () => {
        setShowFamousArticles(true);
        setSelectedTextbook(null);
    };

    const handleBackToHome = () => {
        setShowFamousArticles(false);
        setSelectedTextbook(null);
    };

    const getCurrentTitle = () => {
        if (selectedTextbook) {
            const textbookNames: Record<string, string> = {
                "junior1": "初中一年级",
                "junior2": "初中二年级",
                "junior3": "初中三年级",
                "senior1": "高中一年级",
                "senior2": "高中二年级",
                "senior3": "高中三年级"
            };

            return `${textbookNames[selectedTextbook] || "课本"}文章`;
        }

        if (showFamousArticles) {
            return "著名古文诗词";
        }

        return "";
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            {}
            <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <i className="fas fa-book text-blue-500 mr-2 text-2xl"></i>
                        <h1 className="text-xl font-bold text-gray-800 dark:text-white">古文学习助手</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        {}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                            aria-label={theme === "light" ? "切换到暗色模式" : "切换到亮色模式"}>
                            {theme === "light" ? <i className="fas fa-moon text-gray-700"></i> : <i className="fas fa-sun text-yellow-400"></i>}
                        </button>
                    </div>
                </div>
            </header>
            {}
            <main className="container mx-auto px-4 py-8">
                {!selectedTextbook && !showFamousArticles ? <div className="space-y-8">
                    {}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">欢迎使用豪仔乐学古文助手</h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">选择您正在学习的语文课本，或者浏览著名的古文诗词，开启您的古文学习之旅。
                                          </p>
                        {}
                        <div
                            className="mt-8 relative w-full max-w-2xl mx-auto h-64 rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Ancient%20Chinese%20scroll%20with%20traditional%20calligraphy%2C%20ink%20painting%20of%20mountains%20and%20rivers%2C%20classical%20Chinese%20literature%20study%20concept&sign=23696fc1b8f217ceaca9d4c098c537b6"
                                alt="古文学习"
                                className="w-full h-full object-cover" />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-6 text-white">
                                    <p className="text-lg font-medium">探索中华文化的瑰宝</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div
                        className="grid grid-cols-1 gap-6 max-w-md mx-auto">
                        <div
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 active:scale-98"
                            onClick={() => setSelectedTextbook("showSelector")}>
                            <div className="flex items-start">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                                    <i className="fas fa-book-open text-blue-500 text-xl"></i>
                                </div>
                                <div className="ml-4 flex-1">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">语文课本</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">选择初中或高中课本，学习课堂上的古文知识
                                                            </p>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-end">
                                <span className="text-blue-500 font-medium text-sm">开始学习</span>
                                <i className="fas fa-arrow-right ml-1 text-xs text-blue-500"></i>
                            </div>
                        </div>
                        <div
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 active:scale-98"
                            onClick={handleShowFamousArticles}>
                            <div className="flex items-start">
                                <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                                    <i className="fas fa-star text-purple-500 text-xl"></i>
                                </div>
                                <div className="ml-4 flex-1">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">著名古文诗词</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">浏览课外经典古文和诗词，拓展您的文学视野
                                                            </p>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-end">
                                <span className="text-purple-500 font-medium text-sm">浏览经典</span>
                                <i className="fas fa-arrow-right ml-1 text-xs text-purple-500"></i>
                            </div>
                        </div>
                    </div>
                </div> : <>
                    {selectedTextbook === "showSelector" ? <TextbookSelector onSelectTextbook={handleTextbookSelect} /> : <ArticleList
                        articles={selectedTextbook ? getArticlesByTextbook(selectedTextbook) : getFamousArticles()}
                        title={getCurrentTitle()}
                        onBack={showFamousArticles ? handleBackToHome : handleBackToTextbookSelect} />}
                </>}
            </main>
            {}
            <footer className="bg-white dark:bg-gray-800 shadow-inner py-6 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">© 2025 古文学习助手 | 传承中华文化，弘扬经典魅力
                                  </p>
                </div>
            </footer>
        </div>
    );
}