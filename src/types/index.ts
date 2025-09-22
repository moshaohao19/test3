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