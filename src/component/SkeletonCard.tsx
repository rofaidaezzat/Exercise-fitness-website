const SkeletonCard = ({ count = 12 }: { count?: number }) => {
    return (
      <div className="flex flex-wrap gap-6 justify-center mt-10">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="w-[200px] h-[200px] rounded-lg bg-gray-700 animate-pulse"
          />
        ))}
      </div>
    );
  };
  
  export default SkeletonCard;