import { mockMovieLibraryData, mockOptions } from './mockData';


describe('Test TV Service', () => {
    test("test detecting duplicates in library", () => {
        const testMovie: any = mockMovieLibraryData[0];
        const movieExists: boolean = mockMovieLibraryData.filter(movie => movie.tmdbId === testMovie.tmdbId).length > 0;
        expect(movieExists).toBe(true);
    })
})