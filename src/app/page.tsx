
import { DialogButton } from "@/components/DialogButton";
import Hero from "@/components/Hero";
import MainCard from "@/components/MainCard";


export default function Home() {

  return (
    <>
      <main className="flex-grow px-8 pb-8 md:p-8">
        <div className="mx-auto mb-4 max-w-4xl lg:my-8">
          <Hero />
          <div className="mt-12"></div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg">
            Transform any GitHub repository into a professional, well-structured README.md with AI.
            Perfect for developers who want to quickly generate comprehensive documentation.
            Simply enter any GitHub URL to analyze the repository and generate a polished README.
          </p>
        </div>
        <div className="mb-16 flex justify-center lg:mb-0">
          <MainCard />
        </div>
      </main>
    </>
  );
}