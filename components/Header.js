
import Image from 'next/image'
import { 
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon, 
} from '@heroicons/react/solid';

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline"
import HeaderIcon from './HeaderIcon';


function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">

      <div className="flex items-center">
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" 
          width={40} 
          height={40} 
          layout="fixed"
        />

        <div className="flex item-center rounded-full bg-gray-100 p-2 ml-2">
          <SearchIcon className="h-6 text-gray-600"/>

          <input className="hidden md:inline-flex flex-shrink ml-2 items-center outline-none bg-transparent placeholber-gray-500" type="text" placeholder="Search Vexbook"/>
        </div>
      </div>

      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active={true}/>
          <HeaderIcon Icon={FlagIcon}/>
          <HeaderIcon Icon={PlayIcon}/>
          <HeaderIcon Icon={ShoppingCartIcon}/>
          <HeaderIcon Icon={UserGroupIcon}/>
        </div>
      </div>

      <div className="items-center hidden md:flex justify-end">
        <ViewGridIcon className="icon"/>
        <ChatIcon className="icon"/>
        <BellIcon className="icon"/>
        <ChevronDownIcon className="icon"/>
      </div>

    </div>
  )
}

export default Header
