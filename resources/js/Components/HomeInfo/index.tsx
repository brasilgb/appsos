import React from 'react'

interface HomeInfoPrpops {
  children: React.ReactNode;
  title?: string;
  url?: string;
  icon?: JSX.Element;
}

const HomeInfo = ({ children, title, icon, url }: HomeInfoPrpops) => {
  return (
    <div className="mt-4 rounded-md shadow-md bg-gray-50 border border-white">
      <div className="flex items-center justify-start p-2 border-b border-gray-200">
        <div className="text-xl">
          {icon}
        </div>
        <div className="ml-2 text-lg font-medium text-gray-600">
          {title}
        </div>
      </div>
      <div className="p-2">
        {children}
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default HomeInfo