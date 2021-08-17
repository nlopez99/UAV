import { config } from '../src/config/appConfig';


describe('Test Config', () => {
    test('test appConfig', () => {
        const { app } = config;
        expect(app.listeningPort).toBeDefined()
    });

    test('test sonarrConfig', () => {
        const { sonarr } = config;
        expect(sonarr.apiKey).toBeDefined()
        expect(typeof sonarr.apiKey).toBe("string");

        expect(sonarr.hostURL).toBeDefined()
        expect(typeof sonarr.hostURL).toBe("string");

        expect(sonarr.rootFolderPath).toBeDefined()
        expect(typeof sonarr.rootFolderPath).toBe("string");
    });

    test('test radarrConfig', () => {
        const { radarr } = config;
        expect(radarr.apiKey).toBeDefined()
        expect(typeof radarr.apiKey).toBe("string");

        expect(radarr.hostURL).toBeDefined()
        expect(typeof radarr.hostURL).toBe("string");

        expect(radarr.rootFolderPath).toBeDefined()
        expect(typeof radarr.rootFolderPath).toBe("string");
    });
})
