import Image from "next/image"


function Post({name,
  message,
  email,
  timestamp,
  image,
  postImage}) {
  return (
    <div className="flex bg-white flex-col pb-5 rounded-2xl mt-5 shadow-sm">
      <div className="p-5">
        <div className="flex items-center space-x-2">
          <img className="rounded-full" src={image} width={40} height={40} alt=""/>
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-xs text-gray-400">{new Date(timestamp?.toDate()).toLocaleString()}</p>
          </div>
        </div>
        <p className="pt-4 font-medium">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill"/>
        </div>
      )}
    </div>
  )
}

export


default Post
