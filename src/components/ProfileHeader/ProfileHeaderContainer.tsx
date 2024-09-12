import type { ReactNode } from "react";

export default function ProfileHeaderContainer(props: {
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 items-center">{props.children}</div>
  );
}
