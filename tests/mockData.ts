export const mockOptions = {
    rootFolderPath: '/test/path',
    defaultQualityProfileId: 1,
    hostURL: 'http://example.com/',
    endpointURL: 'api/',
    queueURL: 'queue/',
    axiosConfig: {
        headers: {
            'X-Api-Key': 'testApiKey'
        },
        data: ''
    }
};

export const mockMovieLibraryData = [
    {
        title: 'Escape Room',
        originalTitle: 'Escape Room',
        alternateTitles: [
            {
                sourceType: 'tmdb',
                movieId: 1,
                title: 'Sala de Fuga',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 2
            }
        ],
        secondaryYearSourceId: 0,
        sortTitle: 'escape room',
        sizeOnDisk: 2765424095,
        status: 'released',
        overview:
            'Six strangers find themselves in circumstances beyond their control, and must use their wits to survive.',
        inCinemas: '2019-01-03T00:00:00Z',
        physicalRelease: '2019-04-23T00:00:00Z',
        digitalRelease: '2019-04-09T00:00:00Z',
        images: [
            {
                coverType: 'poster',
                url: '/MediaCover/1/poster.jpg?lastWrite=637536241370459285',
                remoteUrl: 'https://image.tmdb.org/t/p/original/8Ls1tZ6qjGzfGHjBB7ihOnf7f0b.jpg'
            },
            {
                coverType: 'fanart',
                url: '/MediaCover/1/fanart.jpg?lastWrite=637638711489052999',
                remoteUrl: 'https://image.tmdb.org/t/p/original/mWLljCmpqlcYQh7uh51BBMwCZwN.jpg'
            }
        ],
        website: 'https://www.escaperoom.movie/',
        year: 2019,
        hasFile: true,
        youTubeTrailerId: '6dSKUoV0SNI',
        studio: 'Original Film',
        path: '/home/nlopez99/files/plex/movies/Escape Room',
        qualityProfileId: 1,
        monitored: true,
        minimumAvailability: 'announced',
        isAvailable: true,
        folderName: '/home/nlopez99/files/plex/movies/Escape Room',
        runtime: 100,
        cleanTitle: 'escaperoom',
        imdbId: 'tt5886046',
        tmdbId: 522681,
        titleSlug: '522681',
        certification: 'PG-13',
        genres: ['Thriller', 'Action', 'Mystery'],

        added: '2021-04-10T04:02:00Z',
        ratings: {
            votes: 3143,
            value: 6.5
        },
        movieFile: {
            movieId: 1,
            relativePath: 'Escape Room 2019 1080p BluRay x264 DTS [MW].mkv',
            path: '/home/nlopez99/files/plex/movies/Escape Room/Escape Room 2019 1080p BluRay x264 DTS [MW].mkv',
            size: 2765424095,
            dateAdded: '2021-04-10T04:02:17Z',
            indexerFlags: 0,
            quality: {
                quality: {
                    id: 7,
                    name: 'Bluray-1080p',
                    source: 'bluray',
                    resolution: 1080,
                    modifier: 'none'
                },
                revision: {
                    version: 1,
                    real: 0,
                    isRepack: false
                }
            },
            mediaInfo: {
                audioAdditionalFeatures: '',
                audioBitrate: 768000,
                audioChannels: 5.1,
                audioCodec: 'DTS',
                audioLanguages: 'English',
                audioStreamCount: 1,
                videoBitDepth: 8,
                videoBitrate: 3000000,
                videoCodec: 'x264',
                videoFps: 23.976,
                resolution: '1920x804',
                runTime: '1:39:37',
                scanType: 'Progressive',
                subtitles: 'English / English'
            },
            qualityCutoffNotMet: false,
            languages: [
                {
                    id: 1,
                    name: 'English'
                }
            ],
            releaseGroup: 'MW',
            edition: '',
            id: 1
        },
        collection: {
            name: 'Escape Room Collection',
            tmdbId: 769423
        },
        id: 1
    },
    {
        title: 'Interstellar',
        originalTitle: 'Interstellar',
        alternateTitles: [
            {
                sourceType: 'tmdb',
                movieId: 2,
                title: '星际启示录',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 3
            },
            {
                sourceType: 'tmdb',
                movieId: 2,
                title: 'Xing Ji Chuan Yue',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 4
            },
            {
                sourceType: 'tmdb',
                movieId: 2,
                title: 'Bein kokhavim',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 5
            },
            {
                sourceType: 'tmdb',
                movieId: 2,
                title: 'ইন্টারস্টেলার',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 6
            }
        ],
        secondaryYearSourceId: 0,
        sortTitle: 'interstellar',
        sizeOnDisk: 1096836983,
        status: 'released',
        overview:
            'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
        inCinemas: '2014-11-05T00:00:00Z',
        physicalRelease: '2015-02-27T00:00:00Z',
        digitalRelease: '2015-03-31T00:00:00Z',
        images: [
            {
                coverType: 'poster',
                url: '/MediaCover/2/poster.jpg?lastWrite=637645626557928173',
                remoteUrl: 'https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
            },
            {
                coverType: 'fanart',
                url: '/MediaCover/2/fanart.jpg?lastWrite=637645626558388184',
                remoteUrl: 'https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg'
            }
        ],
        website: 'http://www.interstellarmovie.net/',
        year: 2014,
        hasFile: true,
        youTubeTrailerId: '0vxOhd4qlnA',
        studio: 'Legendary Pictures',
        path: '/home/nlopez99/files/plex/movies/Interstellar (2014)',
        qualityProfileId: 1,
        monitored: true,
        minimumAvailability: 'announced',
        isAvailable: true,
        folderName: '/home/nlopez99/files/plex/movies/Interstellar (2014)',
        runtime: 169,
        cleanTitle: 'interstellar',
        imdbId: 'tt0816692',
        tmdbId: 157336,
        titleSlug: '157336',
        certification: 'PG-13',
        genres: ['Adventure', 'Drama', 'Science Fiction'],

        added: '2021-04-10T04:02:00Z',
        ratings: {
            votes: 26405,
            value: 8.3
        },
        movieFile: {
            movieId: 2,
            relativePath: 'Interstellar.2014.720p.BluRay.x264.YIFY.mp4',
            path: '/home/nlopez99/files/plex/movies/Interstellar (2014)/Interstellar.2014.720p.BluRay.x264.YIFY.mp4',
            size: 1096836983,
            dateAdded: '2021-04-10T04:02:18Z',
            indexerFlags: 0,
            quality: {
                quality: {
                    id: 6,
                    name: 'Bluray-720p',
                    source: 'bluray',
                    resolution: 720,
                    modifier: 'none'
                },
                revision: {
                    version: 1,
                    real: 0,
                    isRepack: false
                }
            },
            mediaInfo: {
                audioAdditionalFeatures: 'LC',
                audioBitrate: 93776,
                audioChannels: 2,
                audioCodec: 'AAC',
                audioLanguages: 'English',
                audioStreamCount: 1,
                videoBitDepth: 8,
                videoBitrate: 767000,
                videoCodec: 'x264',
                videoFps: 23.976,
                resolution: '1280x720',
                runTime: '2:49:03',
                scanType: 'Progressive',
                subtitles: ''
            },
            qualityCutoffNotMet: false,
            languages: [
                {
                    id: 1,
                    name: 'English'
                }
            ],
            edition: '',
            id: 2
        },
        id: 2
    },
    {
        title: 'Joker',
        originalTitle: 'Joker',
        alternateTitles: [
            {
                sourceType: 'tmdb',
                movieId: 3,
                title: 'Τζόκερ',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 7
            }
        ],
        secondaryYearSourceId: 0,
        sortTitle: 'joker',
        sizeOnDisk: 2054149306,
        status: 'released',
        overview:
            'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
        inCinemas: '2019-10-02T00:00:00Z',
        physicalRelease: '2020-01-07T00:00:00Z',
        digitalRelease: '2019-12-17T00:00:00Z',
        images: [
            {
                coverType: 'poster',
                url: '/MediaCover/3/poster.jpg?lastWrite=637643897470414816',
                remoteUrl: 'https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'
            },
            {
                coverType: 'fanart',
                url: '/MediaCover/3/fanart.jpg?lastWrite=637548019919771026',
                remoteUrl: 'https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg'
            }
        ],
        website: 'http://www.jokermovie.net/',
        year: 2019,
        hasFile: true,
        youTubeTrailerId: 'xRjvmVaFHkk',
        studio: 'Warner Bros. Pictures',
        path: '/home/nlopez99/files/plex/movies/Joker',
        qualityProfileId: 1,
        monitored: true,
        minimumAvailability: 'announced',
        isAvailable: true,
        folderName: '/home/nlopez99/files/plex/movies/Joker',
        runtime: 122,
        cleanTitle: 'joker',
        imdbId: 'tt7286456',
        tmdbId: 475557,
        titleSlug: '475557',
        certification: 'R',
        genres: ['Crime', 'Thriller', 'Drama'],

        added: '2021-04-10T04:02:00Z',
        ratings: {
            votes: 18314,
            value: 8.2
        },
        movieFile: {
            movieId: 3,
            relativePath: 'Joker.2019.1080p.WEBRip.x264-[YTS.LT].mp4',
            path: '/home/nlopez99/files/plex/movies/Joker/Joker.2019.1080p.WEBRip.x264-[YTS.LT].mp4',
            size: 2054149306,
            dateAdded: '2021-04-10T04:02:18Z',
            indexerFlags: 0,
            quality: {
                quality: {
                    id: 15,
                    name: 'WEBRip-1080p',
                    source: 'webrip',
                    resolution: 1080,
                    modifier: 'none'
                },
                revision: {
                    version: 1,
                    real: 0,
                    isRepack: false
                }
            },
            mediaInfo: {
                audioAdditionalFeatures: 'LC',
                audioBitrate: 144000,
                audioChannels: 2,
                audioCodec: 'AAC',
                audioLanguages: '',
                audioStreamCount: 1,
                videoBitDepth: 8,
                videoBitrate: 2100000,
                videoCodec: 'x264',
                videoFps: 23.976,
                resolution: '1920x1024',
                runTime: '2:01:48',
                scanType: 'Progressive',
                subtitles: ''
            },
            qualityCutoffNotMet: false,
            languages: [
                {
                    id: 24,
                    name: 'Lithuanian'
                }
            ],
            edition: '',
            id: 4
        },
        id: 3
    },
    {
        title: 'Jurassic World',
        originalTitle: 'Jurassic World',
        alternateTitles: [
            {
                sourceType: 'tmdb',
                movieId: 4,
                title: '쥬라기 공원 4',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 8
            },
            {
                sourceType: 'tmdb',
                movieId: 4,
                title: 'Mundo Jurásico',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 9
            },
            {
                sourceType: 'tmdb',
                movieId: 4,
                title: '侏罗纪公园4',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 11
            },
            {
                sourceType: 'tmdb',
                movieId: 4,
                title: 'Jurassic Park 4',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 12
            },
            {
                sourceType: 'tmdb',
                movieId: 4,
                title: 'Jurassic Park 4 - Jurassic World',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 13
            },
            {
                sourceType: 'tmdb',
                movieId: 4,
                title: 'Jurassic Park IV Jurassic World',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 14
            },
            {
                sourceType: 'tmdb',
                movieId: 4,
                title: 'เปิดสวนโลกไดโนเสาร์',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 28,
                    name: 'Thai'
                },
                id: 15
            },
            {
                sourceType: 'tmdb',
                movieId: 4,
                title: 'Park iz doba jure 4',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 16
            },
            {
                sourceType: 'tmdb',
                movieId: 4,
                title: 'Svet iz doba jure',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 17
            },
            {
                sourceType: 'tmdb',
                movieId: 4,
                title: 'Jūros periodo parkas',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 18
            },
            {
                sourceType: 'tmdb',
                movieId: 4,
                title: 'פארק היורה 4: עולם היורה',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 19
            },
            {
                sourceType: 'tmdb',
                movieId: 4,
                title: 'Jurassic World - O Mundo Dos Dinossauros',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 20
            },
            {
                sourceType: 'tmdb',
                movieId: 4,
                title: 'Jurassic World 1',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 21
            },
            {
                sourceType: 'tmdb',
                movieId: 4,
                title: 'Mundo Jurássico',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 18,
                    name: 'Portuguese'
                },
                id: 22
            },
            {
                sourceType: 'tmdb',
                movieId: 4,
                title: 'Jurassic World I',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 5,
                    name: 'Italian'
                },
                id: 23
            },
            {
                sourceType: 'tmdb',
                movieId: 4,
                title: 'Jurassic Park 4 - Jurassic World - O Mundo dos Dinossauros',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 24
            },
            {
                sourceType: 'tmdb',
                movieId: 4,
                title: 'Jurassic World 2015',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 3,
                    name: 'Spanish'
                },
                id: 25
            },
            {
                sourceType: 'tmdb',
                movieId: 4,
                title: 'Jurassic World: Mundo Jurásico',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 26
            },
            {
                sourceType: 'tmdb',
                movieId: 4,
                title: 'Jurassic Park IV',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 111
            }
        ],
        secondaryYearSourceId: 0,
        sortTitle: 'jurassic world',
        sizeOnDisk: 3363955307,
        status: 'released',
        overview:
            'Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.',
        inCinemas: '2015-06-06T00:00:00Z',
        physicalRelease: '2015-10-07T00:00:00Z',
        digitalRelease: '2016-06-04T00:00:00Z',
        images: [
            {
                coverType: 'poster',
                url: '/MediaCover/4/poster.jpg?lastWrite=637641304629328395',
                remoteUrl: 'https://image.tmdb.org/t/p/original/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg'
            },
            {
                coverType: 'fanart',
                url: '/MediaCover/4/fanart.jpg?lastWrite=637641304630218417',
                remoteUrl: 'https://image.tmdb.org/t/p/original/yOCRqvrRrxbs5FYq2pX1KtLJwmR.jpg'
            }
        ],
        website: 'http://www.jurassicworld.com/',
        year: 2015,
        hasFile: true,
        youTubeTrailerId: 'aJJrkyHas78',
        studio: 'Amblin Entertainment',
        path: '/home/nlopez99/files/plex/movies/Jurassic World',
        qualityProfileId: 1,
        monitored: true,
        minimumAvailability: 'announced',
        isAvailable: true,
        folderName: '/home/nlopez99/files/plex/movies/Jurassic World',
        runtime: 124,
        cleanTitle: 'jurassicworld',
        imdbId: 'tt0369610',
        tmdbId: 135397,
        titleSlug: '135397',
        certification: 'PG-13',
        genres: ['Action', 'Adventure', 'Science Fiction'],

        added: '2021-04-10T04:02:00Z',
        ratings: {
            votes: 17061,
            value: 6.7
        },
        movieFile: {
            movieId: 4,
            relativePath: 'Jurassic World 2015 1080p BRRip x264 DTS-JYK.mkv',
            path: '/home/nlopez99/files/plex/movies/Jurassic World/Jurassic World 2015 1080p BRRip x264 DTS-JYK.mkv',
            size: 3363955307,
            dateAdded: '2021-04-10T04:02:20Z',
            indexerFlags: 0,
            quality: {
                quality: {
                    id: 7,
                    name: 'Bluray-1080p',
                    source: 'bluray',
                    resolution: 1080,
                    modifier: 'none'
                },
                revision: {
                    version: 1,
                    real: 0,
                    isRepack: false
                }
            },
            mediaInfo: {
                audioAdditionalFeatures: '',
                audioBitrate: 754500,
                audioChannels: 5.1,
                audioCodec: 'DTS',
                audioLanguages: 'English',
                audioStreamCount: 1,
                videoBitDepth: 8,
                videoBitrate: 2850000,
                videoCodec: 'x264',
                videoFps: 23.976,
                resolution: '1920x960',
                runTime: '2:04:21',
                scanType: 'Progressive',
                subtitles: ''
            },
            qualityCutoffNotMet: false,
            languages: [
                {
                    id: 1,
                    name: 'English'
                }
            ],
            releaseGroup: 'JYK',
            edition: '',
            id: 3
        },
        collection: {
            name: 'Jurassic Park Collection',
            tmdbId: 328
        },
        id: 4
    },
    {
        title: 'Relic',
        originalTitle: 'Relic',
        alternateTitles: [
            {
                sourceType: 'tmdb',
                movieId: 5,
                title: 'Релікт',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 27
            },
            {
                sourceType: 'tmdb',
                movieId: 5,
                title: 'Relikvie',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 28
            }
        ],
        secondaryYearSourceId: 0,
        sortTitle: 'relic',
        sizeOnDisk: 1832578567,
        status: 'released',
        overview:
            'When Edna—the elderly and widowed matriarch of the family—goes missing, her daughter and granddaughter travel to their remote family home to find her. Soon after her return, they start to discover a sinister presence haunting the house and taking control of Edna.',
        inCinemas: '2020-08-06T00:00:00Z',
        physicalRelease: '2020-10-30T00:00:00Z',
        digitalRelease: '2020-07-10T00:00:00Z',
        images: [
            {
                coverType: 'poster',
                url: '/MediaCover/5/poster.jpg?lastWrite=637636983002138846',
                remoteUrl: 'https://image.tmdb.org/t/p/original/3wZ0gxLqsPleneFSTZILmM3BE8Q.jpg'
            },
            {
                coverType: 'fanart',
                url: '/MediaCover/5/fanart.jpg?lastWrite=637647355537266813',
                remoteUrl: 'https://image.tmdb.org/t/p/original/vpUUznNzW85xo02H16RaSxRNS1.jpg'
            }
        ],
        website: 'https://www.ifcfilms.com/films/relic',
        year: 2020,
        hasFile: true,
        youTubeTrailerId: 'XWhZDQkq0bw',
        studio: 'Nine Stories Productions',
        path: '/home/nlopez99/files/plex/movies/Relic',
        qualityProfileId: 1,
        monitored: true,
        minimumAvailability: 'announced',
        isAvailable: true,
        folderName: '/home/nlopez99/files/plex/movies/Relic',
        runtime: 89,
        cleanTitle: 'relic',
        imdbId: 'tt9072352',
        tmdbId: 539181,
        titleSlug: '539181',
        certification: 'R',
        genres: ['Horror', 'Drama', 'Mystery'],

        added: '2021-04-10T04:02:00Z',
        ratings: {
            votes: 404,
            value: 6
        },
        movieFile: {
            movieId: 5,
            relativePath: 'Relic.2020.1080p.WEBRip.x264-RARBG.mp4',
            path: '/home/nlopez99/files/plex/movies/Relic/Relic.2020.1080p.WEBRip.x264-RARBG.mp4',
            size: 1832578567,
            dateAdded: '2021-04-10T04:02:24Z',
            indexerFlags: 0,
            quality: {
                quality: {
                    id: 15,
                    name: 'WEBRip-1080p',
                    source: 'webrip',
                    resolution: 1080,
                    modifier: 'none'
                },
                revision: {
                    version: 1,
                    real: 0,
                    isRepack: false
                }
            },
            mediaInfo: {
                audioAdditionalFeatures: 'LC',
                audioBitrate: 224002,
                audioChannels: 5.1,
                audioCodec: 'AAC',
                audioLanguages: 'English',
                audioStreamCount: 1,
                videoBitDepth: 8,
                videoBitrate: 2500000,
                videoCodec: 'x264',
                videoFps: 24,
                resolution: '1920x804',
                runTime: '1:29:31',
                scanType: 'Progressive',
                subtitles: ''
            },
            qualityCutoffNotMet: false,
            languages: [
                {
                    id: 1,
                    name: 'English'
                }
            ],
            releaseGroup: 'RARBG',
            edition: '',
            id: 5
        },
        id: 5
    },
    {
        title: "She's the Man",
        originalTitle: "She's the Man",
        alternateTitles: [
            {
                sourceType: 'tmdb',
                movieId: 6,
                title: 'Ella es el Chico',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 3,
                    name: 'Spanish'
                },
                id: 29
            },
            {
                sourceType: 'tmdb',
                movieId: 6,
                title: 'Una chica en apuros',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 30
            },
            {
                sourceType: 'tmdb',
                movieId: 6,
                title: "L'homme c'est elle",
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 31
            },
            {
                sourceType: 'tmdb',
                movieId: 6,
                title: 'She is the man',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 32
            },
            {
                sourceType: 'tmdb',
                movieId: 6,
                title: 'Super náhradník',
                sourceId: 0,
                votes: 0,
                voteCount: 0,
                language: {
                    id: 1,
                    name: 'English'
                },
                id: 33
            }
        ],
        secondaryYearSourceId: 0,
        sortTitle: 'she s man',
        sizeOnDisk: 1786632813,
        status: 'released',
        overview:
            "Viola Hastings is in a real jam. Complications threaten her scheme to pose as her twin brother, Sebastian, and take his place at a new boarding school. She falls in love with her handsome roommate, Duke, who loves beautiful Olivia, who has fallen for Sebastian! As if that were not enough, Viola's twin returns from London ahead of schedule but has no idea that his sister has already replaced him on campus.",
        inCinemas: '2006-03-17T00:00:00Z',
        physicalRelease: '2009-08-05T00:00:00Z',
        digitalRelease: '2007-09-19T00:00:00Z',
        images: [
            {
                coverType: 'poster',
                url: '/MediaCover/6/poster.jpg?lastWrite=637640440199713011',
                remoteUrl: 'https://image.tmdb.org/t/p/original/gdF2PEBdwoohpPqKL93eCk17zNO.jpg'
            },
            {
                coverType: 'fanart',
                url: '/MediaCover/6/fanart.jpg?lastWrite=637631796839623673',
                remoteUrl: 'https://image.tmdb.org/t/p/original/zv5ReudDfxTJyT9fFvRYIYWwfPz.jpg'
            }
        ],
        website: '',
        year: 2006,
        hasFile: true,
        youTubeTrailerId: 'D4OhwrMidSU',
        studio: 'Lakeshore Entertainment',
        path: "/home/nlopez99/files/plex/movies/She's The Man (2006) [WEBRip] [1080p] [YTS.AM]",
        qualityProfileId: 1,
        monitored: true,
        minimumAvailability: 'announced',
        isAvailable: true,
        folderName: "/home/nlopez99/files/plex/movies/She's The Man (2006) [WEBRip] [1080p] [YTS.AM]",
        runtime: 105,
        cleanTitle: 'shesman',
        imdbId: 'tt0454945',
        tmdbId: 9655,
        titleSlug: '9655',
        certification: 'PG-13',
        genres: ['Comedy', 'Drama', 'Family'],

        added: '2021-04-10T04:02:00Z',
        ratings: {
            votes: 2264,
            value: 6.8
        },
        movieFile: {
            movieId: 6,
            relativePath: "She's.The.Man.2006.1080p.WEBRip.x264-[YTS.AM].mp4",
            path: "/home/nlopez99/files/plex/movies/She's The Man (2006) [WEBRip] [1080p] [YTS.AM]/She's.The.Man.2006.1080p.WEBRip.x264-[YTS.AM].mp4",
            size: 1786632813,
            dateAdded: '2021-04-10T04:02:24Z',
            indexerFlags: 0,
            quality: {
                quality: {
                    id: 15,
                    name: 'WEBRip-1080p',
                    source: 'webrip',
                    resolution: 1080,
                    modifier: 'none'
                },
                revision: {
                    version: 1,
                    real: 0,
                    isRepack: false
                }
            },
            mediaInfo: {
                audioAdditionalFeatures: 'LC',
                audioBitrate: 113454,
                audioChannels: 2,
                audioCodec: 'AAC',
                audioLanguages: '',
                audioStreamCount: 1,
                videoBitDepth: 8,
                videoBitrate: 2150000,
                videoCodec: 'x264',
                videoFps: 23.976,
                resolution: '1904x1072',
                runTime: '1:45:02',
                scanType: 'Progressive',
                subtitles: ''
            },
            qualityCutoffNotMet: false,
            languages: [
                {
                    id: 1,
                    name: 'English'
                }
            ],
            edition: '',
            id: 6
        },
        id: 6
    }
];
