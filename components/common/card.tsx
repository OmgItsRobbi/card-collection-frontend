
interface CardProps {id: string, name: string, onChange?(): void}

export default function Card(props: CardProps) {
    const {id, name, onChange} = props;
    return (
    <div
    onClick={onChange}
    className="shadow-xl rounded col-span-3 border p-4 shadow text-lime-200"
  >
        id: {id} <br />
        item_name: {name}
    </div>
  )
}