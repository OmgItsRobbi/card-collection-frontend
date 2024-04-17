'use client'
import { getClient } from "@/arke/getClient";
import { Button } from "@/components/ui/button";
import { TUnit } from "@arkejs/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Prova(){
    const client = getClient();
    const [cards, setCards] = useState<TUnit[]>([])
    const [offset, setOffset] = useState(0)
    const [selectedCard, setSelectedCard] = useState()
    
    useEffect(() => {
      onLoadData(0)
    },[])

    function onLoadData(newOffset: number){
      setOffset(newOffset)
      client.unit.getAll('card', {params: {offset: newOffset, limit: 50 }})
      .then(res => {
          console.log(res.data.content.items)
          setCards(p => ([...p, ...res.data.content.items])) 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }
  
    return(
      <main className="flex min-h-screen flex-col items-center p-24 bg-background">
        COLLECTION
          <Link href="./">
            <Button variant={"outlined"}>Back to Homepage</Button>
          </Link>
        <div className="grid grid-cols-12 gap-4 p-8 ">
          {cards.map(item => 
              <div className="col-span-3 border p-4 shadow text-warmGray-700 bg-primary">
                  id: {item.id}
                  is_collected: {String(item.is_collected)}
                  item_name: {String(item.name)}
              </div>
          )}
        </div>
      </main>
    )
  }