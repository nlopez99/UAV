import axios from 'axios';
import { TVSeries } from '../typings/tv';
import { MediaService, MediaServiceConstructorOptions } from '../typings/media';
import { AxiosConfig } from '../typings/axios';

export class TVService implements MediaService<TVSeries> {
    private rootFolderPath: string;
    private defaultQualityProfileId: number;
    private endpointURL: string;
    private axiosConfig: AxiosConfig;

    constructor(serviceOptions: MediaServiceConstructorOptions) {
       Object.assign(this, serviceOptions);
    }

    public async searchByName(name: string): Promise<TVSeries[]> {
        const query = this.convertNameToQueryString(name);
        const tvQueryURL = this.endpointURL + `/lookup?term=${query}`;
        const response = await axios.get(tvQueryURL, this.axiosConfig);
        return response.data;
    }

    public async getAllInLibrary(): Promise<TVSeries[]> {
        const response = await axios.get(this.endpointURL, this.axiosConfig);
        const tvShowData: TVSeries[] = response.data;
        const tvShowsInLibrary = tvShowData.filter((show) => show.sizeOnDisk > 0);
        return tvShowsInLibrary;
    }

    public async checkIfExistsInLibrary(series: TVSeries): Promise<boolean> {
        const seriesInLibrary: TVSeries[] = await this.getAllInLibrary();
        const seriesExists: boolean = seriesInLibrary.some(
            (seriesInLibrary) => seriesInLibrary.tvdbId === series.tvdbId
        );
        return seriesExists;
    }

    public async download(series: TVSeries): Promise<void> {
        const seriesData = this.createSeriesDataToPost(series);
        this.setSeriesDataOnConfig(seriesData);
        const response = await axios.post(this.endpointURL, this.axiosConfig);
        const successful = response.status === 201;

        if (!successful) {
            throw new Error(`${response.status}: ${response.statusText}`);
        } else {
            console.log(`${series.title} was successfully added to Radarr`);
        }
    }

    private setSeriesDataOnConfig(seriesData: string): void {
        this.axiosConfig.data = seriesData;
    }

    private createSeriesDataToPost(series: TVSeries): string {
        const seriesFolderPath: string = this.rootFolderPath + series.title;
        series.path = seriesFolderPath;
        series.qualityProfileId = this.defaultQualityProfileId;
        return JSON.stringify(series);
    }

    convertNameToQueryString(name: string): string {
        const query: string = name.split(' ').join('%20');
        return query;
    }
}
