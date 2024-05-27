"use client";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { IMember } from "@/types/member";
import Link from "next/link";
import Image from "next/image";

interface HomeProps {
  user: IMember;
}

export default function HomePage(props: HomeProps) {
  const { user } = props;

  const ImageStyle = {
    borderRadius: "3%",
    border: "2px solid darkblue",
    opacity: "85%",
  };

  return (
    <main className="flex flex-col justify-center min-h-screen bg-background">
      <Navbar />
      <div className="mt-8 mb-10 relative">
        <h1 className="absolute left-20 font-bold text-7xl">
          Welcome <span className="text-indigo-900">{user.username}</span>!
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mx-20 mt-8">
        <div className="mt-10 aspect-square pt-8 rounded-lg shadow border-2 border-solid border-secondary bg-amber-50 relative">
          <h2 className="text-4xl text-center font-bold pb-4 text-secondary">
            Collection
          </h2>
          <p className="py-4 px-5 text-xl font-semibold">
            Browse your collection of cards
          </p>
          <div className="flex justify-center mt-4">
            <Image
              src={require("../../../public/card_collection.png")}
              alt="magic cards collection"
              style={ImageStyle}
              height={300}
            />
          </div>
          <Link href={"/collection"}>
            <Button className="bg-secondary text-white border-2 border-solid border-secondary hover:text-secondary absolute bottom-4 right-4">
              Explore
            </Button>
          </Link>
        </div>
        <div className="mt-10 aspect-square pt-8 rounded-lg shadow border-2 border-solid border-secondary bg-amber-50 relative">
          <h2 className="text-4xl text-center font-bold pb-4 text-secondary">
            Decks
          </h2>
          <p className="py-4 px-5 text-xl font-semibold">
            Create and edit your decks
          </p>
          <div className="flex justify-center mt-4">
            <Image
              src={require("../../../public/deck.jpg")}
              alt="magic cards collection"
              style={ImageStyle}
              height={300}
            />
          </div>
          <Link href={"/decks"}>
            <Button className="bg-secondary text-white ml-4 border-2 border-solid border-secondary hover:text-secondary absolute bottom-4 right-4">
              Explore
            </Button>
          </Link>
        </div>
        <div className="mt-10 aspect-square py-8 rounded-lg shadow border-2 border-solid border-secondary bg-amber-50">
          <h2 className="text-4xl text-center font-bold pb-4 text-secondary">
            Account
          </h2>
          <p className="py-2 px-5">Edit your account details</p>
          <Button className="bg-secondary text-white ml-4">Open</Button>
        </div>
      </div>
    </main>
  );
}
