import AwesomeClients from "@/components/HomePage/AwesomeClients";
import Banner from "@/components/HomePage/Banner";
import ContactUs from "@/components/HomePage/ContactUs";
import FAQ from "@/components/HomePage/FAQ";
import ThirdWhistle from "@/components/HomePage/ThirdWhistle";

export default function Home() {
  return (
    <main className="font-poppinsRegular pt-20">
        <Banner></Banner>
        <ThirdWhistle></ThirdWhistle>
        <AwesomeClients></AwesomeClients>
        <FAQ></FAQ>
        <ContactUs></ContactUs>
    </main>
  );
}
