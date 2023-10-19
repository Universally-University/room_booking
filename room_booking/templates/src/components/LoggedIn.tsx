interface Props {
  memberId: number;
}
export default function LoggedIn({ memberId }: Props) {
  console.log(isNaN(memberId));
  if (!isNaN(memberId)) {
    return (
      <a href="/accounts/logout/" className="cursor-pointer">
        Logout
      </a>
    );
  }
  return <a href="/accounts/login/?next=/library/">Login</a>;
}
