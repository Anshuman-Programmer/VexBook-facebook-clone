
import {useRef, useState} from 'react'
import Image from "next/image"
import firebase from 'firebase'
import { db, storage } from '../firebase'

import {
  CameraIcon,
  VideoCameraIcon
} from "@heroicons/react/solid"

import {
  EmojiHappyIcon
} from "@heroicons/react/outline"



function InputBox() {

  const inputRef = useRef(null)
  const filePickerRef = useRef(null)
  const [ imageToPost, setImageToPost] = useState(null)

  const sendPost = (e) => {
    e.preventDefault();

    if(!inputRef.current.value) return

    db.collection('posts').add({
      message: inputRef.current.value,
      name: 'anshuman',
      email: 'test@gmail.com',
      timestamp: firebase.firestore.FieldValue.serverTimestamp() 
    }).then(doc => {
      if(imageToPost){
        const upLoadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, 'data_url')
        
        removeImage();

        upLoadTask.on('state_change', null, error => console.error(e), ()=> {
          storage.ref('posts').child(doc.id).getDownloadURL().then(url => {
            db.collection('posts').doc(doc.id).set({
              postImage: url
            },{merge: true})
          })
        })
      }
    })

    inputRef.current.value = "";

  }

  const addImagePost = (e) => {

    const reader = new FileReader();
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result)
    }

  }

  const removeImage = () => {
    setImageToPost(null)
  }


  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
          width={40}
          height={40}
        />
        <form className="flex flex-1">
          <input 
          ref={inputRef}
          className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" 
          type="text" placeholder="Whats on your mind"/>
        
          <button hidden onClick={sendPost}>Submit</button>
        </form>
        {imageToPost && (
          <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transititon duration-150 transform hover:scale-105 cursor-pointer">
            <img className="h-10 object-contain rounded-xl" src={imageToPost} alt="Image"/>
            <p className="text-xs text-red-500 text-center font-bold">Remove</p>
          </div>
        )}
      </div>

    <div className="flex justify-evenly p-3 border-1">

      <div className="inputIcon">
        <VideoCameraIcon className="h-7 text-red-500"/>
        <p className="text-xs sm:text-sm xl:text-base cursor-pointer">Live Video</p>
      </div>
      
      <div onClick={ () => filePickerRef.current.click()} className="inputIcon">
        <CameraIcon className="h-7 text-green-400"/>
        <p className="text-xs sm:text-sm xl:text-base cursor-pointer">Photo/Video</p>
        <input ref={filePickerRef} onChange={addImagePost} hidden type="file"/>
      </div>

      <div className="inputIcon">
        <EmojiHappyIcon className="h-7 text-yellow-300"/>
        <p className="text-xs sm:text-sm xl:text-base cursor-pointer">Feeling/Activity</p>
      </div>

    </div>

    </div>
  )
}

export default InputBox
