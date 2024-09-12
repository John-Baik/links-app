import type { ReactNode } from "react";

export default function ProfileImageContainer(props: { children?: ReactNode }) {
  return <div className="w-20 py-6">{props.children}</div>;
}
