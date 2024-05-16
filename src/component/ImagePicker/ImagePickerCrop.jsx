// src/ImagePickerCrop.js
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import 'tailwindcss/tailwind.css';

const ImagePickerCrop = () => {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 });
  const [completedCrop, setCompletedCrop] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col items-center p-4">
      <div {...getRootProps()} className="w-full h-64 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center">
        <input {...getInputProps()} />
        <p className="text-center">Drag & drop an image here, or click to select one</p>
      </div>
      {image && (
        <ReactCrop
          src={image}
          crop={crop}
          onChange={newCrop => setCrop(newCrop)}
          onComplete={c => setCompletedCrop(c)}
          className="mt-4"
        />
      )}
      {completedCrop && (
        <canvas
          className="mt-4"
          ref={canvas => {
            if (canvas && completedCrop.width && completedCrop.height) {
              const ctx = canvas.getContext('2d');
              const image = new Image();
              image.src = URL.createObjectURL(new Blob([image], { type: 'image/jpeg' }));
              image.onload = () => {
                canvas.width = completedCrop.width;
                canvas.height = completedCrop.height;
                ctx.drawImage(
                  image,
                  completedCrop.x,
                  completedCrop.y,
                  completedCrop.width,
                  completedCrop.height,
                  0,
                  0,
                  completedCrop.width,
                  completedCrop.height
                );
              };
            }
          }}
        />
      )}
    </div>
  );
};

export default ImagePickerCrop;
