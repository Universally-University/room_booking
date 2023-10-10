interface Props {
  title: string;
  seatNum: number;
  roomId: number;
}

export default function RoomCard({ title, seatNum, roomId }: Props) {
  const roomIdStr = `reserve/?roomId=` + roomId.toString();
  return (
    <>
      <a href={roomIdStr}>
        <div className="rounded-lg h-28 text-center border-2 border-black py-2 flex flex-col items-center justify-center">
          <p className="text-2xl py-2">{title}</p>
          <p>Amount of seats: {seatNum}</p>
        </div>
      </a>
    </>
  );
}
