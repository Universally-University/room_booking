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
        <div className="rounded-lg h-28 text-center bg-white py-2 flex flex-col items-center justify-center">
          <p>{title}</p>
          <p>Amount of seats: {seatNum}</p>
        </div>
      </a>
    </>
  );
}
