import { NewFieldProps } from 'graphql-form'
import React from 'react'

export default ({ value, mutate }: NewFieldProps) => (
  <input
    type="number"
    value={(value as string | undefined) || ''}
    onChange={(e) => {
      mutate(e.target.value)
    }}
    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
  />
)
