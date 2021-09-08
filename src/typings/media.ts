import { Movie } from './movie';
import { TVSeries } from './tv';

export type MediaServiceConstructorOptions = {
  apiKey?: string;
  rootFolderPath: string;
  defaultQualityProfileId: number;
  hostURL: string;
  endpointURL: string;
  axiosConfig: AxiosConfig;
};
export interface MediaService<T extends Movie | TVSeries> {
  getAllInLibrary: () => Promise<T[]>;
  searchByName: (name: string) => Promise<T[]>;
  download: (postData: T) => Promise<void>;
  checkIfExistsInLibrary: (contentData: T) => Promise<boolean>;
  convertNameToQueryString: (name: string) => string;
}

export type AxiosConfig = {
  headers: AxiosHeaders;
  data?: string;
};

type AxiosHeaders = {
  'X-Api-Key': string;
};
