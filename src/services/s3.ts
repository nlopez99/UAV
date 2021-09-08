import AWS from 'aws-sdk';
import axios from 'axios';
import { config } from '../config/appConfig';

const {
  s3: { bucket, accessKeyId, secretAccessKey }
} = config;

const s3 = new AWS.S3({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey
});

export const uploadFileFromURL = async (url: string, fileName: string): Promise<string> => {
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  const params = {
    ContentType: response.headers['content-type'],
    ContentLength: response.headers['content-length'] || response.data.length.toString(),
    Bucket: bucket,
    Key: fileName,
    Body: response.data,
    ACL: 'public-read'
  };
  const upload = await s3.upload(params).promise();
  return upload.Location;
};

export const getImagesInBucket = async (): Promise<string[]> => {
  const params = {
    Bucket: bucket
  };
  const data = await s3.listObjectsV2(params).promise();
  let images: string[] = [];
  for (let index = 0; index < data['Contents'].length; index++) {
    const imageFileName: string = data['Contents'][index]['Key'];
    images.push(imageFileName);
  }
  return images;
};
