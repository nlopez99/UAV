import axios from 'axios';
import { ITVSeries } from '../typings/tv';
import { AxiosConfig } from '../typings/axios';
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

    public async getSeriesByName(name: string): Promise<ITVSeries[]> {
        let url = this.tvEndpointURL + `?name=${name}`;
        let response = await axios.get(url, this.axiosConfig);
        return response.data;
    }

    private convertNameToQueryString(name: string): string {
        const query: string = name.split(' ').join('%20');
        return query;
    }
}
