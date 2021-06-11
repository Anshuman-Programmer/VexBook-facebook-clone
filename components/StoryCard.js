
import Image from "next/image"

function StoryCard({name, src, profile}) {
  return (
    <div>
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full 
        z-50 top-10 md:h-20 md:w-20 lg:h-56 lg:w-56 cursor-pointer overflow-x p-3 transition 
        duration-200 transfrom ease-in hover:scale-105 hover:animate-pulse"
        src={profile}
        width= {40}
        height= {40}
        layout= "fixed"
        objectFit= "cover"
      />

    </div>
  )
}

export default StoryCard