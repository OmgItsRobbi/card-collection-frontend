'use client'
import { getClient } from "@/arke/getClient";
import { Button } from "@/components/ui/button";
import { TUnit } from "@arkejs/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage(){
  const client = getClient();
  const [cards, setCards] = useState<TUnit[]>([])
  const [offset, setOffset] = useState(0)
  
  useEffect(() => {
    onLoadData(0, 1)
  },[])

  function handleClear() {
    setCards([cards[0]])
  }

  function onLoadData(newOffset: number, newLimit: number){
    setOffset(newOffset)
    if(newLimit != 1) setCards([])
    client.unit.getAll('card', {params: {offset: newOffset, limit: newLimit
      // filter: 'eq(id,f0fcc8d0-f740-11ee-9fb9-a8b13b6f617f)'
    }})
    .then(res => {
        console.log(res.data.content.items)
        setCards(p => ([...p, ...res.data.content.items])) 
    })
    .catch(error => {
      console.error('Error fetching data:', error);
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

  return(
    <main className="flex min-h-screen flex-col items-center  p-24 bg-blue-900">
      HOMEPAGE
      <Link href="/collection">
        <Button>Open Collection</Button>
      </Link>
      <div className="flex flex-row items-center justify-center gap-4 p-4">
        <Button onClick={handlePrevious}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
      <Button onClick={handleClear}>Clear Screen</Button>
      

      <div className="grid grid-cols-12 gap-4 p-8">
        {cards.map(item => 
            <div className="col-span-3 border p-4 shadow text-lime-200">
                id: {item.id}
                is_collected: {String(item.is_collected)}
                item_name: {String(item.name)}
            </div>
        )}
      </div>
    </main>
  )
}