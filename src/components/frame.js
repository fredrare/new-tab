import React from "react"

const Frame = ({ title, children }) => {
  return (
    <div
      className={`flex flex-col divide-y-4 divide-stone-800 border-4 border-stone-800 rounded-2xl shadow-window shadow-stone-800 bg-noise bg-auto bg-repeat bg-`}
    >
      <div className="p-2 relative flex justify-center font-bold">
        <div className="w-6 h-6 rounded-full border-4 border-stone-800 absolute left-0 mx-2"></div>
        <h2>{title}</h2>
      </div>
      <div className="p-8">{children}</div>
    </div>
  )
}

export default Frame
