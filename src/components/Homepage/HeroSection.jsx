import React from 'react';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';


const HeroSection = () => {
    return (
        <section className="relative bg-linear-to-br from-green-600 to-green-800 px-4 sm:px-6 lg:px-8 py-20 overflow-x-hidden text-white">
            <div className="mx-auto max-w-7xl">
                <div className="items-center gap-12 grid md:grid-cols-2">
                    <div className="animate__animated animate__fadeInLeft">
                        <h1 className="mb-6 font-bold text-4xl md:text-5xl leading-tight">
                            Find Premium Livestock for Qurbani
                        </h1>
                        <p className="mb-8 text-green-100 text-lg">
                            Buy quality cattle, goats, sheep, and buffalo directly from trusted sellers. Certified healthy animals at competitive prices.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/all-animals">
                                <Button size="lg" className="flex items-center gap-2 bg-white hover:bg-green-100 text-green-700">
                                    Browse Animals <BsArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                            <Link href="/register">
                                <Button size='lg' outline className="hover:bg-white/10 border-white text-white">
                                    Get Started
                                </Button>
                            </Link>

                        </div>
                    </div>

                    <div className="hidden md:block animate__animated animate__fadeInRight">
                        <Image
                            src="https://i.ibb.co.com/rK5Jzm5v/summer-farm-sustainability-and-cows-on-field-happy-animals-in-countryside-with-mountains-sustainable.jpg"
                            alt="Premium livestock"
                            className="shadow-2xl rounded-lg w-full h-full"
                            width={300}
                            height={200}
                            priority={true}

                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;