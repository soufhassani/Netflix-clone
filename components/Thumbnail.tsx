import Image from "next/image";
import { modalState, movieState, scrollState } from "../atoms/modalAtom";
import { Movie } from "../typings";
import { useRecoilState } from "recoil";

interface Prop {
  // when usin Firebase
  //   movie: Movie | DocumentData;
  movie: Movie;
}

const Thumbnail = ({ movie }: Prop) => {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [stopScroll, setStopScroll] = useRecoilState(scrollState);
  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transiton duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
        setStopScroll(true);
      }}
    >
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
