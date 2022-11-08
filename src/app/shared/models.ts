export interface Bibverses {
  id?: string;
  reference: string;
  text: string;
}

export interface Book {
  id?: string;
  order: number;
  book: string;
  bkan: string;
  cat: string;
}

export interface Qanda {
  answer: string;
  id?: string;
  question: string;
  serialno: string;
}

export interface Track {
  id?: string;
  book: string;
  name: string;
  namk: string;
  path: string;
  duration: number;
}

export interface Videos {
  date?: string;
  playlist?: string;
  thumbnail: string;
  title: string;
  type?: string;
  videoId: string;
}
