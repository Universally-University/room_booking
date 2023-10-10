interface Props {
  index: number;
  roomName: string;
  date: string;
  startTime: string;
  endTime: string;
}

export default function ReservedRow({ index, roomName, date, startTime, endTime }: Props) {
  return (
    <>
      <p className="border text-center px-2 py-2">{index}</p>
      <p className="border text-center px-2 py-2">{roomName}</p>
      <p className="border text-center px-2 py-2">{date}</p>
      <p className="border text-center px-2 py-2">{startTime}</p>
      <p className="border text-center px-2 py-2">{endTime}</p>
    </>
  );
}
