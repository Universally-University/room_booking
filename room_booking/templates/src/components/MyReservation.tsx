interface Props {
  memberId: number;
}
export default function MyReservation({ memberId }: Props) {
  if (!isNaN(memberId)) {
    return (
      <div
        className={`px-4 ease-in-out duration-150 text-center cursor-pointer py-1 border-white border-y md:border-0 border-x-0 w-full md:w-fit`}
      >
        <a className="font-jakarta my-5" href="/library/my-reservation">
          My Reservation
        </a>
      </div>
    );
  }
  return <div></div>;
}
