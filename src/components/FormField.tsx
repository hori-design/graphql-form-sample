import { NewFieldProps } from 'graphql-form'
import React from 'react'

const FormField: React.FC<NewFieldProps> = (props) => {
  const { children } = props
  return <div className="w-full">{children}</div>
}

export default FormField
