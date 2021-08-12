import axios from 'axios';
import { IMovie } from '../typings/movie';
import { AxiosConfig } from '../typings/axios';
import { MediaController } from '../typings/media';
import { config } from '../config/appConfig';

const {
    radarr: { apiKey, rootFolderPath, hostURL }
} = config;

const {
    axios: {axiosConfig}
} = config;

export class MovieController extends MediaController {
    
    
    private movieEndpointURL: string;
    private axiosConfig: AxiosConfig;

    constructor() {
        super();
        this.apiKey = apiKey;
        this.rootFolderPath = rootFolderPath;
        this.defaultQualityProfileId = 4;
        this.hostURL = hostURL;
        this.movieEndpointURL = this.hostURL + 'api/v3/movie';
        this.axiosConfig = {
            headers: {
                'X-Api-Key': this.apiKey
            }
        };
    }

    public async searchMovieByName(name: string): Promise<IMovie[]> {
        try {
            const query: string = this.convertNameToQueryString(name);
            const movieQueryURL = this.movieEndpointURL + `/lookup?term=${query}`;
            const response = await axios.get(movieQueryURL, this.axiosConfig);
            const movies: IMovie[] = response.data;
            return movies;
        } catch (error) {
            console.log(error);
        }
    }

    public async downloadMovie(movie: IMovie): Promise<void> {
        try {
            const moviePostURL = this.movieEndpointURL;
            const movieData: string = this.createMovieDataToPost(movie);
            this.addMovieDataToConfig(movieData);
            const response = await axios.post(moviePostURL, this.axiosConfig);
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

    public async getMoviesInLibrary(): Promise<IMovie[]> {
        const movieQueryURL = this.movieEndpointURL + `?apiKey=${this.apiKey}`;
        const response = await axios.get(movieQueryURL);
        const movies: IMovie[] = response.data;
        const availableMovies: IMovie[] = movies.filter(movie => movie.hasFile === true);
        return availableMovies;
    }

    public async checkMovieExistsInLibrary(movie: IMovie): Promise<boolean> {
        const moviesInLibrary: IMovie[] = await this.getMoviesInLibrary();
        const movieExists: boolean = moviesInLibrary.some(movieInLibrary => movieInLibrary.tmdbId === movie.tmdbId);
        return movieExists;
    }

    private createMovieDataToPost(movie: IMovie): string {
        const movieData: IMovie = this.setRadarrConfigDataOnJSON(movie);
        return JSON.stringify(movieData);
    }

    private setRadarrConfigDataOnJSON(movie: IMovie): IMovie {
        const movieFolderPath: string = this.rootFolderPath + movie.title;
        movie.path = movieFolderPath;
        movie.folderName = movieFolderPath;
        movie.qualityProfileId = this.defaultQualityProfileId;
        return movie;
    }

    private convertNameToQueryString(name: string): string {
        const query: string = name.split(' ').join('+');
        return query;
    }
}
