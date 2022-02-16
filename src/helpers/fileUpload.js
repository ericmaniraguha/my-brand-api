import cloudinary from 'cloudinary'


cloudinary.config({ 
    cloud_name: 'dussoft-engineering', 
    api_key: '984722842253478', 
    api_secret: 'hCAL6n7FJdaMIZjWlM8nH066Mig' 
  });


  export const uploadFile = async (req) => {
    let imageUrl = ''
    await cloudinary.v2.uploader.upload(req.file.path, async function (err, image) {
        if (err) { console.warn(err); }
        imageUrl = image.url
    });
    return imageUrl
}