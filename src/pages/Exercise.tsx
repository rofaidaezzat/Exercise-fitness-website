import { useRef, useState } from "react";
import ExerciseCard from "../component/ExerciseCard/Exercise";
import HeaderExercise from "../component/HeaderExercise";
import useCustomQuery from "../Hook/CustomQuery";
import { FaDumbbell } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../App.css";

import BodyPartSkeleton from "../component/BodyPartSkeleton";
import SkeletonCard from "../component/SkeletonCard";
interface IExercise {
  id: string;
  name: string;
  gifUrl: string;
  bodyPart: string;
}

const Exercise = () => {
  // ----------States------------
  const [selectedExercise, setSelectedExercise] = useState<IExercise[]>([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState<string>("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // ----------Functions------------
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  // ----------Queries------------
  const { data: bodyParts, isLoading: bodyPartsLoading } = useCustomQuery({
    queryKey: ["bodyparts"],
    url: "/bodyPartList",
  });
  const { data: exercises, isLoading: exercisesLoading } = useCustomQuery({
    queryKey: ["exercises", selectedBodyPart],
    url: selectedBodyPart ? `/bodyPart/${selectedBodyPart}` : "",
  });
  const { data: exerciseGif, isLoading: exerciseGifLoading } = useCustomQuery({
    queryKey: ["exerciseGif", selectedExercise[0]?.id],
    url:
      selectedExercise.length > 0 ? `/exercise/${selectedExercise[0].id}` : "",
  });
  // ---------Handler functions------------
  const handleCardClick = (bodyPart: string) => {
    setSelectedBodyPart(bodyPart);
  };
  const handleExerciseClick = (exercise: IExercise) => {
    setSelectedExercise([exercise]);
  };

  return (
    <div className="bg-[#121212] w-full pb-16 text-white pt-24 px-7 lg:pt-24">
      {/* ------------- Header-------------- */}
      <div className="pb-20">
        <HeaderExercise />
      </div>

      {/* ------------- Body Parts-------------- */}
      <div className="relative py-10">
        {/* أزرار السحب */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 z-20 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 z-20 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        >
          <FaChevronRight size={20} />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll space-x-6 scroll-smooth snap-x snap-mandatory px-16 hide-scrollbar"
        >
          {bodyPartsLoading ? (
            <BodyPartSkeleton />
          ) : (
            bodyParts?.map((bodyPart: string, id: number) => (
              <div
                key={id}
                onClick={() => handleCardClick(bodyPart)}
                className="snap-start flex-shrink-0 min-w-[160px]"
              >
                <ExerciseCard Icon={<FaDumbbell />} ExerciseTitle={bodyPart} />
              </div>
            ))
          )}
        </div>
      </div>

      {/* ------------- Exercises-------------- */}
      {exercisesLoading ? (
        <SkeletonCard />
      ) : (
        <div
          className="mt-10 flex flex-wrap gap-6 
                  justify-center sm:justify-center lg:justify-start 
                  items-center"
        >
          {exercises?.map((exercise: IExercise) => (
            <div
              key={exercise.id}
              onClick={() => handleExerciseClick(exercise)}
              className="w-[150px] sm:w-[180px] lg:w-[250px] transition-transform duration-200 hover:scale-105"
            >
              <img
                src={exercise.gifUrl}
                alt={exercise.name}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      )}

      {/* ------------- Exercise Gif-------------- */}
      {exerciseGifLoading ? (
        <div className="w-[200px] h-[200px] rounded-lg bg-gray-700 animate-pulse"></div>
      ) : (
        exerciseGif && (
          <div className="mt-10 flex flex-wrap gap-6 justify-center">
            <img
              key={exerciseGif.id}
              src={exerciseGif.gifUrl}
              alt={exerciseGif.name}
              className="w-[150px] sm:w-[180px] lg:w-[220px] h-auto rounded-lg"
            />
          </div>
        )
      )}
    </div>
  );
};

export default Exercise;