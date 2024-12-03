import AwesomeClients from "@/components/HomePage/AwesomeClients";
import Banner from "@/components/HomePage/Banner";
import Video from "@/components/HomePage/Video";
import ContactUs from "@/components/HomePage/ContactUs";
import FAQ from "@/components/HomePage/FAQ";
import ThirdWhistle from "@/components/HomePage/ThirdWhistle";

export default function Home() {
  return (
    <main className="font-poppinsRegular pt-20">
        <Banner></Banner>
        <Video></Video>
        <ThirdWhistle></ThirdWhistle>
        <AwesomeClients></AwesomeClients>
        <FAQ></FAQ>
        <ContactUs></ContactUs>
    </main>
  );
}
