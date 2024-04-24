import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { TUnit } from "@arkejs/client";

interface ICard extends TUnit {
  name: string;
}

interface DialogProps {
  onChange?(): void;
  open: boolean;
  card: ICard;
}

export default function CardDialog(props: DialogProps) {
  const { onChange, open, card } = props;
  return (
    <Dialog onOpenChange={onChange} open={!!open} card={card}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{card.name}</DialogTitle>
          <DialogDescription>Show card text here</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {card.id} <br />
          {card.name}
        </div>
        <DialogFooter>
          <Button onClick={onChange} className="bg-green-300">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
