'use client'
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";


const BackButton = () => {
    const router = useRouter();
    return (
        <Button
            variant="ghost"
            onClick={() => router.back()}
            className="flex items-center gap-2 mb-6 text-green-800 animate__animated animate__fadeInLeft"
        >
            <ArrowLeft className="w-4 h-4" />
            Back
        </Button>
    );
};

export default BackButton;