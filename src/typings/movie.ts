export interface Movie {
  title: string;
  originalTitle: string;
  alternateTitles: AlternateTitle[];
  secondaryYearSourceId: number;
  sortTitle: string;
  sizeOnDisk: number;
  status: string;
  overview: string;
  inCinemas?: string;
  physicalRelease?: string;
  digitalRelease?: string;
  images: Image[];
  website: string;
  remotePoster?: string;
  year: number;
  path?: string;
  rootFolderPath?: string;
  hasFile: boolean;
  youTubeTrailerId: string;
  studio: string;
  qualityProfileId: number;
  monitored: boolean;
  minimumAvailability: string;
  isAvailable: boolean;
  folderName: string;
  runtime: number;
  cleanTitle: string;
  imdbId?: string;
  tmdbId: number;
  titleSlug: string;
  folder: string;
  certification?: string;
  genres: string[];
  tags: any[];
  added: string;
  ratings: Ratings;
  id?: number;
}

interface Ratings {
  votes: number;
  value: number;
}

interface Image {
  coverType: string;
  url: string;
  remoteUrl: string;
}

interface AlternateTitle {
  sourceType: string;
  movieId: number;
  title: string;
  sourceId: number;
  votes: number;
  voteCount: number;
  language: Language;
}

interface Language {
  id: number;
  name: string;
}
