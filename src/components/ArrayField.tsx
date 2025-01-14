import { NewFieldProps, VariableValue, Render } from 'graphql-form'
import { Options, ParserField } from 'graphql-js-tree'
import React from 'react'

const ArrayField: React.FC<NewFieldProps> = (props) => {
  const { mutate, node, shared, value } = props
  const v: Array<VariableValue> = (value as Array<VariableValue>) || []
  if (node.type.fieldType.type !== Options.array) {
    throw new Error(`Invalid node ${node.name}`)
  }
  const nodeWithoutArray: ParserField = {
    ...node,
    type: {
      ...node.type,
      fieldType: {
        ...node.type.fieldType.nest,
      },
    },
  }
  const formValuePointer = v as Array<VariableValue>

  return (
    <div className="flex flex-col space-y-4">
      {formValuePointer.map((v, i: number, all) => {
        return (
          <div key={node.name + i} className="flex flex-col">
            <Render
              key={i}
              node={{
                ...nodeWithoutArray,
                name: `${nodeWithoutArray.name}[${i}]`,
              }}
              mutate={(e) => {
                formValuePointer[i] = e
                mutate(formValuePointer)
              }}
              value={v}
              shared={shared}
            >
              <div className="flex flex-row items-center space-x-2">
                <button
                  className="p-2 rounded hover:bg-gray-100 border border-gray-200 transition-colors"
                  onClick={() => {
                    mutate(formValuePointer.filter((_, index) => i !== index))
                  }}
                >
                  ✕
                </button>
                {i !== 0 && (
                  <button
                    className="p-2 rounded hover:bg-gray-100 border border-gray-200 transition-colors"
                    onClick={() => {
                      const switched = v
                      formValuePointer[i] = formValuePointer[i - 1]
                      formValuePointer[i - 1] = switched
                      mutate(formValuePointer)
                    }}
                  >
                    ↑
                  </button>
                )}
                {i !== all.length - 1 && (
                  <button
                    className="p-2 rounded hover:bg-gray-100 border border-gray-200 transition-colors"
                    onClick={() => {
                      const switched = v
                      formValuePointer[i] = formValuePointer[i + 1]
                      formValuePointer[i + 1] = switched
                      mutate(formValuePointer)
                    }}
                  >
                    ↓
                  </button>
                )}
              </div>
            </Render>
          </div>
        )
      })}

      <button
        className="flex items-center justify-center space-x-2 px-4 py-2 rounded border border-gray-200 hover:bg-gray-100 transition-colors"
        onClick={() => {
          formValuePointer.push(null)
          mutate(formValuePointer)
        }}
      >
        <span>{`Add ${node.name}`}</span>
        <span className="text-lg">+</span>
      </button>
    </div>
  )
}

export default ArrayField
