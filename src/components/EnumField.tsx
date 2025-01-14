import { NewFieldProps } from 'graphql-form'
import { getTypeName } from 'graphql-js-tree'
import React from 'react'

export default ({ node, value, mutate, shared: { nodes } }: NewFieldProps) => {
  const seekNode = nodes.find((n) => n.name === getTypeName(node.type.fieldType))
  if (!seekNode) {
    throw new Error('Invalid enum field')
  }
  const options =
    seekNode.args?.map(({ name: label }) => ({
      label,
      value: label,
    })) || []

  return (
    <select
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      value={value as string | undefined}
      onChange={(e) => {
        mutate(e.target.value)
      }}
    >
      <option value="" disabled>
        {node.name}
      </option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  )
}
