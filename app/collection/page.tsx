"use client";
import { getClient } from "@/arke/getClient";
import { Button } from "@/components/ui/button";
import Card from "@/components/common/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TUnit } from "@arkejs/client/dist/types/unit";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Navbar from "@/components/ui/navbar";

interface ICard extends TUnit {
  name: string;
}

export default function Prova() {
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
        <Dialog onOpenChange={handleCloseDialog} open={!!selectedCard}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>CARD {selectedCard.id}</DialogTitle>
              <DialogDescription>Show card text here</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div>
                ID: {selectedCard.id} <br />
                NAME: {selectedCard.name}
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleCloseDialog}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </main>
  );
}
