
import Image from "next/image"

import {
  CameraIcon,
  VideoCameraIcon
} from "@heroicons/react/solid"

import {
  EmojiHappyIcon
} from "@heroicons/react/outline"


function InputBox() {

  const sendPost = (e) => {
    e.preventDefault();

    console.log('send')

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
          <input className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" type="text" placeholder="Whats on your mind"/>
        
          <button hidden onClick={sendPost} >Submit</button>
        </form>
      </div>

    <div className="flex justify-evenly p-3 border-1">

      <div className="inputIcon">
        <VideoCameraIcon className="h-7 text-red-500"/>
        <p className="text-xs sm:text-sm xl:text-base cursor-pointer">Live Video</p>
      </div>
      
      <div className="inputIcon">
        <CameraIcon className="h-7 text-green-400"/>
        <p className="text-xs sm:text-sm xl:text-base cursor-pointer">Photo/Video</p>
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
