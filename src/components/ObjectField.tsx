import { NewFieldProps, Render, VariableValue } from 'graphql-form'
import React from 'react'

const ObjectField: React.FC<NewFieldProps> = (props) => {
  const { value, mutate, node } = props
  const v: Record<string, VariableValue> = (value as Record<string, VariableValue>) || {}

  return (
    <div className="pl-8 flex flex-col space-y-4">
      {node.args
        ?.sort((a, b) => {
          return b.name > a.name ? -1 : 1
        })
        .map((a) => {
          return (
            <Render
              {...props}
              key={a.name}
              value={v[a.name]}
              required={false}
              mutate={(fv) => {
                mutate({
                  ...v,
                  [a.name]: fv,
                })
              }}
              node={a}
            />
          )
        })}
    </div>
  )
}

export default ObjectField
