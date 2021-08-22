require('dotenv').config();
import { Config } from '../typings/config';

export const config: Config = {
    app: {
        port: process.env.PORT || 5000
    },
    radarr: {
        apiKey: process.env.RADARR_API_KEY,
        rootFolderPath: process.env.MOVIE_ROOT_FOLDER_PATH,
        hostURL: process.env.RADARR_HOST
    },
    sonarr: {
        apiKey: process.env.SONARR_API_KEY,
        rootFolderPath: process.env.TV_ROOT_FOLDER_PATH,
        hostURL: process.env.SONARR_HOST
    }
};
