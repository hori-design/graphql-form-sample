import { NewFieldProps } from 'graphql-form'
import React from 'react'

export default ({ mutate, node, value }: NewFieldProps) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={!!value}
        onChange={() => mutate(!value)}
        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <label className="text-sm text-gray-700">{node.name}</label>
    </div>
  )
}
