import Image from "next/image";
import Link from "next/link";
const Banner = () => {
    return (
        <div className="relative min-h-100 sm:min-h-125 lg:min-h-150 w-full overflow-hidden">
            <Image
                src="/banner-4.png"
                alt="HelpHive Banner"
                fill
                sizes="100vw"
                className="object-cover"
                priority
            />


            <div className="absolute inset-0 bg-linear-to-r from-green-950/90 via-green-950/65 to-green-950/30 sm:to-transparent" />

            <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 space-y-3 sm:left-8 sm:right-auto sm:max-w-xl lg:left-16">

                <div className="flex items-center gap-0 text-4xl sm:text-6xl md:text-7xl font-bold drop-shadow-lg">
                    <span className="text-white">Help</span>
                    <span className="text-amber-400">Hive</span>
                </div>


                <div>
                    <h2 className="text-2xl sm:text-5xl font-bold drop-shadow-lg">
                        <span className="text-white">Empowering Communities,</span>
                        <br />
                        <span className="bg-linear-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent">
                            One Good Deed at a Time.
                        </span>
                    </h2>
                    <div className="mt-3 max-w-2xl font-medium text-green-50 drop-shadow-md">
                        <p>
                            HelpHive is a people-powered social development platform that connects
                            individuals through volunteering opportunities and local social service
                            events, empowering communities to create meaningful change together.
                        </p>
                    </div>
                </div>



                <div className="flex items-center gap-2">
                    <Link href={`/upcoming-events`}>
                        <button className="bg-amber-400 hover:bg-amber-300 text-green-950 rounded-2xl px-4 py-2 cursor-pointer font-bold shadow-lg transition-colors">
                            Explore Upcoming Events
                        </button>
                    </Link>
                    <Link href={`/create-event`}>
                        <button className="border border-white/70 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-2xl px-4 py-2 cursor-pointer font-bold shadow-lg transition-colors">
                            Create Events
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;