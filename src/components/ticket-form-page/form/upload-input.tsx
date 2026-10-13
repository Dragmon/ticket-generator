export const UploadInput = () => {
  return (
    <div className='mb-4'>
      <p className='mb-2 text-xl'>Upload Avatar</p>
      <label className='border-2 border-dashed rounded-xl border-neutral-0 px-4 py-3 w-full block text-center bg-neutral-700/50 hover:bg-neutral-700 cursor-pointer mb-2'>
        <div className='mx-auto bg-neutral-700 size-12 grid place-content-center rounded-xl border-2 border-neutral-500 mb-2'>
          <img src="/assets/images/icon-upload.svg" alt='icono de carga para subir la imagen de tu avatar'/>
        </div>
        <input className='hidden' type="file"/>
        <span className='text-gray-500'>Drag and drop or click to upload</span>
      </label>
      <div className='flex gap-2'>
        <img src='/public/assets/images/icon-info.svg' alt='icono de información para la carga de imagen de tu avatar'/>
        <p className='text-xs'> Upload your photo (JPG or PNG, max size: 500KB). </p>
      </div>
    </div>
  )
}
