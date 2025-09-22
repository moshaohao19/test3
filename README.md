# 古文学习助手 - 新手指南

## 📚 项目介绍
这是一个专为语文学习设计的古文学习助手网站，帮助学生和爱好者更好地学习和理解中国古代文学作品。网站提供初中、高中语文课本中的古文内容，包括原文阅读、字符注释、现代文翻译、深度解析和文本朗读等功能。

## 🚀 快速开始

### 1. 环境准备
在开始之前，您需要安装以下工具：

#### 安装Node.js
Node.js是运行JavaScript的环境，我们的项目需要它来运行。
- 访问 [Node.js官网](https://nodejs.org/)
- 下载并安装最新的LTS版本（长期支持版）
- 安装完成后，打开命令提示符（Windows）或终端（Mac/Linux）
- 运行 `node -v` 检查是否安装成功，如果显示版本号则表示安装成功
- 运行 `npm -v` 检查npm是否安装成功

#### 安装pnpm（可选，但推荐）
pnpm是一个比npm更快的包管理工具
- 在命令提示符/终端中运行：
  - Windows: `npm install -g pnpm`
  - Mac/Linux: `sudo npm install -g pnpm`
- 安装完成后，运行 `pnpm -v` 检查是否安装成功

### 2. 获取项目代码
您可以通过以下方式获取项目代码：

#### 方式一：直接下载（推荐给完全的新手）
1. 将项目所有文件下载到您的电脑上
2. 解压下载的文件到您喜欢的位置

#### 方式二：使用Git克隆（如果您熟悉Git）
```bash
git clone [项目仓库地址]
cd [项目文件夹名称]
```

### 3. 安装依赖
打开命令提示符/终端，进入项目文件夹，然后运行：
```bash
# 如果使用pnpm（推荐）
pnpm install

# 或者使用npm
npm install
```

这个命令会安装项目所需的所有依赖包，可能需要几分钟时间，请耐心等待。

### 4. 运行项目
依赖安装完成后，运行以下命令启动开发服务器：
```bash
# 如果使用pnpm（推荐）
pnpm dev

# 或者使用npm
npm run dev
```

启动成功后，您可以在浏览器中访问 `http://localhost:3000` 来查看网站。

## 🛠️ 项目结构详解

项目的文件结构如下：
```
├── src/                # 源代码文件夹
│   ├── components/     # 可复用的组件
│   ├── contexts/       # React上下文
│   ├── data/           # 数据文件
│   ├── hooks/          # 自定义React hooks
│   ├── lib/            # 工具函数
│   ├── pages/          # 页面组件
│   ├── types/          # TypeScript类型定义
│   ├── App.tsx         # 应用主组件
│   ├── index.css       # 全局样式
│   └── main.tsx        # 应用入口文件
├── index.html          # HTML入口文件
├── package.json        # 项目配置和依赖
└── README.md           # 项目说明文档（就是您现在看的这个）
```

## 🔍 功能模块说明

### 1. 首页（Home.tsx）
网站的入口页面，提供两种学习路径：
- 选择语文课本学习
- 浏览著名古文诗词

### 2. 课本选择器（TextbookSelector.tsx）
让用户选择初中或高中课本，然后选择具体的年级。

### 3. 文章列表（ArticleList.tsx）
显示选定课本中的文章列表，或者著名古文诗词列表。

### 4. 文章详情（ArticleDetail.tsx）
显示古文的详细内容，包括：
- 原文阅读
- 字符注释（鼠标悬停显示拼音和解释）
- 文本朗读功能（支持普通话和粤语）
- 现代文翻译
- 深度剖析

### 5. 主题切换功能
支持亮色模式和暗色模式，保护眼睛，提升阅读体验。

## 📝 详细实现步骤

下面是从零开始实现这个项目的详细步骤，适合完全不懂编程的新手：

### 步骤1：创建项目基础结构

1. 首先创建项目文件夹
2. 在项目文件夹中创建 `package.json` 文件，内容如下：
```json
{
  "name": "chinese-classics-learner",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev:client": "vite --host --port 3000",
    "dev": "pnpm dev:client",
    "build:client": "vite build --outDir dist/static",
    "build": "rm -rf dist && pnpm build:client && cp package.json dist && touch dist/build.flag"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^12.9.2",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.3.0",
    "recharts": "^2.15.1",
    "sonner": "^2.0.2",
    "tailwind-merge": "^3.0.2",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.17",
    "typescript": "~5.7.2",
    "vite": "^6.2.0",
    "vite-tsconfig-paths": "^5.1.4"
  }
}
```

3. 创建 `index.html` 文件，内容如下：
```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>古文学习助手</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### 步骤2：创建src文件夹和基础文件

1. 在项目根目录创建 `src` 文件夹
2. 在 `src` 文件夹中创建 `index.css` 文件，内容如下：
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  line-height: 1.5;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 移动设备优化 */
@media (max-width: 640px) {
  * {
    -webkit-tap-highlight-color: transparent;
  }
  
  body {
    touch-action: manipulation;
  }
}
```

3. 在 `src` 文件夹中创建 `main.tsx` 文件，内容如下：
```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'sonner';
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);
```

4. 在 `src` 文件夹中创建 `App.tsx` 文件，内容如下：
```tsx
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ArticleDetail from "@/pages/ArticleDetail";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
      </Routes>
    </AuthContext.Provider>
  );
}
```

### 步骤3：创建类型定义和数据文件

1. 在 `src` 文件夹中创建 `types` 文件夹，然后在其中创建 `index.ts` 文件，内容如下：
```ts
export interface CharacterInfo {
  char: string;
  pinyin: string;
  explanation: string;
}

export interface Sentence {
  text: string;
  characters: CharacterInfo[];
}

export interface Article {
  id: string;
  title: string;
  author: string;
  dynasty: string;
  content: Sentence[];
  modernTranslation: string;
  deepAnalysis: {
    mainPoints: string[];
    modernExamples: string[];
    conclusion: string;
  };
  textbook?: string;
  grade?: string;
  type: 'prose' | 'poetry' | 'classic';
}

export interface Textbook {
  id: string;
  name: string;
  grade: string;
  articles: Article['id'][];
}
```

2. 在 `src` 文件夹中创建 `data` 文件夹，然后在其中创建 `textbooks.ts` 文件，内容如下：
```ts
export const textbooks = [
  {
    id: 'junior1',
    name: '初中一年级',
    grade: '初一',
    articles: ['yueyanglouji', 'shuiqulian']
  },
  {
    id: 'junior2',
    name: '初中二年级',
    grade: '初二',
    articles: ['huanghelou', 'chibi']
  },
  {
    id: 'junior3',
    name: '初中三年级',
    grade: '初三',
    articles: ['sanshici', 'jiangxue']
  },
  {
    id: 'senior1',
    name: '高中一年级',
    grade: '高一',
    articles: ['liansheng', 'peachblossom']
  },
  {
    id: 'senior2',
    name: '高中二年级',
    grade: '高二',
    articles: ['zhaohuaxishi', 'denggaotang']
  },
  {
    id: 'senior3',
    name: '高中三年级',
    grade: '高三',
    articles: ['changhenge', 'songdongpo']
  }
];
```

3. 在 `data` 文件夹中创建 `articles.ts` 文件，这个文件包含所有的古文数据（内容较多，可以参考完整代码）。

### 步骤4：创建页面组件

1. 在 `src` 文件夹中创建 `pages` 文件夹
2. 在 `pages` 文件夹中创建 `Home.tsx` 文件，内容如下：
```tsx
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
            <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <i className="fas fa-book text-blue-500 mr-2 text-2xl"></i>
                        <h1 className="text-xl font-bold text-gray-800 dark:text-white">古文学习助手</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                            aria-label={theme === "light" ? "切换到暗色模式" : "切换到亮色模式"}>
                            {theme === "light" ? <i className="fas fa-moon text-gray-700"></i> : <i className="fas fa-sun text-yellow-400"></i>}
                        </button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                {!selectedTextbook && !showFamousArticles ? <div className="space-y-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">欢迎使用古文学习助手</h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">选择您正在学习的语文课本，或者浏览著名的古文诗词，开启您的古文学习之旅。
                                          </p>

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

            <footer className="bg-white dark:bg-gray-800 shadow-inner py-6 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">© 2025 古文学习助手 | 传承中华文化，弘扬经典魅力
                                  </p>
                </div>
            </footer>
        </div>
    );
}
```

3. 在 `pages` 文件夹中创建 `ArticleDetail.tsx` 文件（内容较多，可以参考完整代码）。

### 步骤5：创建组件

1. 在 `src` 文件夹中创建 `components` 文件夹
2. 在 `components` 文件夹中创建 `ArticleList.tsx` 文件，内容如下：
```tsx
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
```

3. 在 `components` 文件夹中创建 `TextbookSelector.tsx` 文件，内容如下：
```tsx
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
```

4. 在 `components` 文件夹中创建 `CharacterTooltip.tsx` 文件（内容较多，可以参考完整代码）。

5. 在 `components` 文件夹中创建 `TextReader.tsx` 文件（内容较多，可以参考完整代码）。

### 步骤6：创建工具和上下文

1. 在 `src` 文件夹中创建 `hooks` 文件夹，然后在其中创建 `useTheme.ts` 文件，内容如下：
```tsx
import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };
}
```

2. 在 `src` 文件夹中创建 `contexts` 文件夹，然后在其中创建 `authContext.ts` 文件，内容如下：
```tsx
import { createContext } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => {},
  logout: () => {},
});
```

3. 在 `src` 文件夹中创建 `lib` 文件夹，然后在其中创建 `utils.ts` 文件，内容如下：
```tsx
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 步骤7：添加古文数据

在 `data/articles.ts` 文件中添加古文数据。由于数据量较大，这里只展示部分示例，完整数据请参考项目中的 `articles.ts` 文件。

## 🎯 功能使用说明

### 1. 浏览课本和文章
- 打开网站后，您可以选择"语文课本"或"著名古文诗词"
- 如果选择"语文课本"，您需要先选择初中或高中，然后选择具体的年级
- 选择完成后，您将看到所选课本中的文章列表
- 点击文章标题可以查看文章详情

### 2. 阅读古文
- 在文章详情页面，您可以阅读古文原文
- 鼠标悬停在汉字上，可以查看该字的拼音和解释
- 您可以使用页面中的"普通话朗读"或"粤语朗读"功能，让系统为您朗读文章
- 朗读时，当前朗读的句子会高亮显示

### 3. 查看翻译和解析
- 在文章详情页面，您可以查看古文的现代文翻译
- 您还可以查看深度剖析，包括主要内容、现代视角和总结

### 4. 切换主题
- 点击页面右上角的月亮/太阳图标，可以切换亮色模式和暗色模式
- 暗色模式适合在光线较暗的环境下使用，可以减少眼睛疲劳

## 📱 移动设备使用

这个网站完全支持移动设备使用：
- 响应式设计，自动适应不同屏幕尺寸
- 触摸友好的界面元素，适合手指操作
- 优化的阅读体验，确保在手机上也能舒适阅读

您可以直接在手机浏览器中访问网站，也可以将网站添加到主屏幕，以便快速访问。

## 🛡️ 注意事项

1. 本项目需要在有网络连接的环境下使用，因为需要加载Font Awesome图标和图片资源
2. 文本朗读功能依赖于浏览器的Web Speech API，不同浏览器的支持程度可能有所不同
3. 建议使用Chrome、Firefox、Safari等现代浏览器，以获得最佳的使用体验

## 📝 学习建议

1. 初学者可以先从简单的古文开始学习，如《论语》十二章、《爱莲说》等
2. 学习时，建议先通读原文，了解大致内容，然后结合注释和翻译深入理解
3. 利用文本朗读功能，模仿正确的发音和语调，提高古文的朗读能力
4. 定期复习已学内容，加深记忆和理解
5. 尝试背诵一些经典段落，提高古文素养

祝您学习愉快！如有任何问题，请随时向技术人员咨询。