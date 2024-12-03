import AwesomeClients from "@/components/HomePage/AwesomeClients";
import FAQ from "@/components/HomePage/FAQ";
import ThirdWhistle from "@/components/HomePage/ThirdWhistle";

export default function Home() {
  return (
    <main className="font-poppinsRegular pt-20">
        <ThirdWhistle></ThirdWhistle>
        <AwesomeClients></AwesomeClients>
        <FAQ></FAQ>
    </main>
  );
}
