"use client";
import { getClient } from "@/arke/getClient";
import { useEffect, useState } from "react";
import Navbar from "@/components/ui/navbar";
import { TUnit } from "@arkejs/client";
import Deck from "@/components/common/deck";
import { Dialog } from "@radix-ui/react-dialog";

interface IDeck extends TUnit {
  name: string;
}

export default function Decks() {
  const client = getClient();
  const [decks, setDecks] = useState<IDeck[]>([]);
  const [offset, setOffset] = useState(0);
  const [selectedDeck, setSelectedDeck] = useState<IDeck | null>(null);

  useEffect(() => {
    onLoadData(0);
  }, []);

  function onLoadData(newOffset: number) {
    setOffset(newOffset);
    client.unit
      .getAll("deck", { params: { offset: newOffset, limit: 50 } })
      .then((res) => {
        console.log(res.data.content.items);
        const newItems = res.data.content.items as IDeck[];
        setDecks((p) => [...p, ...newItems]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function handleCloseDeck() {
    setSelectedDeck(null);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-background">
      <Navbar />
      <div className="mt-6 mb-14">
        <h1 className="fixed left-20 font-bold text-7xl">
          Build your custom <span className="text-yellow-500">deck</span>.
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-4 p-8 mt-8">
        {decks.map((item) => (
          <Deck {...item} onChange={() => setSelectedDeck(item)} />
        ))}
      </div>
      {selectedDeck && (
        <Dialog
          onOpenChange={handleCloseDeck}
          open={!!selectedDeck}
          card={selectedDeck}
        />
      )}
    </main>
  );
}
