import Image from "next/image";

const ThirdWhistle = () => {
    return (
        <section  style={{ backgroundImage: 'url("/assets/bg.svg")'}}  className="w-full bg-center bg-cover">
            <div className="max-w-[1440px] w-[95%] md:w-11/12 lg:w-10/12 py-20 md:py-72 text-black mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl max-w-xl font-bold ">What makes <span className="text-primary">Third Whistle</span> different to other agencies?</h1>
                <div className="pt-20 pb-10">
                    <Image src="/assets/Frame 427321619.png" alt="Typical VSL Framework" className="w-full"  width={500} height={50} />
                </div>
                <div className="">
                    <p className="font-bold">Third Whistle VSL Framework</p>
                    <Image src="/assets/Maximum Result.png" alt="Third Whistle VSL Framework" className="w-full"  width={500} height={50} />
                </div>
            </div>
        </section>
    );
};

export default ThirdWhistle;