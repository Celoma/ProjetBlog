"use client"
import { upload } from '@vercel/blob/client';
import React, { FormEventHandler, useState } from 'react';
import { uploadFile } from './upload.action';

const Page = () => {

    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const file = formData.get('file') as File;

        const url = await uploadFile(formData)

        setImageUrl(url)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" name="file"/>
                <button type='submit'>Upload</button>
            </form>
            {imageUrl ? (
                <div>
                    <img 
                        src={imageUrl}
                    />
                    <p>{imageUrl}</p>
                </div>
            ) : null}
        </div>
    );
};

export default Page;