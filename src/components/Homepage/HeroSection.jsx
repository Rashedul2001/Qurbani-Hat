import React from 'react';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';


const HeroSection = () => {
    return (
        <section className="relative bg-linear-to-br from-green-600 to-green-800 text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="animate__animated animate__fadeInLeft">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Find Premium Livestock for Qurbani
                        </h1>
                        <p className="text-lg text-green-100 mb-8">
                            Buy quality cattle, goats, sheep, and buffalo directly from trusted sellers. Certified healthy animals at competitive prices.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/all-animals">
                                <Button size="lg" className="bg-white text-green-700 hover:bg-green-100 flex items-center gap-2">
                                    Browse Animals <BsArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="/register">
                                <Button size='lg' outline  className="border-white text-white hover:bg-white/10">
                                    Get Started
                                </Button>
                            </Link>
                            
                        </div>
                    </div>

                    <div className="hidden md:block animate__animated animate__fadeInRight">
                        <Image
                            src="https://i.ibb.co.com/rK5Jzm5v/summer-farm-sustainability-and-cows-on-field-happy-animals-in-countryside-with-mountains-sustainable.jpg"
                            alt="Premium livestock"
                            className="rounded-lg shadow-2xl w-full h-full"
                            width={300}
                            height={200}

                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;