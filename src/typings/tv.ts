export interface ITVSeries {
    title: string;
    alternateTitles?: string[];
    sortTitle: string;
    seasonCount: number;
    totalEpisodeCount?: number;
    episodeCount?: number;
    episodeFileCount?: number;
    sizeOnDisk?: number;
    status?: string;
    overview: string;
    previousAiring?: string;
    network: string;
    airTime: string;
    images: Image[];
    seasons: Season[];
    year: number;
    path: string;
    profileId: number;
    seasonFolder: boolean;
    monitored: boolean;
    useSceneNumbering: boolean;
    runtime: number;
    tvdbId: number;
    tvRageId: number;
    tvMazeId: number;
    firstAired: string;
    lastInfoSync: string;
    seriesType: string;
    cleanTitle: string;
    imdbId: string;
    titleSlug: string;
    certification: string;
    genres: string[];
    tags: any[];
    added: string;
    ratings: Ratings;
    qualityProfileId?: number;
    id?: number;
}

interface Ratings {
    votes: number;
    value: number;
}

interface Season {
    seasonNumber: number;
    monitored: boolean;
    statistics: Statistics;
}

interface Statistics {
    episodeFileCount: number;
    episodeCount: number;
    totalEpisodeCount: number;
    sizeOnDisk: number;
    percentOfEpisodes: number;
    previousAiring?: string;
}

interface Image {
    coverType: string;
    url: string;
}
