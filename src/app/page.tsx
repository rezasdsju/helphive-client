import Features from "@/components/homepage/Features";
import Banner from "@/components/homepage/Banner";
import UpcomingEvents from "@/components/homepage/UpcomingEvents";
import Gallery from "@/components/homepage/Gallery";
import Newsletter from "@/components/homepage/Newsletter ";
export default function Home() {
  return (
    <div>
      <Banner />
      <Features></Features>
      <UpcomingEvents />
      <Gallery/>
      <Newsletter/>
    </div>
  );
}
