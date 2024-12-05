import Image from "next/image";

const ThirdWhistle = () => {
    return (
        <section className="w-full bg-white relative">
             <Image src="/assets/Screenshot 2024-12-06 044516.png" alt="bottom-line" className="w-full absolute -top-3" width={2560} height={50} />
            <div className="max-w-[1440px] w-[95%] md:w-11/12 lg:w-10/12 py-20 md:py-28 lg:py-40 xl:py-52 text-black mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl max-w-xl font-bold ">What makes <span className="text-primary">Third Whistle</span> different to other agencies?</h1>
                <div className="pt-10  pb-5">
                <p className="font-bold">Typical VSL Framework</p>
                    <div className="sm:w-1/2 relative">
                    <Image src="/assets/Frame 427321618 (1).png" alt="Typical VSL Framework" className="w-full"  width={2500} height={50} />
                    <Image src="/assets/Frame 427321647 (1).png" alt="Typical VSL Framework" className="absolute -top-14 sm:-top-5 right-0 sm:-right-52"  width={200} height={50} />
                    </div>
                </div>
                <div className="pt-10 border-t-2">
                    <p className="font-bold">Third Whistle VSL Framework</p>
                    <Image src="/assets/Maximum Result.png" alt="Third Whistle VSL Framework" className="w-full"  width={500} height={50} />
                </div>
            </div>
            <Image src="/assets/Screenshot 2024-12-06 044617.png" alt="bottom-line" className="w-full absolute -bottom-3" width={2560} height={50} />
        </section>
    );
};

export default ThirdWhistle;