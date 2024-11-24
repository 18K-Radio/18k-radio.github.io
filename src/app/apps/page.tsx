'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function Apps() {
    const exampleAppImage = ["screen-0.webp", "screen-1.webp", "screen-2.webp", "screen-3.webp"];

    return (
        <div>
            <h1 className="text-4xl text-center tracking-wide p-2 font-bold">Apps</h1>
            <div className='flex flex-col items-center justify-center mt-10 gap-6'>
                <div>
                    <div className="carousel w-full">
                        {exampleAppImage.map((image, index) => (
                            <div id={`slide${index + 1}`} key={index} className="carousel-item relative w-full items-center justify-center">
                                <Image src={`/images/example_app/${image}`} alt="apps" width={100} height={50} />
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href={`#slide${index === 0 ? exampleAppImage.length : index}`} className="btn btn-circle">❮</a>
                                    <a href={`#slide${index === exampleAppImage.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <Link download={true} href="/file/18K RADIO_1.0.apk">
                    <div className='flex flex-col items-center justify-center btn'>
                        <Image src="/android_logo.svg" alt="apps" width={200} height={100} />
                        <p className='text-xs'>18K RADIO 1.0</p>
                    </div>
                </Link>

            </div>
        </div>

    )
}