'use client'

import { fetchData } from '../lib/api';
import React, { useState, useEffect } from 'react';
import { Data18kRadio, ImageData } from '../lib/entities';
import Image from 'next/image';

export default function History() {
    const [data, setData] = useState<Data18kRadio>();
    const [loading, setLoading] = useState<boolean>(true);
    const [dataLogo, setDataLogo] = useState<string>();

    const GetData = async () => {
        const response = await fetchData();
        setData(response);
        setDataLogo(response.images[0].logo);
        setLoading(false);
    }

    const handleSwitch = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const target = e.target as HTMLAnchorElement;
        console.log(target.textContent);
        if (!data) return;
        setDataLogo(data.images.filter((image: ImageData) => image.year === target.textContent)[0].logo);
    }

    useEffect(() => {
        GetData();

    }, [])
    if (!data) {
        return null; // Render nothing or a loading state
    }
    return (

        <div className="flex items-center justify-center">
            <div className='flex flex-col items-center justify-center gap-4 mt-10 sm:mt-2 max-w-screen-md'>
                <h1 className="text-4xl text-center tracking-wide p-2 font-bold">History</h1>
                <div className="card shadow-md w-1/6 rounded-full">
                    {!loading ? <Image
                        src={dataLogo || ''}
                        alt="Logo"  // Ensure alt text is provided for accessibility
                        className="w-full rounded-full"
                        width={500}   // Adjust the width to your preference
                        height={500}  // Adjust the height to your preference
                    /> : <span className="loading loading-ball loading-md"></span>}
                </div>
                <div>
                    <div className="carousel w-full">
                        {!loading && data.images?.map((image: ImageData, index: number) => (
                            image.cover && <div key={index} id={`image-${index + 1}`} className="carousel-item w-full">
                                <Image src={image.cover || ''} alt='Cover' loading={"lazy"} width={500} height={100}
                                     className="w-full rounded-xl" />
                            </div>
                        ))}
                    </div>
                    <div className="flex w-full justify-center gap-2 py-2">
                        {!loading && data.images?.map((image: ImageData, index: number) => (
                            image.cover && <a key={index} href={`#image-${index + 1}`} className="btn btn-xs" onClick={handleSwitch}>{image.year}</a>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}