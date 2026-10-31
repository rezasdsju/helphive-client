


import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import GalleryImageCard from "./GalleryImageCard";
const images = [
    {
        "id": 1,
        "title": "Food Distribution",
        "image": "https://images.ctfassets.net/hh631pqftr82/67aEscUPdOqneo6Xz9hatU/5b3291d098e224002f167cc9baf28085/94472104_1470309456485230_5867397691134181376_o.jpg?fl=progressive&fm=jpg&h=725&q=50&w=1164"
    },
    {
        "id": 2,
        "title": "Winter Clothes Distribution",
        "image": "https://images.ctfassets.net/hh631pqftr82/7czNJcOq8K7b7MMVens4tV/de838f290677957bd81d6d7b76763a33/84687225_1397136950469148_2352752800934395904_o_cropped.jpg?fl=progressive&fm=jpg&h=976&q=50&w=1952"
    },
    {
        "id": 3,
        "title": "Education Support",
        "image": "https://images.ctfassets.net/hh631pqftr82/4rPUq0CnA3h7LVOkf4XenU/4b0823dbbabf4e6d289734dafa51bf93/66530228_1221135128069332_7826313995458969600_o.jpg?fl=progressive&fm=jpg&h=1536&q=50&w=2048"
    },
    {
        "id": 4,
        "title": "Tree Plantation",
        "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800"
    },
    {
        "id": 5,
        "title": "Healthcare Support",
        "image": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800"
    },
    {
        "id": 6,
        "title": "Community Relief",
        "image": "https://images.ctfassets.net/hh631pqftr82/5ECyS8ThpzLRpHXqJSPpB1/51497a8c4f8e99ae79e5c40797e71a41/486041885_1058650456304247_583742656885433424_n.jpg?fl=progressive&fm=jpg&h=1536&q=50&w=2048"
    }
]
export interface IImage {
    id: number;
    title: string;
    image: string;
}
const Gallery = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-4  px-0 sm:px-4">
            <div className="col-span-1 px-3 sm:px-0 py-3 sm:py-0">
                <div className="text-center sm:text-start">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Our <span className="text-amber-500">Gallery</span>
                    </h2>
                    <p className="sm:mx-auto mt-2 max-w-2xl text-muted-foreground">
                        Explore moments of kindness, compassion, and teamwork from our community service activities across Bangladesh.
                    </p>
                </div>
            </div>
            <div className="col-span-3">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="mx-auto w-full max-w-6xl px-10"
                >
                    <CarouselContent>
                        {images.map((image: IImage) => (
                            <CarouselItem key={image.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                                <GalleryImageCard image={image}></GalleryImageCard>
                            </CarouselItem>
                        ))}

                    </CarouselContent>
                    <CarouselPrevious className={`left-1 cursor-pointer`} />
                    <CarouselNext className={`right-1 cursor-pointer`} />
                </Carousel>
            </div>
        </div>
    );
};

export default Gallery;