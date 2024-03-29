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
  serialno: number;
}

export interface Message {
  id?: string;
  speaker: string;
  title: string;
  videoUrl: string;
}

export interface MessageAudio {
  id: string;
  fileName: string;
  title: string;
  speaker: string;
  path: string;
}

export interface Qanda {
  answer: string;
  id?: string;
  question: string;
  serialno: number;
}

export interface Series {
  id?: string;
  text: string;
}

export interface Sermon {
  id: string;
  fileName: string;
  title: string;
  series: string;
  path: string;
  videoUrl: string;
}

export interface Songs {
  id?: string;
  text: string;
  title: string;
  serialno: number;
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

export interface YTPlaylist {
  id?: string;
  playlistId: string;
  title: string;
  description: string;
  thumbnail: string;
}

export interface YTVideo {
  id?: string;
  playlistId: string;
  title: string;
  thumbnail: string;
  videoId: string;
}
