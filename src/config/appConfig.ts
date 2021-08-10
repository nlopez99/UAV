require('dotenv').config();

export const config = {
    app: {
        listeningPort: process.env.PORT
    },
    radarr: {
        apiKey: process.env.RADARR_API_KEY,
        rootFolderPath: process.env.ROOT_FOLDER_PATH
    }
};
