import ImageKit from 'imagekit';
import config from './config.js';

const imagekit = new ImageKit({
  publicKey: config.publicKey,
  privateKey: config.privateKey,
  urlEndpoint: config.urlEndpoint,
});

const uploadImage = async (file, filename) => {
  try {
    const response = await imagekit.upload({
      file: file,
      fileName: filename,
      folder:"hostel_managment_system"
    });

    return response;
  } catch (error) {
    return { error: true, message: error.message };
  }
};

export default uploadImage;
