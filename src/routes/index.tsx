import { createFileRoute } from '@tanstack/react-router'
import { VarFormFile, VariableForm } from 'graphql-form'
import { useState} from 'react'
import schema from '../schema'
import ArrayField from '../components/ArrayField'
import BooleanField from '../components/BooleanField'
import EnumField from '../components/EnumField'
import FormField from '../components/FormField'
import FormLabel from '../components/FormLabel'
import NullField from '../components/NullField'
import NumberField from '../components/NumberField'
import ObjectField from '../components/ObjectField'
import UniversalField from '../components/UniversalField'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  const [myForm, setMyForm] = useState<VarFormFile>({
    values: {},
    vars: [
      { name: 'createObject', type: 'CreateSource' },
      { name: 'Clients', type: '[EditClientData!]!' },
      { name: 'RequiredMyVar', type: 'String!' },
      { name: 'myVar', type: 'String' },
      { name: 'RequiredAgreementEnum', type: 'AgreementPL!' },
      { name: 'AgreementEnum', type: 'AgreementPL' },
    ],
  })

  return (
    <div className="p-2">
      <VariableForm
        file={myForm}
        onChange={(e) => {
          setMyForm(e)
          console.log(e)
        }}
        schema={schema}
        shared={{
          components: {
            ArrayField: ArrayField,
            BooleanField: BooleanField,
            EnumField: EnumField,
            FormField: FormField,
            FormLabel: FormLabel,
            NullField: NullField,
            NumberField: NumberField,
            ObjectField: ObjectField,
            UniversalField: UniversalField,
          },
        }}
      />
    </div>
  )
}
