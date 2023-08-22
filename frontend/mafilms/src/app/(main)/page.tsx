import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[90vh] mt-[150px]">
      <Image
        src="/assets/pictures/DSC_0305.jpg"
        alt="MA Films Logo"
        width={400}
        height={100}
        priority
      />
    </div>
  );
}
