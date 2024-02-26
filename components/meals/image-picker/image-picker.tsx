'use client'
import classes from './image-picker.module.scss';
import { ChangeEvent, useRef, useState } from 'react';

import Image from 'next/image';

interface ImagePickerProps {
    label?: string;
    name?: string;
}

export default function ImagePicker({label, name}: ImagePickerProps) {
    const [pickedImage, setPickedImage] = useState(null);

    const imageInput = useRef<HTMLInputElement | null>(null)

    function handlePickClick() {
        imageInput?.current?.click();
    }

    function handleImageChange(event: ChangeEvent<HTMLInputElement> | undefined) {
        if (event?.target?.files) {
            const file: any = event?.target?.files[0];

            if (!file) {
                setPickedImage(null);
                return;
            }

            const fileReader = new FileReader();
            fileReader.onload = () => {
                // @ts-ignore
                setPickedImage(fileReader.result)
            };
            fileReader.readAsDataURL(file);
        }
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No Image picked yet.</p>}
                    {pickedImage && <Image
                        src={pickedImage}
                        alt='The image selected by the user.'
                        fill/>
                    }
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    accept='image/png, image/jpeg'
                    name={name}
                    ref={imageInput}
                    required
                    onChange={handleImageChange}
                />
                <button className={classes.button} type='button' onClick={handlePickClick}>
                    Pick an image
                </button>
            </div>
        </div>)
}