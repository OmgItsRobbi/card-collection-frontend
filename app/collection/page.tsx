"use client";
import { getClient } from "@/arke/getClient";
import Card from "@/components/common/card";
import { useEffect, useState } from "react";
import Navbar from "@/components/ui/navbar";
import { TUnit } from "@arkejs/client";
import CardDialog from "@/components/common/card-dialog";

interface ICard extends TUnit {
  name: string;
}

export default function Collection() {
  const client = getClient();
  const [cards, setCards] = useState<ICard[]>([]);
  const [offset, setOffset] = useState(0);
  const [selectedCard, setSelectedCard] = useState<ICard | null>(null);

  useEffect(() => {
    onLoadData(0);
  }, []);

  function onLoadData(newOffset: number) {
    setOffset(newOffset);
    client.unit
      .getAll("card", { params: { offset: newOffset, limit: 50 } })
      .then((res) => {
        console.log(res.data.content.items);
        const newItems = res.data.content.items as ICard[];
        setCards((p) => [...p, ...newItems]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function handleCloseDialog() {
    setSelectedCard(null);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-background">
      <Navbar />
      <div className="mt-6 mb-14">
        <h1 className="fixed left-20 font-bold text-7xl">
          Take a look at your <span className="text-green-300">cards</span>.
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-4 p-8 mt-8">
        {cards.map((item) => (
          <Card {...item} onChange={() => setSelectedCard(item)} />
        ))}
      </div>
      {selectedCard && (
        <CardDialog
          onChange={handleCloseDialog}
          open={!!selectedCard}
          card={selectedCard}
        />
      )}
    </main>
  );
}
