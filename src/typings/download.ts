export interface TVDownload {
  movieId: number;
  languages: Language[];
  quality: Quality;
  customFormats: any[];
  size: number;
  title: string;
  sizeleft: number;
  timeleft: string;
  estimatedCompletionTime: string;
  status: string;
  trackedDownloadStatus: string;
  trackedDownloadState: string;
  statusMessages: any[];
  downloadId: string;
  protocol: string;
  downloadClient: string;
  indexer: string;
  outputPath: string;
  id: number;
}

interface Quality {
  quality: ItemQuality;
  revision: Revision;
}

interface Revision {
  version: number;
  real: number;
  isRepack: boolean;
}

interface ItemQuality {
  id: number;
  name: string;
  source: string;
  resolution: number;
  modifier: string;
}

interface Language {
  id: number;
  name: string;
}
