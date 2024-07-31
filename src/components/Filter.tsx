import {useState} from "preact/hooks";
import "./Filter.css"

type Props = {
    elements: Array<any>,
    options: Array<any>
}

export default function Filter({elements}: Props) {
    const [filter, setFilter] = useState(null)
    const options = [...new Map(elements.map(item => [item['type'], item])).values()]

    return (
        <>
        <div class="flex justify-center gap-[30px] my-[30px] text-[25px] items-center">
            <button onClick={() => setFilter(null)} class={`block btn cursor-pointer ${filter === null ? 'selected-btn' : ''}`}>Todos</button>
            {options.map(({type}) => (
                <>
                <hr class="h-[40px] w-[1px] border-0 bg-black"/>
                <button onClick={() => setFilter(type)} class={`block btn cursor-pointer capitalize ${filter === type ? 'selected-btn' : ''}`}>{type}</button>
                </>
            ))}
        </div>
        <div class="grid grid-cols-3 gap-y-[30px]">
            {elements.filter(({type}) => type === filter || filter === null).map((e) => (
                <div class="flex flex-col justify-center">
                    <img src={`/${e.type}.svg`} alt={e.type} class="w-[60px] m-auto"/>
                    <p class="capitalize text-center">{e.region}</p>
                    <p class="capitalize text-center text-[20px] font-bold">{e.name}</p>
                    <a href={`tel:${e.phone}`} class="block m-auto text-[#D00B27] font-sans font-bold">{e.phone}</a>
                    <p class="text-center">{e.description}</p>
                    <div>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}