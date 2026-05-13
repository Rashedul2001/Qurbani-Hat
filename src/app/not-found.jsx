import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const NotFound = () => {
    return (
        <main className="flex justify-center items-center px-4 py-12 min-h-screen">
            <Card className="p-8 w-full max-w-md text-center animate__animated animate__fadeInUp">
                <div className="mb-4 font-bold text-green-600 text-6xl">404</div>
                <h1 className="mb-2 font-bold text-3xl">Page Not Found</h1>
                <p className="mb-6 text-muted-foreground">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
                </p>
                <div className="space-y-3">
                    <Link href="/">
                        <Button className="bg-green-600 hover:bg-green-700 w-full">
                            Go to Home
                        </Button>
                    </Link>
                    <Link href="/animals">
                        <Button variant="outline" className="w-full">
                            Browse Animals
                        </Button>
                    </Link>
                </div>
            </Card>
        </main>
    );
}
export default NotFound;
