import { useState,useCallback } from 'react';
import {readFile} from 'helpers/images';
import Cropper from 'react-easy-crop';
import { Area } from 'react-easy-crop/types';
export default function Photo() {


  const [imageSrc, setImageSrc] = useState('');
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels]=useState<Area>()
  const onCropComplete=useCallback((croppedArea: Area,_croppedAreaPixels: Area)=>{
    setCroppedAreaPixels(_croppedAreaPixels)
  },[])
  // file data

  const [filename, setFilename] = useState(null); // file address
  const handleFileChange = async (e: any) => {

    if (e.target.files && e.target.files.length) {
      // we got a file...
      console.log(e.target.files)
      const file = e.target.files[0];
       setFilename(file.name);

      // get the image data from the file
      const imageData: any = await readFile(file);

      // setImageSrc to that image data
      if (imageData){
      setImageSrc(imageData)
      }

      }
    }
    const handleSave = () => {
      //save the cropped image

      //get ready for next one
      setImageSrc('')
      setZoom(1)
      setCrop({x:0,y:0})

  };

  if (!imageSrc) {
    return (
      <>
        <h1>Please choose photo to crop</h1>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </>
    );
  }
    return (
      <>
        <Cropper
          image={imageSrc}
          zoom={zoom}
          crop={crop}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
        <button className='save-btn' onClick={handleSave}>Save</button>
      </>
    );
}
