require('dotenv').config();

export const config = {
    app: {
        listeningPort: process.env.PORT
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
