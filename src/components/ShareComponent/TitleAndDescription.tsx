

interface TitleAndDescriptionProps {
  title: string;
  subTitle: string;
}

const TitleAndDescription: React.FC<TitleAndDescriptionProps> = ({ title, subTitle }) => {
  return (
    <div className="py-10 lg:py-20">
      <h1 className="text-2xl text-primary sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold">{title}</h1>
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold">{subTitle}</h1>
    </div>
  );
};

export default TitleAndDescription;
