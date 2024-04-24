"use client";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { IMember } from "@/types/member";

interface HomeProps {
  user: IMember;
}

export default function HomePage(props: HomeProps) {
  const { user } = props;

  return (
    <main className="flex flex-col justify-center min-h-screen bg-background">
      <Navbar />
      <div className="mt-8 mb-8">
        <h1 className="fixed left-20 top-32 font-bold text-7xl">
          Welcome <span className="text-blue-900">{user.username}</span>!
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mx-20">
        <div className="pb-8 rounded-lg shadow border-2 border-solid border-emerald-500 bg-green-300">
          <h2 className="text-4xl text-center font-bold py-4 text-blue-900">
            Collection
          </h2>
          <p className="p-2">Browse your collection of cards</p>
          <Button className="bg-emerald-500">Open</Button>
        </div>
        <div className="pb-8 rounded-lg shadow border-2 border-solid border-emerald-500 bg-green-300">
          <h2 className="text-4xl text-center font-bold py-4 text-blue-900">
            Decks
          </h2>
          <p className="p-2">Create and edit your decks</p>
          <Button className="bg-emerald-500">Open</Button>
        </div>
        <div className="pb-8 rounded-lg shadow border-2 border-solid border-emerald-500 bg-green-300">
          <h2 className="text-4xl text-center font-bold py-4 text-blue-900">
            Account
          </h2>
          <p className="p-2">Edit your account details</p>
          <Button className="bg-emerald-500">Open</Button>
        </div>
      </div>
    </main>
  );
}
