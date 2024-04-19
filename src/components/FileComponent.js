import React from 'react'

export default function FileComponent(props) {
  return (
    <>
        <div className="file">
                        <span className='title'>{props.title}</span>
                        <span className='by'>{props.by}</span>
        </div>
    </>
  )
}
