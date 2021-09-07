export interface Config {
    app: appConfig;
    radarr: serviceConfig;
    sonarr: serviceConfig;
    s3: s3Config;
}

type appConfig = {
    port: number | string;
};

type serviceConfig = {
    apiKey: string;
    rootFolderPath: string;
    hostURL: string;
};

type s3Config = {
    bucket: string;
    accessKeyId: string;
    secretAccessKey: string;
};
