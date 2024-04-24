interface DeckProps {
  id: string;
  name: string;
  onChange?(): void;
}

export default function Deck(props: DeckProps) {
  const { id, name, onChange } = props;
  return (
    <div
      onClick={onChange}
      className="shadow-xl rounded col-span-3 border border-black p-4 shadow w-300 h-300 text-blue-900 bg-green-300"
    >
      id: {id} <br />
      item_name: {name}
    </div>
  );
}
