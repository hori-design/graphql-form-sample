import { NewFieldProps } from 'graphql-form'
import React from 'react'

const FormLabel: React.FC<NewFieldProps> = (props) => {
  const { node, required, children } = props
  return (
    <div className="flex flex-row items-center space-x-1">
      <div className="flex flex-row items-center">
                <span className="text-gray-700">
                    {node.name.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
                      return str.toUpperCase()
                    })}
                </span>
        {required && <span className="text-red-500">*</span>}
        {children}
      </div>
    </div>
  )
}

export default FormLabel
