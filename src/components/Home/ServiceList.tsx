import EasyWins from "/public/images/home/easy-wins.svg";
import Concrete from "/public/images/home/concrete.svg";
import HackGrowth from "/public/images/home/hack-growth.svg";
import Image from "next/image";

export default function ServiceList() {
  return (
    <div className="grid grid-cols-[repeat(3,320px)] my-20 text-center gap-x-4 place-items-center mx-auto w-fit">
      <div className="flex flex-col items-center gap-y-4 max-w-56">
        <Image
          src={EasyWins}
          width="72"
          height="72"
          unoptimized
          alt="easy wins"
        />
        <h3 className="text-2xl font-bold text-[#252B42]">Easy Wins</h3>
        <p className="text-[#737373] text-sm">
          Get your best looking smile now!
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-4 max-w-56">
        <Image
          src={Concrete}
          width="72"
          height="72"
          unoptimized
          alt="easy wins"
        />
        <h3 className="text-2xl font-bold text-[#252B42]">Concrete</h3>
        <p className="text-[#737373] text-sm">
          Defalcate is most focused in helping you discover your most beautiful
          smile
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-4 max-w-56">
        <Image
          src={HackGrowth}
          width="72"
          height="72"
          unoptimized
          alt="easy wins"
        />
        <h3 className="text-2xl font-bold text-[#252B42]">Hack Growth</h3>
        <p className="text-[#737373] text-sm">
          Overcame any hurdle or any other problem.
        </p>
      </div>
    </div>
  );
}
