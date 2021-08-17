export interface Config {
    app: appConfig;
    radarr: serviceConfig;
    sonarr: serviceConfig;
}

type appConfig = {
    listeningPort: number;
};

type serviceConfig = {
    apiKey: string;
    rootFolderPath: string;
    hostURL: string;
};
