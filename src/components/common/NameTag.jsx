import WordRotate from "../magicui/word-rotate";

const NameTag = () => {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-bold flex gap-1 items-center md:text-[36px] md:-mt-3 sm:-mt-1">
        Shivansh Shukla
      </div>

      <div className="-mt-3 flex gap-1 items-center md:-mt-4">
        <div className="text-[#99D52A] text-sm font-medium md:text-xl">
          I&lsquo;m{" "}
        </div>
        <WordRotate
          className="text-sm text-white font-medium w-[160px] md:text-xl md:w-full"
          words={[
            "a MERN Developer",
            "a CP Coder",
            "a chaser of dreams",
          ]}
        />
      </div>
    </div>
  );
};

export default NameTag;
