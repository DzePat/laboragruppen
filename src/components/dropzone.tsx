'use client';

import {useDropzone} from 'react-dropzone'

interface MyDropzoneProps {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

function MyDropzone({ files, setFiles }: MyDropzoneProps) {

    const onDrop = (acceptedFiles: File[]) => {
        setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
    };

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'] ,
        }
    })

  return (
    <div className='flex flex-col justify-items-center' {...getRootProps()}>
      <input className='h-10'{...getInputProps()} />
      {
        isDragActive ?
          <p className='bg-white text-black cursor-pointer w-full text-center'>Drop the file here</p> :
          <p className='p-2 bg-white text-black cursor-pointer w-full text-center'>Drag and drop some files here, or click to select files</p>
      }
      {files.length > 0 && (
        <ul>
            {files.map(file => (
                <li key={file.name}>
                    {file.name} - {(file.size / 1024).toFixed(1)} KB
                </li>
            ))}
        </ul>
        )}
        
    </div>
  )
}

export default MyDropzone;