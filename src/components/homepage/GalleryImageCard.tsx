
import Image from "next/image";
export interface IImage {
    id: number;
    title: string;
    image: string;
}
const GalleryImageCard = ({ image }: { image: IImage }) => {
    return (
        <div className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:shadow-lg">
            <Image
                src={image.image}
                alt={image.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="absolute inset-x-0 bottom-0 translate-y-1 p-4 transition duration-300 group-hover:translate-y-0">
                <span className="mb-2 block h-1 w-8 rounded-full bg-amber-500 transition-all duration-300 group-hover:w-14" />
                <h3 className="text-base font-semibold text-white drop-shadow">
                    {image.title}
                </h3>
            </div>
        </div>
    );
};

export default GalleryImageCard;