'use client';
import React, { useState, useEffect } from 'react';
import { fetchData } from './lib/api';
import { Data18kRadio } from './lib/entities';

const Page = () => {
    const [data, setData] = useState<Data18kRadio | undefined>();
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        const response = await fetchData();
        setData(response);
        setLoading(false);
    }

    useEffect(() => {
        getData();

    }, [])
    if (!data) {
        return null; // Render nothing or a loading state
    }
    return (

        <div className='flex flex-col items-center justify-center'>
            <div className="flex flex-col gap-4 m-2 p-4 w-full sm:w-2/3">
                <h1 className="text-4xl text-center tracking-wide p-2 font-bold">18K Radio</h1>
                <div className="flex justify-center items-center w-full">
                    <iframe className='w-full aspect-video sm:w-2/3 ' src="https://www.youtube.com/embed/3Xug01_rJFs?si=n48LbljBuiNVUd2D" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
                </div>
                <div className='flex justify-center'>
                    <blockquote className="p-4 italic text-xl text-center tracking-wide bg-base-200 rounded-xl w-full sm:w-2/3 ">
                        {!loading ? `"${data.lang?.th?.quote}"` : <span className="loading loading-ball loading-md"></span>}
                    </blockquote>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <figure className=' w-full sm:w-2/3'>
                        <h1 className="text-3xl text-left tracking-wide p-2 font-bold">ประวัติ</h1>
                        <p className="p-4 bg-base-200 rounded-xl">{!loading ? data.lang?.th?.story : <span className="loading loading-ball loading-md"></span>}</p>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Page;
