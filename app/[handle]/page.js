import Link from 'next/link';
import clientPromise from '@/lib/mongodb';
import { notFound } from 'next/navigation';

export default async function Page({ params }) {
    const resolvedParams = await params;
    const handle = resolvedParams.handle;

    const client = await clientPromise;
    const db = client.db("branch");
    const collection = db.collection("branches");

    const item = await collection.findOne({ handle: handle });

    if (!item) {
        return notFound();
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-linear-to-br from-red-700 via-red-500 to-orange-400 p-4 text-white">
            <div className="flex flex-col items-center gap-4 w-full max-w-md">
                <Link href={"/"}>
                    <div className="group flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-sm font-bold text-red-600 shadow-lg transition-all hover:bg-white hover:scale-105">
                        <img 
                            src="./assets/branch.png" 
                            height={20} 
                            width={20} 
                            alt="branch" 
                        />
                        <span>Branch</span>
                    </div>
                </Link>
                <div className="relative mt-4 h-32 w-32 overflow-hidden rounded-full border-4 border-white/30 shadow-2xl">
                    <img 
                        src={item.pfp} 
                        alt={item.handle} 
                        className="h-full w-full object-cover" 
                    />
                </div>
                <div className="text-center">
                    <p className="text-3xl font-extrabold tracking-tight">@{item.handle}</p>
                    <span className="text-sm font-medium text-red-100 opacity-80">Welcome to my branch</span>
                </div>
                <div className="flex w-full flex-col gap-4 mt-6">
                    {item.links.map((linkObj, index) => (
                        <a 
                            key={index} 
                            href={linkObj.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-4 font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-orange-600 hover:scale-105 active:scale-95 text-center break-all"
                        >
                            <span className="text-lg tracking-wide">{linkObj.linktext}</span>
                        </a>
                    ))}
                </div> 
            </div>
        </div>
    );
}