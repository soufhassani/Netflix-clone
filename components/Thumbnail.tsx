import Image from "next/image";
import { Movie } from "../typings";

interface Prop {
  // when usin Firebase
  //   movie: Movie | DocumentData;
  movie: Movie;
}

const Thumbnail = ({ movie }: Prop) => {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transiton duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie?.backdrop_path || movie?.poster_path
        }`}
        fill
        className="object-cover rounded-sm md:rounded"
        alt="/"
      />
    </div>
  );
};

export default Thumbnail;
