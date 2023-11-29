import React from 'react'
import { IoSearch } from "react-icons/io5"

type Props = {}

const InputSearch = ({ ...props }) => {

  const handleSearch = (e: any) => {
    e.preventDefault();
    console.log(e.target.value)
  }

  return (
    <form onClick={handleSearch} method="post">
      <div className="flex items-center justify-between w-1/2 border border-gray-300 rounded-md pl-2 py-1">
        <div className="w-full">
          <input
          onChange={(e) => e.target.value}
            name="search"
            className="w-full p-1 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none"
            type="text"
          />
        </div>
        <button
          type="submit"
        >
          <div className="mx-2 text-gray-500">
            <IoSearch size={20} />
          </div>
        </button>
      </div>
    </form>
  )
}

export default InputSearch