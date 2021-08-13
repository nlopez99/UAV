import axios from 'axios';
import { ITVSeries } from '../typings/tv';
import { MediaController } from '../typings/media';
import { config } from '../config/appConfig';

const {
    sonarr: { apiKey, rootFolderPath, hostURL }
} = config;

export class TVController extends MediaController {
    private tvEndpointURL: string;

    constructor() {
        super();
        this.apiKey = apiKey;
        this.rootFolderPath = rootFolderPath;
        this.defaultQualityProfileId = 4;
        this.hostURL = hostURL;
        this.tvEndpointURL = this.hostURL + 'api/series';
        this.axiosConfig = {
            headers: {
                'X-Api-Key': this.apiKey
            }
        };
    }

    public async searchSeriesByName(name: string): Promise<ITVSeries[]> {
        const query = this.convertNameToQueryString(name);
        const tvQueryURL = this.tvEndpointURL + `/lookup?term=${query}`;
        const response = await axios.get(tvQueryURL, this.axiosConfig);
        return response.data;
    }

    public async getSeriesInLibrary(): Promise<ITVSeries[]> {
        const response = await axios.get(this.tvEndpointURL, this.axiosConfig)
        const tvShowData:ITVSeries[] = response.data;
        const tvShowsInLibrary = tvShowData.filter((show) => show.sizeOnDisk > 0);
        return tvShowsInLibrary
    }

    public async checkSeriesExistsInLibrary(series: ITVSeries): Promise<boolean> {
        const seriesInLibrary: ITVSeries[] = await this.getSeriesInLibrary();
        const seriesExists: boolean = seriesInLibrary.some((seriesInLibrary) => seriesInLibrary.tvdbId === series.tvdbId);
        return seriesExists;
    }

    public async downloadSeries(series: ITVSeries): Promise<void> {
        const seriesData = this.createSeriesDataToPost(series);
        this.setSeriesDataOnConfig(seriesData)
        const response = await axios.post(this.tvEndpointURL, this.axiosConfig);
        const successful = response.status === 201;

        if (!successful) {
            throw new Error(`${response.status}: ${response.statusText}`);
        } else {
            console.log(`${series.title} was successfully added to Radarr`);
        }
}

    private setSeriesDataOnConfig(seriesData: string): void {
        this.axiosConfig.data = seriesData
    }

    private createSeriesDataToPost(series: ITVSeries): string {
        const seriesFolderPath: string = this.rootFolderPath + series.title;
        series.path = seriesFolderPath;
        series.qualityProfileId = this.defaultQualityProfileId;
        return JSON.stringify(series)
    }
    
    private convertNameToQueryString(name: string): string {
        const query: string = name.split(' ').join('%20');
        return query;
    }
}
