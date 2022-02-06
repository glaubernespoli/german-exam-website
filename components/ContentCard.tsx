import ContentCardProps from "../types/contentCard";

const ContentCard = ({ verb }: ContentCardProps) => {
  return (
    <div className="max-w-6xl px-3 pt-12 pb-24 mx-auto fsac4 md:px-1">
      <div className="ktq4">
        <h2 className="pt-4 text-6xl font-bold text-center text-white">{verb.verb}</h2>
        <h3 className="pt-3 text-lg font-semibold text-white">Lorem ipsum dolor sit amet</h3>
        <p className="pt-2 text-gray-200 value-text text-md fkrr1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt a libero in finibus. Maecenas a
          nisl vitae ante rutrum porttitor.
        </p>
      </div>
    </div>
  );
};

export default ContentCard;
