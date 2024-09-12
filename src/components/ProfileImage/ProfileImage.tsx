export default function ProfileImage(props: { src?: string }) {
  return <img className="rounded-full" src={props.src} />;
}
