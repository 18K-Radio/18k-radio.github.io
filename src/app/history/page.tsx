'use client'

import { fetchData } from '../lib/api';
import React, { useState, useEffect } from 'react';
export default function History() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [dataLogo, setDataLogo] = useState();

    const getData = async () => {
        const response = await fetchData();
        setData(response);
        setDataLogo(response.images[0].logo);
        setLoading(false);
    }

    const handleSwitch = (e: any) => {
        // SWITCH image.logo
        console.log(e.target.text);
        setDataLogo(data.images.filter((image: any) => image.year === e.target.text)[0].logo);
    }

    useEffect(() => {
        getData();

    }, [])
    return (
        <div className="flex items-center justify-center">
            <div className='flex flex-col items-center justify-center gap-4 mt-10 sm:mt-2 max-w-screen-md'>
                <h1 className="text-4xl text-center tracking-wide p-2 font-bold">History</h1>
                <div className="card shadow-md w-1/6 rounded-full">
                    <img src={dataLogo} className="w-full rounded-full" />
                </div>
                <div>
                    <div className="carousel w-full">
                        {data.images?.map((image: any, index: number) => (

                            image.cover && <div key={index} id={`image-${index + 1}`} className="carousel-item w-full">
                                <img src={image.cover} className="w-full rounded-xl" />
                            </div>
                        ))}
                    </div>
                    <div className="flex w-full justify-center gap-2 py-2">
                        {data.images?.map((image: any, index: number) => (
                            image.cover && <a key={index} href={`#image-${index + 1}`} className="btn btn-xs" onClick={handleSwitch}>{image.year}</a>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}