import Image from "next/image";
import Link from "next/link";
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
             <div className="max-w-[1440px] w-[95%] md:w-11/12 lg:w-10/12 py-20 md:py-32 mx-auto">
            <div className="space-y-2">
                <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold">Trusted by </h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Awesome clients</h1>
            </div>
            <div className="flex mt-14 justify-around">
                {
                    imageData.map((img : ImageDataType , index) =>  <Link href="" className={`${index !== imageData.length - 1 ? 'border-r-2' : ''} w-full flex justify-center`} key={img.alt}>
                        <Image src={img.src} alt={img.alt} width={50} height={50} />
                    </Link>)
                }
            </div>
        </div>
                <Image src="/assets/line (1).png" alt="bottom-line" className="w-full" width={2560} height={50} />
        </section>
    );
};

export default AwesomeClients;