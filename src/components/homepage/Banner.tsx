import Image from "next/image";
const Banner = () => {
    return (
        <div className="relative min-h-100 sm:min-h-125 lg:min-h-150 w-full">

            <Image
                src="/banner-4.png"
                alt="HelpHive Banner"
                fill
                sizes="100vw"
                className="object-cover"
                priority
            />
            <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 space-y-3 sm:left-8 sm:right-auto sm:max-w-xl lg:left-16">
                <div className="flex items-center gap-0 text-4xl sm:text-6xl md:text-7xl font-bold">
                    {/* <span className="bg-linear-to-r from-blue-800 to-red-400 bg-clip-text text-transparent">HelpHive</span> */}
                    <span className="text-[#0F172A]">Help</span><span className="text-yellow-500">Hive</span>
                </div>
                <div>
                    <h2 className="text-2xl sm:text-5xl font-bold"><span className="text-black">Empowering Communities,</span> <br /><span className="bg-linear-to-r from-amber-600 to-amber-300 bg-clip-text text-transparent">One Good Deed at a Time.</span></h2>
                    <div className="max-w-2xl font-medium text-blue-500 drop-shadow-sm">
                        <p>HelpHive is a people-powered social development platform that connects individuals through volunteering opportunities and local social service events, empowering communities to create meaningful change together.</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className=" bg-blue-500 text-white rounded-2xl px-4 py-2 cursor-pointer font-bold">Find Opprotunities</button>
                    <button className="border bg-amber-50 dark:bg-[#172033] border-green-200 dark:border-gray-600 rounded-2xl px-4 py-2  cursor-pointer font-bold">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;