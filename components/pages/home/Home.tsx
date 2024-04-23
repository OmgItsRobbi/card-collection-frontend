"use client";
import { getClient } from "@/arke/getClient";
import Card from "@/components/common/card";
import { Button } from "@/components/ui/button";
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
import { TUnit } from "@arkejs/client";
import { useEffect, useState } from "react";

interface ICard extends TUnit {
  name: string;
}

export default function HomePage() {
  const client = getClient();
  const [cards, setCards] = useState<ICard[]>([]);
  const [offset, setOffset] = useState(0);
  const [selectedCard, setSelectedCard] = useState<ICard | null>(null);

  useEffect(() => {
    onLoadData(0, 1);
    client.arke.fn.get('card', 'my_function').then(res => console.log(res.data.content))
  }, []);

  function handleClear() {
    setCards([cards[0]]);
    setSelectedCard(null);
  }

  function onLoadData(newOffset: number, newLimit: number) {
    setOffset(newOffset);
    if (newLimit != 1) setCards([]);
    client.unit
      .getAll("card", {
        params: {
          offset: newOffset,
          limit: newLimit,
          // filter: 'eq(id,f0fcc8d0-f740-11ee-9fb9-a8b13b6f617f)'
        },
      })
      .then((res) => {
        console.log(res.data.content.items);
        const newItems = res.data.content.items as ICard[]
        setCards((p) => [...p, ...newItems]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function handleNext() {
    const newOffset = offset + 1;
    onLoadData(newOffset, 1);
  }

  function handlePrevious() {
    if (offset > 0) {
      const newOffset = offset - 1;
      onLoadData(newOffset, 1);
    }
  }

  function handleCloseDialog() {
    setSelectedCard(null);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-background">
      <Navbar/>
      <div className="mt-6 mb-14">
        <h1 className="fixed left-20 font-bold text-7xl">
          Welcome <span className="text-blue-900">username</span>!
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 p-4">
        <Button onClick={handlePrevious}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
      <Button variant={"outlined"} onClick={handleClear}>Clear Screen</Button>
      <div className="grid grid-cols-12 gap-4 p-8 text-Gray-500">
        {cards.map((item) => (
         <Card {...item} onChange={() => setSelectedCard(item)}/>
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
