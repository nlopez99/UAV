import axios from 'axios';
import { IMovie } from '../typings/movie';
import { config } from '../config/appConfig';

const {
    radarr: { apiKey, rootFolderPath }
} = config;

export class MovieController {
    private apiKey: string;
    private rootFolderPath: string;
    private defaultQualityProfileId: number;
    private movieEndpointURL: string;

    constructor() {
        this.apiKey = apiKey;
        this.rootFolderPath = rootFolderPath;
        this.defaultQualityProfileId = 4;
        this.movieEndpointURL = 'http://ulysses.whatbox.ca:14633/api/v3/movie';
    }

    public async searchMovieByName(name: string): Promise<IMovie[]> {
        try {
            const query: string = this.convertNameToQueryString(name);
            const movieQueryURL = this.movieEndpointURL + `/lookup?term=${query}&apiKey=${this.apiKey}`;
            const response = await axios.get(movieQueryURL);
            const movies: IMovie[] = response.data;
            return movies;
        } catch (error) {
            console.log(error);
        }
    }

    public async downloadMovie(movie: IMovie): Promise<void> {
        try {
            const moviePostURL = this.movieEndpointURL + `?apiKey=${this.apiKey}`;
            const movieData: string = this.createMovieDataToPost(movie);

            const response = await axios.post(moviePostURL, movieData);
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
