import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-60 h-72 bg-white">
      <div className="bg-slate-900 m-2 w-56 h-56 rounded-lg">
        <Image src="/main.png" alt="photo" width={56} height={56}></Image>
      </div>
    </div>
  );
}
