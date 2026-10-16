import { UploadInput } from './upload-input'
import { TextInput } from './text-input'
import { dictionaryForm } from './form-fields'
import { Button } from './button'

export const Form = () => {
  const { fields } = dictionaryForm
  return (
    <div>
      <UploadInput />
      <div className="flex flex-col gap-2">
        <TextInput {...fields.name} />
        <TextInput {...fields.email} />
        <TextInput {...fields.github} />
        <Button />
      </div>
    </div>
  )
}
