import React, {useState, useEffect} from 'react'
import { filesize } from 'filesize'
import { ref, uploadBytesResumable, getDownloadURL  } from 'firebase/storage'
import { storage } from '../../../config/firebase'

export default function Hero() {

const [file, setFile] = useState({})
const [isUploading, setIsUploading] = useState(false)
const [progress, setProgress] = useState(0)
const [downloadURL, setDownloadURL] = useState('')
//  const handleFile = e => {

//   let file = e.target.files[0]
   
  

//   // if(file.size < 20000 ){
//   //   alert('Your file size is greater than 20kb')
//   //   return;
//   // }

//   setFile(file)

//       console.log(file)
//  }

 const handleUpload = () =>{
  if(!file?.size ){
    alert('Your have no file')
    return;
  }

  const filExtantion = file.name.split('.').pop();
  
  const randonId = Math.random().toString(36).slice(2)


  const imagesRef = ref(storage, `images/${randonId}.${filExtantion}`);
  const uploadTask = uploadBytesResumable(imagesRef, file);

  setIsUploading(true)

  uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    console.log('Upload is ' + progress + '% done')
    setProgress(progress)
    
    
    },(error)=>{
      console.log(error)
      setIsUploading(false)
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL)
        setDownloadURL(downloadURL)
        setIsUploading(false)
    }
      )
  }
    
    )
 }

  return (
    <div className='py-5'>
      <div className="container">
        <div className="row">
          <div className="col text-center mb-3">
            <h1>Upload Images/Files</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <input type="file" className='form-control ' accept='images/*' onChange={e=>{setFile(e.target.files[0])}}/>
          {file.name &&  <p>Name: {file.name} | Size: {filesize(file.size)}</p>}
          {downloadURL &&  <p>Name: {downloadURL}</p>}
          </div>
        </div>
        {isUploading 
        ? 
        <div className="row">
         <div className="col">
         <div className="progress" role='progressbar'  aria-label="Example with label" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
          <div className="progress-bar mt-3" style={{width: `${progress}%`}}>{progress}%</div>
           </div>
         </div>
        </div>
        :""
           }
        <div className="row mt-4">
          <div className="col text-end">
            <button className='btn btn-success my-3' disabled={isUploading} onClick={handleUpload}>
              {!isUploading?'Upload':<div className='spinner-border spinner-border-sm'></div>}
            </button>
          </div>
        </div>
      {downloadURL &&
        <div className="row">
        <div className="col text-center">
          <a href={downloadURL} target='_blank' className='btn btn-info mb-3'>Download image</a>
          <img src={downloadURL} alt="Bismila image" className='img-fluid' />
        </div>
      </div>
      }
      </div>
    </div>
  )
}
