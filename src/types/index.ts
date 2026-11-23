export interface VocabularyItem {
  word: string;
  definition: string;
  origin?: string;
  symbolism?: string;
}

export interface PoeticArt {
  name: string;
  targetWords: string;
  explanation: string;
}

export interface CoupletAnalysis {
  number: number;
  originalText: string;
  proseTranslation: string;
  poeticArts: PoeticArt[];
  literalMeaning: string;
  sufiMeaning?: string;
}

export interface MeterInfo {
  name: string;
  rukns: string;
  pattern: string;
  rhythmEffect: string;
}

export interface RhymeAndRadif {
  radif: string;
  qofiyaWords: string[];
  rhymeType: string;
}

export interface GhazalAnalysis {
  id?: string;
  title: string;
  poet: string;
  genre: string;
  compositionType: string;
  meter: MeterInfo;
  rhymeAndRadif: RhymeAndRadif;
  vocabulary: VocabularyItem[];
  couplets: CoupletAnalysis[];
  overallMeaning: string;
  nimkosaSubtext: string;
  didacticConclusion: string;
  commentator?: string; // e.g. "Najmiddin Komilov", "Dilnavoz Yusupova", "Erkin Vohidov"
  sourceBook?: string;
  createdAt?: string;
}

export interface CanonicalGhazal {
  id: string;
  firstLine: string;
  title: string;
  poet: string;
  divan?: string;
  commentator: string;
  sourceBook: string;
  text: string;
  meter: MeterInfo;
  genre: string;
  compositionType: string;
  rhymeAndRadif: RhymeAndRadif;
  vocabulary: VocabularyItem[];
  couplets: CoupletAnalysis[];
  overallMeaning: string;
  nimkosaSubtext: string;
  didacticConclusion: string;
}

export interface ArtEncyclopediaEntry {
  id: string;
  name: string;
  arabicName: string;
  category: 'maʼnaviy' | 'lafziy';
  definition: string;
  exampleBayt: string;
  poet: string;
  analysis: string;
  subtypes?: string[];
}

export interface SufiSymbolEntry {
  id: string;
  symbol: string;
  literalMeaning: string;
  sufiMeaning: string;
  classicalContext: string;
  exampleBayt: string;
}

export interface ScholarChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

