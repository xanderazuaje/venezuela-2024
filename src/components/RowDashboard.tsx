import {useState} from "preact/hooks";
import AcceptBtn from "@/components/dashboard/AcceptBtn.tsx"
import RejectBtn from "@/components/dashboard/RejectBtn.tsx"
import type {RowDashboardProps} from "@/interfaces/rowdashboard.interface.ts";

const accept = async (data: RowDashboardProps) => {
    const res = await fetch("/api/queue/accept", {
        method: "POST",
        body: JSON.stringify(data)
    })
    if (!res.ok)
        console.log(res)
    else location.reload()
}

const reject = async (data: RowDashboardProps) => {
    const res = await fetch("/api/queue/reject", {
        method: "POST",
        body: JSON.stringify(data)
    })
    if (!res.ok)
        console.log(res)
    else location.reload()
}

const RowDashboard = ({data}: {data: RowDashboardProps}) => {
    console.log(data)
    const [clicked, setClicked] = useState(false)
    return (
        <div class={`${clicked ? "bg-custom-red" : "bg-[#ECECEC]"} ${clicked ? "text-white" : ""} text-center py-8 px-4 rounded-2xl`} onClick={() => {
            setClicked(!clicked)
        }}>
            <div class={`${!clicked ? "grid-cols-5" : "grid-cols-6"} grid items-center`}>
                <p>{new Date(data.created_at).toLocaleDateString("es-VE")}</p>
                <p>{data.name}</p>
                <p>{data.region}</p>
                <p>{data.phone}</p>
                <p>{data.service}</p>
                {clicked &&
                    <div class="flex gap-5">
                        <AcceptBtn onClick={async () => accept(data)}/>
                        <RejectBtn onClick={async () => reject(data)}/>
                    </div>
                }
            </div>
            {clicked &&
                <div class="bg-white text-[#080808] w-full text-left mt-5">
                    <p>Descripción: {data.description}</p>
                    {data.social?.instagram && <p>{"Instagram: " + data.social?.instagram}</p>}
                    {data.social?.telegram && <p>{"Telegram: " + data.social?.telegram}</p>}
                    {data.social?.whatsapp && <p>{"Whatsapp: " + data.social?.whatsapp}</p>}
                </div>
            }
        </div>
    );
};

export default RowDashboard;
