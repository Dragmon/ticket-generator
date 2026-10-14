export const UploadInput = () => {
  return (
    <div className="mb-4">
      <p className="mb-2 text-xl">Upload Avatar</p>
      <label className="mb-2 block w-full cursor-pointer rounded-xl border-2 border-dashed border-neutral-0 bg-neutral-700/50 px-4 py-3 text-center hover:bg-neutral-700">
        <div className="mx-auto mb-2 grid size-12 place-content-center rounded-xl border-2 border-neutral-500 bg-neutral-700">
          <img
            src="/assets/images/icon-upload.svg"
            alt="icono de carga para subir la imagen de tu avatar"
          />
        </div>
        <input className="hidden" type="file" />
        <span className="text-gray-500">Drag and drop or click to upload</span>
      </label>
      <div className="flex gap-2">
        <img
          src="/assets/images/icon-info.svg"
          alt="icono de información para la carga de imagen de tu avatar"
        />
        <p className="text-xs">
          Upload your photo (JPG or PNG, max size: 500KB).
        </p>
      </div>
    </div>
  )
}
