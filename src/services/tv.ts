import axios from 'axios';
import { TVSeries } from '../typings/tv';
import { MediaService, MediaServiceConstructorOptions } from '../typings/media';
import { AxiosConfig } from '../typings/media';
import { convertImageURLToEncodedString } from './image';

export class TVService implements MediaService<TVSeries> {
    private rootFolderPath: string;
    private defaultQualityProfileId: number;
    private endpointURL: string;
    private queueURL: string;
    private axiosConfig: AxiosConfig;
    private apiKey: string;

    constructor(serviceOptions: MediaServiceConstructorOptions) {
        Object.assign(this, serviceOptions);
    }

    public async searchByName(name: string): Promise<TVSeries[]> {
        const query = this.convertNameToQueryString(name);
        const tvQueryURL = this.endpointURL + `/lookup?term=${query}`;
        const response = await axios.get(tvQueryURL, this.axiosConfig);
        let tvShows: TVSeries[] = [];
        for await (const tvShow of response.data) {
            let cleanTVShow = await this.convertImageURL(tvShow);
            tvShows.push(cleanTVShow);
        }
        return tvShows;
    }

    public async getAllInLibrary(): Promise<TVSeries[]> {
        const response = await axios.get(this.endpointURL, this.axiosConfig);
        const tvShowData: TVSeries[] = response.data;
        const tvShowsInLibrary = tvShowData.filter((show) => show.statistics.sizeOnDisk > 0);
        return tvShowsInLibrary;
    }

    public async checkIfExistsInLibrary(series: TVSeries): Promise<boolean> {
        const seriesInLibrary: TVSeries[] = await this.getAllInLibrary();
        const seriesExists: boolean = Boolean(
            seriesInLibrary.filter((_series) => _series.tvdbId === series.tvdbId).length > 0
        );
        return seriesExists;
    }

    public async getDownloadQueue(): Promise<any[]> {
        const response = await axios.get(this.queueURL, this.axiosConfig);
        const successful = response.status === 200;
        if (successful) {
            const queueData: any[] = response.data;
            return queueData;
        } else {
            throw new Error(`${response.status}: ${response.statusText}`);
        }
    }

    public async download(series: TVSeries): Promise<void> {
        const seriesData = this.createSeriesDataToPost(series);
        const response = await axios.post(this.endpointURL + `?apikey=${this.apiKey}`, seriesData);
        const successful = response.status === 201;
        if (successful) {
            console.log(`${series.title} was successfully added to Radarr`);
        } else {
            throw new Error(`${response.status}: ${response.statusText}`);
        }
    }

    private createSeriesDataToPost(series: TVSeries): string {
        const seriesFolderPath: string = this.rootFolderPath + series.title;
        series.path = seriesFolderPath;
        series.qualityProfileId = this.defaultQualityProfileId;
        series.languageProfileId = 1;
        return JSON.stringify(series);
    }

    private async convertImageURL(tv: TVSeries): Promise<TVSeries> {
        let imageURLEncoded: string;
        if (tv.remotePoster) {
            imageURLEncoded = await convertImageURLToEncodedString(tv.remotePoster);
            tv.remotePoster = imageURLEncoded;
        }
         else if (!tv.images.length || tv.images[0].remoteUrl === undefined) {
            return tv;
        } else {
            const imageURL: string = tv.images[0].remoteUrl;
            imageURLEncoded = await convertImageURLToEncodedString(imageURL);
            tv.images[0].remoteUrl = imageURLEncoded;
        }
        return tv;
    }

    convertNameToQueryString(name: string): string {
        const query: string = name.split(' ').join('%20');
        return query;
    }
}
