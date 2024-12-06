import Image from "next/image";
import Link from "next/link";
import TitleAndDescription from "../ShareComponent/TitleAndDescription";
interface ImageDataType {
    src: string,
    alt: string
}
const AwesomeClients = () => {


    const imageData : ImageDataType[] = [
        {
            src: "/assets/google.png",
            alt: "google"
        },
        {
            src: "/assets/instagram.png",
            alt: "instagram"
        },
        {
            src: "/assets/microsoft.png",
            alt: "microsoft"
        },
        {
            src: "/assets/windows.png",
            alt: "windows"
        },
]


    return (
        <section>
             <div className="max-w-[1440px] w-11/12 lg:w-10/12 py-20 md:py-24 xl:py-40 mx-auto">
            <TitleAndDescription
        title="Trusted by"
        subTitle="Awesome clients"
      />
            
            <div className="flex mt-14  justify-around">
                {
                    imageData.map((img : ImageDataType , index) =>  <Link href="" className={`${index !== imageData.length - 1 ? 'border-r-2' : ''} w-full flex justify-center`} key={img.alt}>
                        <Image src={img.src} alt={img.alt} className="w-[50px] md:w-[80px] md:h-[80px] h-[50px]" width={80} height={80} />
                    </Link>)
                }
            </div>
        </div>
                <Image src="/assets/line (1).png" alt="bottom-line" className="w-full" width={2560} height={50} />
        </section>
    );
};

export default AwesomeClients;