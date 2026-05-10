'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();

    const isActive = (path) => pathName === path;
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = authClient.useSession();

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Logged out successfully!");
                    router.push("/");
                },
            },
        });
    }

    return (
        <nav className="top-0 z-50 sticky bg-background backdrop-blur border-b w-full">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex justify-center items-center bg-linear-to-br from-green-600 to-green-700 rounded-lg w-8 h-8">
                            <Image src="/logo.png" width={40} height={40} alt="Qurbani Hat Logo" className="w-auto h-6" />
                        </div>
                        <span className="hidden sm:inline font-bold text-xl">QurbaniHat</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-1">
                        <Link href="/" className={`px-3 py-2 text-sm font-medium rounded-md transition ${isActive('/')
                            ? 'bg-accent text-accent-foreground'
                            : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                            }`}>
                            Home
                        </Link>
                        <Link href="/animals" className={`px-3 py-2 text-sm font-medium rounded-md transition ${isActive('/animals')
                            ? 'bg-accent text-accent-foreground'
                            : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                            }`}>
                            Animals
                        </Link>
                        {/* TODO: move this inside a user logo */}
                        {session?.user && (
                            <Link href="/profile" className={`px-3 py-2 text-sm font-medium rounded-md transition ${isActive('/profile')
                                ? 'bg-accent text-accent-foreground'
                                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                                }`}>
                                Profile
                            </Link>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                        {session?.user ? (
                            <>
                                <span className="hidden sm:inline text-muted-foreground text-sm">
                                    {session.user.email}
                                </span>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleLogout}
                                    className="flex items-center gap-2"
                                >
                                    <LogOut className="w-4 h-4" />
                                    <span className="hidden sm:inline">Logout</span>
                                </Button>
                            </>
                        ) : (
                            <>
                                <Link href="/login">
                                    <Button variant="ghost" size="sm">
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/register">
                                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                        Register
                                    </Button>
                                </Link>
                            </>
                        )}

                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <BiX className="w-5 h-5" />
                            ) : (
                                <BiMenu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden space-y-2 pb-4">
                        <Link href="/" className="block hover:bg-accent px-3 py-2 rounded-md font-medium text-sm">
                            Home
                        </Link>
                        <Link href="/animals" className="block hover:bg-accent px-3 py-2 rounded-md font-medium text-sm">
                            Animals
                        </Link>
                        {session?.user && (
                            <Link href="/profile" className="block hover:bg-accent px-3 py-2 rounded-md font-medium text-sm">
                                Profile
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </nav>

    );
}

export default Navbar;