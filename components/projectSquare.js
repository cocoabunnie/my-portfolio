import React from 'react'

export default function ProjectSquare(props) {
  return (
    <div className="cursor-pointer w-[600px] h-auto hover:opacity-50">
      <img
        className="border border-pink border-4 rounded-lg hover:border-pink"
        src={props.imageSrc}
        alt="project"
      />
    </div>
  )
}
