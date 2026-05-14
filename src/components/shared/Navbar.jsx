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
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


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
    const Links = [
        <Link key={1} href="/" className={`px-3 py-2 text-sm font-medium rounded-md transition ${isActive('/')
            ? 'bg-green-600 text-white'
            : 'text-muted-foreground hover:bg-green-100 hover:text-accent-foreground'
            }`}>
            Home
        </Link>,
        <Link key={2} href="/animals" className={`px-3 py-2 text-sm font-medium rounded-md transition ${isActive('/animals')
            ? 'bg-green-600 text-white'
            : 'text-muted-foreground hover:bg-green-100 hover:text-accent-foreground'
            }`}>
            All Animals
        </Link>

    ];

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
                        {Links}
                    </div>

                    <div className="flex items-center gap-2">
                        {session?.user ? (
                            <>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="rounded-full">
                                            <Avatar>
                                                <AvatarImage src={session.user.image} alt={session.user.name} />
                                                <AvatarFallback className={'bg-green-300 text-green-800'}>{session.user.email.charAt(0).toUpperCase()}</AvatarFallback>
                                            </Avatar>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-32">
                                        <DropdownMenuGroup>
                                            <Link href={'/my-profile'}>
                                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                            </Link>
                                            <DropdownMenuItem>Billing</DropdownMenuItem>
                                            <DropdownMenuItem>Settings</DropdownMenuItem>
                                        </DropdownMenuGroup>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem variant="destructive" onClick={handleLogout}>
                                                Log out
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <Button
                                    variant="destructive"
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
                                    <Button variant="outline" size="sm">
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
                    <div className="md:hidden flex flex-col space-y-2 pb-4">
                        {Links}
                    </div>
                )}
            </div>
        </nav>

    );
}

export default Navbar;