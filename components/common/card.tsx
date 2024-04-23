
interface CardProps {id: string, name: string, onChange?(): void}

export default function Card(props: CardProps) {
    const {id, name, onChange} = props;
    return (
    <div
    onClick={onChange}
    className="shadow-xl rounded col-span-3 border border-black p-4 shadow text-blue-900 bg-green-300"
  >
        id: {id} <br />
        item_name: {name}
    </div>
  )
}