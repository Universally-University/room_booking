interface Props {
  memberId: number;
}
export default function LoggedIn({ memberId }: Props) {
  if (!Number.isNaN(memberId)) {
    return (
      <a href="/accounts/logout/" className="cursor-pointer">
        Logout 
      </a>
    );
  }
  return <a href="/accounts/login/?next=/library/">Login</a>;
}
