import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-background border-t w-full">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
                <div className="gap-8 grid grid-cols-1 md:grid-cols-4">

                    {/* Brand and About */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex justify-center items-center bg-linear-to-br from-green-600 to-green-700 rounded-lg w-8 h-8">
                                <Image src="/logo.png" width={40} height={40} alt="Qurbani Hat Logo" className="w-auto h-6" />
                            </div>
                            <span className="font-bold text-xl">Qurbani Hat</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-6">
                            Your trusted marketplace for healthy and quality animals. We connect buyers
                            with the best farms across the country for a blessed Qurbani.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="mb-4 font-semibold text-sm uppercase tracking-wider">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-muted-foreground text-sm">
                                <Phone className="w-4 h-4 text-primary" />
                                <span>+880 1234-567890</span>
                            </li>
                            <li className="flex items-center gap-2 text-muted-foreground text-sm">
                                <Mail className="w-4 h-4 text-primary" />
                                <span>support@qurbanihat.com</span>
                            </li>
                            <li className="flex items-center gap-2 text-muted-foreground text-sm">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>Dhaka, Bangladesh</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 font-semibold text-sm uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/animals" className="text-muted-foreground hover:text-primary text-sm transition">
                                    Browse Animals
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm transition">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="mb-4 font-semibold text-sm uppercase tracking-wider">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition">
                                <BsFacebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition">
                                <BsInstagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition">
                                <BsTwitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition">
                                <BsGithub className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />

                <div className="flex md:flex-row flex-col justify-between items-center gap-4">
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} Qurbani Hat™. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-muted-foreground text-sm">
                        <Link href="#" className="hover:underline">Terms</Link>
                        <Link href="#" className="hover:underline">Privacy</Link>
                        <Link href="#" className="hover:underline">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}