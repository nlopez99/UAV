import imageToBase64 from 'image-to-base64';

export const convertImageURLToEncodedString = async (imageURL: string): Promise<string> => {
    const encodedString: string = await imageToBase64(imageURL);
    return 'data:image/jpg;base64,' + encodedString;
};
