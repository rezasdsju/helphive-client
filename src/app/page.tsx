import Features from "@/components/homepage/Features";
import Banner from "@/components/homepage/Banner";
import UpcomingEvents from "@/components/homepage/UpcomingEvents";
export default function Home() {
  return (
    <div>
      <Banner />
      <Features></Features>
      <UpcomingEvents />
    </div>
  );
}
