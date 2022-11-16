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

export interface Bookpdf {
  author: string;
  filename: string;
  id?: string;
  filepath: string;
  thumbpath: string;
  thumbname: string;
  title: string;
}

export interface DailyWord {
  id?: string;
  text: string;
  title: string;
}

export interface Qanda {
  answer: string;
  id?: string;
  question: string;
  serialno: string;
}

export interface Songs {
  id?: string;
  text: string;
  title: string;
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
