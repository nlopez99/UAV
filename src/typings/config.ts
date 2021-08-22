export interface Config {
    app: appConfig;
    radarr: serviceConfig;
    sonarr: serviceConfig;
}

type appConfig = {
    port: number | string;
};

type serviceConfig = {
    apiKey: string;
    rootFolderPath: string;
    hostURL: string;
};
