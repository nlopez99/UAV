import axios from 'axios';
import { TVSeries } from '../typings/tv';
import { MediaService, MediaServiceConstructorOptions } from '../typings/media';
import { AxiosConfig } from '../typings/media';
import { uploadFileFromURL, getImagesInBucket } from './s3';

export class TVService implements MediaService<TVSeries> {
    private rootFolderPath: string;
    private defaultQualityProfileId: number;
    private endpointURL: string;
    private axiosConfig: AxiosConfig;
    private apiKey: string;
    private s3BucketURL: string;
    private s3Images: string[];

    constructor(serviceOptions: MediaServiceConstructorOptions) {
        Object.assign(this, serviceOptions);
        this.s3BucketURL = 'https://uav-seed-bucket.s3.amazonaws.com/';
    }

    public async searchByName(name: string): Promise<TVSeries[]> {
        const query = this.convertNameToQueryString(name);
        const tvQueryURL = this.endpointURL + `/lookup?term=${query}`;
        const response = await axios.get(tvQueryURL, this.axiosConfig);
        const tvShows: TVSeries[] = await this.uploadImagesToS3(response.data as TVSeries[]);
        return tvShows;
    }

    public async getAllInLibrary(): Promise<TVSeries[]> {
        const response = await axios.get(this.endpointURL, this.axiosConfig);
        const tvShowData: TVSeries[] = response.data;
        const tvShowsInLibrary = tvShowData.filter((show) => show.statistics.sizeOnDisk > 0);
        const tvShows = await this.uploadImagesToS3(tvShowsInLibrary);
        return tvShows;
    }

    public async checkIfExistsInLibrary(series: TVSeries): Promise<boolean> {
        const seriesInLibrary: TVSeries[] = await this.getAllInLibrary();
        const seriesExists: boolean = Boolean(
            seriesInLibrary.filter((_series) => _series.tvdbId === series.tvdbId).length > 0
        );
        return seriesExists;
    }

    public async download(series: TVSeries): Promise<void> {
        const seriesData = this.createSeriesDataToPost(series);
        const response = await axios.post(this.endpointURL + `?apikey=${this.apiKey}`, seriesData);
        const successful = response.status === 201;
        if (!successful) {
            throw new Error(`${response.status}: ${response.statusText}`);
        } else {
            console.log(`${series.title} was successfully added to Radarr`);
        }
    }

    private createSeriesDataToPost(series: TVSeries): string {
        const seriesFolderPath: string = this.rootFolderPath + series.title;
        series.path = seriesFolderPath;
        series.qualityProfileId = this.defaultQualityProfileId;
        series.languageProfileId = 1;
        return JSON.stringify(series);
    }

    private async uploadImagesToS3(series: TVSeries[]): Promise<TVSeries[]> {
        return Promise.all(
            series.map(async (show) => {
                let posterURL: string;
                let fileName: string;
                let s3URL: string;
                
                if (show.remotePoster) {
                    posterURL = show.remotePoster;
                    fileName = posterURL.split('/').pop();

                    if (this.s3Images.includes(fileName)) {
                        show.remotePoster = this.s3BucketURL + fileName;
                        return show
                    } 
                    else {
                        s3URL = await uploadFileFromURL(posterURL, fileName);
                        show.remotePoster = s3URL;
                        return show;
                    }

                   
                } else if (show.images.length > 1) {
                    posterURL = show.images[1].remoteUrl;
                    fileName = posterURL.split('/').pop();

                    if (this.s3Images.includes(fileName)) {
                        show.images[0].remoteUrl = this.s3BucketURL + fileName;
                        return show
                    } else {
                        s3URL = await uploadFileFromURL(posterURL, fileName);
                        show.images[0].remoteUrl = s3URL;
                        return show;
                    }

                } else if (show.images.length) {
                    posterURL = show.images[0].remoteUrl;
                    fileName = posterURL.split('/').pop();

                    if (this.s3Images.includes(fileName)) {
                        show.images[0].remoteUrl = this.s3BucketURL + fileName;
                        return show
                    } else {
                        s3URL = await uploadFileFromURL(posterURL, fileName);
                        show.images[0].remoteUrl = s3URL;
                        return show;
                    }
                    
                } else {
                    show.remotePoster =
                        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/4a6a2e6a-2a50-4f84-b6e1-3e1cfeba79f8/d7sc1hw-f7b1ee6c-bbd9-48d3-8841-4c52c6e486cb.png';
                    return show;
                }
            })
        );
    }

    public setS3Images(images: string[]): void {
        this.s3Images = images;
    }

    convertNameToQueryString(name: string): string {
        const query: string = name.split(' ').join('%20');
        return query;
    }
}
