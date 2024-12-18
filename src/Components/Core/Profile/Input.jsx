import React from 'react'

const Input = (props) => {
  return <input
  type="text"
  className="mt-1 block w-full text-black rounded-md bg-green-200 p-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
  defaultValue={props.value}
/>
}

export default Input