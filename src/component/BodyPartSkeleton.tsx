const BodyPartSkeleton = () => {
    return (
      <div className="flex space-x-6 px-16 overflow-x-hidden">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-700 rounded-lg w-[160px] h-[100px] animate-pulse flex-shrink-0"
          ></div>
        ))}
      </div>
    );
  };
  
  export default BodyPartSkeleton;