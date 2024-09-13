const Subtitle = ({
  subtitle,
  classStyling,
}: {
  subtitle: string;
  classStyling?: string;
}) => {
  return (
    <div className={`flex items-center gap-4 ${classStyling}`}>
      <div className="size-5 bg-orange-600" />
      <span className="text-2xl">{subtitle}</span>
    </div>
  );
};

export default Subtitle;
