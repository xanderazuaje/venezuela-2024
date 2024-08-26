import { useState } from 'preact/hooks';
import AcceptBtn from '@/components/dashboard/AcceptBtn.tsx';
import RejectBtn from '@/components/dashboard/RejectBtn.tsx';
import type { RowDashboardProps } from '@/interfaces/rowdashboard.interface.ts';

const accept = async (data: RowDashboardProps) => {
  const res = await fetch('/api/queue/accept', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  if (!res.ok) console.log(res);
  else location.reload();
};

const reject = async (data: RowDashboardProps) => {
  const res = await fetch('/api/queue/reject', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  if (!res.ok) console.log(res);
  else location.reload();
};

const RowDashboard = ({ data }: { data: RowDashboardProps }) => {
  console.log(data);
  const [clicked, setClicked] = useState(false);
  return (
    <div
      class={`${clicked ? 'bg-custom-red' : 'bg-[#ECECEC]'} ${
        clicked ? 'text-white' : ''
      } rounded-2xl px-4 py-8 text-center`}
      onClick={() => {
        setClicked(!clicked);
      }}
    >
      <div class={`${!clicked ? 'grid-cols-5' : 'grid-cols-6'} grid items-center`}>
        <p>{new Date(data.created_at).toLocaleDateString('es-VE')}</p>
        <p>{data.name}</p>
        <p>{data.region}</p>
        <p>{data.phone}</p>
        <p>{data.service}</p>
        {clicked && (
          <div class='flex gap-5'>
            <AcceptBtn onClick={async () => accept(data)} />
            <RejectBtn onClick={async () => reject(data)} />
          </div>
        )}
      </div>
      {clicked && (
        <div class='mt-5 w-full rounded-2xl bg-white p-5 text-left text-[#080808]'>
          <p>
            <b>Descripción:</b> {data.description}
          </p>
          {data.social?.instagram && (
            <p>
              <b>Instagram:</b> {data.social?.instagram}
            </p>
          )}
          {data.social?.telegram && (
            <p>
              <b>Telegram:</b> {data.social?.telegram}
            </p>
          )}
          {data.social?.whatsapp && (
            <p>
              <b>Whatsapp:</b> {data.social?.whatsapp}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default RowDashboard;
