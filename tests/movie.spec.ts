import { mockMovieLibraryData, mockOptions } from './mockData';
import { MovieService } from '../src/services/movie';

describe('Test Movie Service', () => {
    test('test detecting duplicates in library', () => {
        const testMovie: any = mockMovieLibraryData[0];
        const movieExists: boolean = Boolean(
            mockMovieLibraryData.filter((movie) => movie.tmdbId === testMovie.tmdbId).length > 0
        );
        expect(movieExists).toBe(true);
    });

    test('test query string is built correctly', () => {
        const movieService = new MovieService(mockOptions);
        const name = 'The Shawshank Redemption';
        const query = movieService.convertNameToQueryString(name);
        expect(query).toBe('The+Shawshank+Redemption');
    });
});
