import { Inter, Roboto, Poppins } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Home() {
  return (
    <main
      className={`${poppins.className} flex h-screen items-center justify-center bg-[#d6e0ef]`}
    >
      {/* Card */}
      <div className="flex w-80 flex-col items-center justify-center rounded-2xl bg-white px-4 py-4 shadow-xl">
        <Image
          src={`/image-qr-code.png`}
          width={1000}
          height={1000}
          alt={`QR Code`}
          className="rounded-xl"
        ></Image>
        <div className="my-6 flex flex-col gap-4 px-2 text-center">
          <h1 className="text-xl font-semibold">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-sm text-neutral-400">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}
