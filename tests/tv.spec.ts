import { mockMovieLibraryData, mockOptions } from './mockData';

describe('Test TV Service', () => {
    test('test detecting duplicates in library', () => {
        const testSeries: any = mockMovieLibraryData[0];
        const seriesExists: boolean =
            mockMovieLibraryData.filter((series) => series.tmdbId === testSeries.tmdbId).length > 0;
        expect(seriesExists).toBe(true);
    });
});
