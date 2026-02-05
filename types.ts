
export enum Era {
  Antiquity = "Antiquity",
  MiddleAges = "Middle Ages",
  Renaissance = "Renaissance",
  Enlightenment = "Enlightenment",
  IndustrialEra = "Industrial Era",
  Modernity = "Modernity"
}

export enum Discipline {
  Philosophy = "Philosophy",
  Science = "Science",
  Literature = "Literature",
  Ethics = "Ethics",
  Politics = "Politics"
}

export interface KeyWork {
  title: string;
  description: string;
  year?: string;
}

export interface Philosopher {
  id: string;
  name: string;
  dates: string;
  location: string;
  era: Era;
  disciplines: Discipline[];
  description: string;
  keyWorks: KeyWork[];
  imageUrl: string;
  temporalConstraint?: string;
}

export interface Message {
  id: string;
  role: 'philosopher' | 'user' | 'moderator';
  content: string;
  timestamp: Date;
  citation?: string;
}

export interface NotebookSnippet {
  id: string;
  title: string;
  content: string;
  authorId: string;
  source: string;
}
