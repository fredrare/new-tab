import React from "react"

const Button = ({ children }) => {
  return (
    <button className="group w-max border-4 border-stone-800 rounded-lg outline-none overflow-hidden">
      <div className="w-full h-full px-4 py-2 hover:translate-x-px hover:translate-y-px hover:bg-stone-800/5 group-focus-visible:translate-x-px group-focus-visible:translate-y-px group-focus-visible:bg-stone-800/5 transition-all duration-100">
        {children}
      </div>
    </button>
  )
}

export default Button
