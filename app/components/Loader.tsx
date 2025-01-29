import Image from "next/image";

const Loader = ({ loading }: { loading: boolean }) => {
  return (
    <div
      className={`absolute inset-0 flex justify-center items-center bg-white z-50 transition-opacity duration-1000 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Image
        src="/loader/loader.gif"
        alt="Loading..."
        width={100}
        height={100}
        unoptimized
      />
    </div>
  );
};

export default Loader;