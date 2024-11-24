'use client'

import { fetchData } from '../lib/api';
import React, { useState, useEffect } from 'react';
import { Data18kRadio, ImageData } from '../lib/entities';
import Image from 'next/image';

export default function History() {
    const [data, setData] = useState<Data18kRadio>();
    const [loading, setLoading] = useState<boolean>(true);
    const [dataLogo, setDataLogo] = useState<string>();
    const [currentBackground, setCurrentBackground] = useState<string>("");

    const GetData = async () => {
        const response = await fetchData();
        setData(response);
        setDataLogo(response.images[0].logo);
        setCurrentBackground(response.images[0].cover || '');
        setLoading(false);
    }

    const handleSwitch = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const target = e.target as HTMLAnchorElement;
        console.log(target.textContent);
        if (!data) return;
        setDataLogo(data.images.filter((image: ImageData) => image.year === target.textContent)[0].logo);
        setCurrentBackground(data.images.filter((image: ImageData) => image.year === target.textContent)[0].cover || '');
    }

    useEffect(() => {
        GetData();

    }, [])
    if (!data) {
        return null; // Render nothing or a loading state
    }
    return (

        <div
            className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: `url('${currentBackground}')`,
            }}>
            {/* พื้นหลังแบบเบลอ */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>

            {/* คอนเทนต์หลัก */}
            <div className="relative flex flex-col items-center justify-center gap-4 mt-10 sm:mt-2 max-w-screen-md">
                <h1 className="text-4xl text-center tracking-wide p-2 font-bold text-white">History</h1>
                <div className="card shadow-md w-1/6 rounded-full">
                    {!loading ? (
                        <Image
                            src={dataLogo || ''}
                            alt="Logo"
                            className="w-full rounded-full"
                            width={500}
                            height={500}
                        />
                    ) : (
                        <span className="loading loading-ball loading-md"></span>
                    )}
                </div>
                <div>
                    {/* Carousel */}
                    <div className="carousel w-full">
                        {!loading &&
                            data.images?.map((image: ImageData, index: number) => (
                                image.cover && (
                                    <div key={index} id={`image-${index + 1}`} className="carousel-item w-full">
                                        <Image
                                            src={image.cover || ''}
                                            alt="Cover"
                                            loading="lazy"
                                            width={500}
                                            height={100}
                                            className="w-full rounded-xl"
                                        />
                                    </div>
                                )
                            ))}
                    </div>
                    <div className="flex w-full justify-center gap-2 py-5">
                        {!loading &&
                            data.images?.map((image: ImageData, index: number) => (
                                image.cover && (
                                    <a
                                        key={index}
                                        href={`#image-${index + 1}`}
                                        className="btn btn-neutral btn-xs md:btn-sm"
                                        onClick={handleSwitch}
                                    >
                                        {image.year}
                                    </a>
                                )
                            ))}
                    </div>
                </div>
            </div>
        </div>

    )
}