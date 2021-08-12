export type AxiosConfig = {
    headers: AxiosHeaders;
    data?: string;
};

type AxiosHeaders = {
    'X-Api-Key': string;
};
