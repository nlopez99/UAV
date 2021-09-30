import axios from 'axios';
import { Movie } from '../typings/movie';
import { MediaService, MediaServiceConstructorOptions, AxiosConfig } from '../typings/media';

export class MovieService implements MediaService<Movie> {
  private rootFolderPath: string;
  private defaultQualityProfileId: number;
  private hostURL: string;
  private endpointURL: string;
  private axiosConfig: AxiosConfig;

  constructor(serviceOptions: MediaServiceConstructorOptions) {
    Object.assign(this, serviceOptions);
  }

  public async searchByName(name: string): Promise<Movie[]> {
    try {
      const query: string = this.convertNameToQueryString(name);
      const movieQueryURL = this.endpointURL + `/lookup?term=${query}`;
      const response = await axios.get(movieQueryURL, this.axiosConfig);
      return response.data.slice(0, 4);
    } catch (error) {
      console.log(error);
    }
  }

  public async download(movie: Movie): Promise<boolean> {
    try {
      const movieData: string = this.createMovieDataToPost(movie);
      this.addMovieDataToConfig(movieData);
      const response = await axios.post(
        this.endpointURL + `?apiKey=${this.axiosConfig.headers['X-Api-Key']}`,
        movieData
      );
      const success = response.status === 201;

      if (!success) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        console.log(`${movie.title} was successfully added to Radarr`);
      }

      const movieId: number = response.data.id;

      const searchMovieResponse = await axios.post(
        this.hostURL + 'api/v3/command' + `?apiKey=${this.axiosConfig.headers['X-Api-Key']}`,
        JSON.stringify({ name: 'MoviesSearch', movieIds: [movieId] })
      );

      const downloadSuccess = searchMovieResponse.status === 201;
      if (!downloadSuccess) {
        throw new Error(`${searchMovieResponse.status}: ${searchMovieResponse.statusText}`);
      } else {
        console.log(`${movie.title} was successfully downloaded`);
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  public async getAllInLibrary(): Promise<Movie[]> {
    const response = await axios.get(this.endpointURL, this.axiosConfig);
    const movies: Movie[] = response.data;
    const availableMovies: Movie[] = movies.filter((movie) => movie.hasFile === true);
    return availableMovies;
  }

  public async checkIfExistsInLibrary(movie: Movie): Promise<boolean> {
    const moviesInLibrary: Movie[] = await this.getAllInLibrary();
    const movieExists: boolean = Boolean(
      moviesInLibrary.filter((movieInLibrary) => movieInLibrary.tmdbId === movie.tmdbId).length > 0
    );
    return movieExists;
  }

  public async getCurrentDownloads(): Promise<Movie[]> {
    const response = await axios.get(
      this.hostURL + 'api/v3/queue/details' + `?apiKey=${this.axiosConfig.headers['X-Api-Key']}`,
      this.axiosConfig
    );
    const movieDownloads: Movie[] = response.data;
    return movieDownloads;
  }

  private createMovieDataToPost(movie: Movie): string {
    const movieData: Movie = this.setRadarrConfigDataOnJSON(movie);
    movieData.monitored = true;
    movieData.id = 0;
    return JSON.stringify(movieData);
  }

  private setRadarrConfigDataOnJSON(movie: Movie): Movie {
    const movieFolderPath: string = this.rootFolderPath + movie.title;
    movie.path = movieFolderPath;
    movie.folderName = movieFolderPath;
    movie.qualityProfileId = this.defaultQualityProfileId;
    return movie;
  }

  private addMovieDataToConfig(movieData: string): void {
    this.axiosConfig.data = movieData;
  }

  convertNameToQueryString(name: string): string {
    const query: string = name.split(' ').join('+');
    return query;
  }
}

// QualityProfileId: 'Quality Profile Id' must be greater than '0'.
//  -- QualityProfileId: QualityProfile does not exist
//  -- Path: Invalid Path
//  -- RootFolderPath: Invalid Path
//  -- Title: 'Title' must not be empty.
//  -- TmdbId: 'Tmdb Id' must not be empty.
