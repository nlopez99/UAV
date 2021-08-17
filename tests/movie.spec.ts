import { mockMovieLibraryData, mockOptions } from './mockData';


describe('Test Movie Service', () => {
    test("test detecting duplicates in library", () => {
        const testMovie: any = mockMovieLibraryData[0];
        const movieExists: boolean = Boolean(mockMovieLibraryData.filter(movie => movie.tmdbId === testMovie.tmdbId).length > 0);
        expect(movieExists).toBe(true);
    })
})