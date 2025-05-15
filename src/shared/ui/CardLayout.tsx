import React from 'react'

type CardProps = {
    imageUrl: string
    title: string
    description: string
}

const CardLayout: React.FC<CardProps> = ({ imageUrl, title, description }) => {
    return (
        <div className="w-80 h-96 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
          {/* 画像部分 */}
          <div className="h-2/3 w-full">
            <img
                src={imageUrl}
                alt={title}
                className="object-cover w-full h-full"
                draggable={false}
            />
          </div>
          {/* テキスト部分 */}
          <div className="p-4 flex-1 flex flex-col justify-between">
            <h2 className="text-lg font-bold text-gray-800 truncate">
              {title}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-3">
              {description}
            </p>
          </div>
        </div>
    )
}

export default CardLayout
