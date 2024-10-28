import React from "react"
// this import isnt supposed to  be here but it works find a way to fix it later 
const Loader = () => {
  return (
    <div className="flex-center w-full">
        <img
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
        />
    </div>
  )
}

export default Loader