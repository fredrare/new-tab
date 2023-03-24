import React from "react"
import Button from "./button"
import Frame from "./frame"

const Starter = () => {
  return (
    <div className="flex justify-center">
      <Frame title="Search">
        <form
          className="w-96 max-w-full flex flex-col items-center gap-4"
          action="https://html.duckduckgo.com/html"
          onSubmit={() => console.log("hi")}
        >
          <input
            autoFocus
            name="q"
            className="w-full border-4 border-stone-800 rounded-lg py-2 px-4 placeholder:text-stone-400 placeholder:font-japanese placeholder:font-normal font-semibold outline-none"
            placeholder="何が欲しいの？"
          />
          <Button>Get lucky!</Button>
        </form>
      </Frame>
    </div>
  )
}

export default Starter
