import Image from "next/image";

const ThirdWhistle = () => {
    return (
        <section  style={{ backgroundImage: 'url("/assets/bg.svg")'}}  className="w-full bg-center bg-cover">
            <div className="max-w-[1440px] w-[95%] md:w-11/12 lg:w-10/12 py-20 md:py-72 text-black mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl max-w-xl font-bold ">What makes <span className="text-primary">Third Whistle</span> different to other agencies?</h1>
                <div className="pt-10 relative pb-5  w-1/2">
                <p className="font-bold">Typical VSL Framework</p>
                <Image src="/assets/Frame 427321618 (1).png" alt="Typical VSL Framework" className="w-full"  width={500} height={50} />
                    <Image src="/assets/Frame 427321647 (1).png" alt="Typical VSL Framework" className="absolute top-10 -right-52"  width={200} height={50} />
                </div>
                <div className="pt-10 border-t-2">
                    <p className="font-bold">Third Whistle VSL Framework</p>
                    <Image src="/assets/Maximum Result.png" alt="Third Whistle VSL Framework" className="w-full"  width={500} height={50} />
                </div>
            </div>
        </section>
    );
};

export default ThirdWhistle;