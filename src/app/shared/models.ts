export interface Track {
  id?: string;
  book: string;
  name: string;
  namk: string;
  path: string;
  duration: number;
}

export interface Book {
  id?: string;
  order: number;
  book: string;
  bkan: string;
  cat: string;
}

export interface Videos {
  date?: string;
  playlist?: string;
  thumbnail: string;
  title: string;
  type?: string;
  videoId: string;
}
