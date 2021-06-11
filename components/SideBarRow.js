


function SideBarRow({Icon, title}) {
  return (
    <div className="flex items-center mt-4">
      <Icon className="h-8 w-8 text-blue-500 font-medium"/>
      <p className="hidden sm:inline-flex font-medium ml-2">{title}</p>
    </div>
  )
}

export default SideBarRow
