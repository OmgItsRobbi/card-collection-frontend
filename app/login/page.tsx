import { LoginForm } from "@/components/auth/login-form";
import Image from "next/image";

const ImageStyleSymbols = {
  borderRadius: "50%",
  border: "5px solid black",
  opacity: "65%",
};

const ImageStyleCard = {
  borderRadius: "5%",
  border: "3px solid grey",
  opacity: "35%",
};

export default function Page() {
  return (
    <div className="bg-background bg-cover h-screen">
      <div className="flex justify-center items-center pt-16 gap-12">
        <Image
          src={require("../../public/black.png")}
          alt="black mana"
          width={100}
          height={100}
          style={ImageStyleSymbols}
        />
        <Image
          src={require("../../public/white.jpg")}
          alt="white mana"
          width={100}
          height={100}
          style={ImageStyleSymbols}
        />
        <Image
          src={require("../../public/blue.png")}
          alt="blue mana"
          width={100}
          height={100}
          style={ImageStyleSymbols}
        />
        <Image
          src={require("../../public/red.png")}
          alt="green mana"
          width={100}
          height={100}
          style={ImageStyleSymbols}
        />
        <Image
          src={require("../../public/green.png")}
          alt="red mana"
          width={100}
          height={100}
          style={ImageStyleSymbols}
        />
      </div>
      <div className="flex justify-center items-center pt-16">
        <h1 className="font-bold text-7xl">
          Card <span className="text-indigo-900">Collector</span>
        </h1>
        <div className="fixed top-10 right-3">
          <Image
            src={require("../../public/the one ring.jpg")}
            alt="the one ring"
            width={350}
            height={750}
            style={ImageStyleCard}
            className="transform -rotate-12"
          />
        </div>
      </div>
      <div className="flex justify-center items-center pt-8">
        <h2 className="font-bold text-xl">
          A website to track the{" "}
          <span className="text-blue-900 font-bold">cards</span> you collect.
        </h2>
      </div>
      <div className="grid grid-cols-5">
        <div className="fixed bottom-0 left-0">
          <Image
            src={require("../../public/atraxa.jpg")}
            alt="atraxa"
            width={350}
            height={750}
            style={ImageStyleCard}
            className="transform rotate-12"
          />
        </div>
        <div className="flex col-start-3 justify-center pt-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
