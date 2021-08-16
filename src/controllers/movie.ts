import axios from 'axios';
import { Movie } from '../typings/movie';
import { MediaService, MediaServiceConstructorOptions, AxiosConfig } from '../typings/media';
import { config } from '../config/appConfig';

const {
    radarr: { apiKey, rootFolderPath, hostURL }
} = config;

export class MovieService implements MediaService<Movie> {
    private rootFolderPath: string;
    private defaultQualityProfileId: number;
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
            const movies: Movie[] = response.data;
            return movies;
        } catch (error) {
            console.log(error);
        }
    }

    public async download(movie: Movie): Promise<void> {
        try {
            const movieData: string = this.createMovieDataToPost(movie);
            this.addMovieDataToConfig(movieData);
            const response = await axios.post(this.endpointURL, this.axiosConfig);
            const successful = response.status === 201;

            if (!successful) {
                throw new Error(`${response.status}: ${response.statusText}`);
            } else {
                console.log(`${movie.title} was successfully added to Radarr`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    private addMovieDataToConfig(movieData: string): void {
        this.axiosConfig.data = movieData;
    }

    public async getAllInLibrary(): Promise<Movie[]> {
        const response = await axios.get(this.endpointURL, this.axiosConfig);
        const movies: Movie[] = response.data;
        const availableMovies: Movie[] = movies.filter((movie) => movie.hasFile === true);
        return availableMovies;
    }

    public async checkIfExistsInLibrary(movie: Movie): Promise<boolean> {
        const moviesInLibrary: Movie[] = await this.getAllInLibrary();
        const movieExists: boolean = moviesInLibrary.some((movieInLibrary) => movieInLibrary.tmdbId === movie.tmdbId);
        return movieExists;
    }

    private createMovieDataToPost(movie: Movie): string {
        const movieData: Movie = this.setRadarrConfigDataOnJSON(movie);
        return JSON.stringify(movieData);
    }

    private setRadarrConfigDataOnJSON(movie: Movie): Movie {
        const movieFolderPath: string = this.rootFolderPath + movie.title;
        movie.path = movieFolderPath;
        movie.folderName = movieFolderPath;
        movie.qualityProfileId = this.defaultQualityProfileId;
        return movie;
    }

    public convertNameToQueryString(name: string): string {
        const query: string = name.split(' ').join('+');
        return query;
    }
}
