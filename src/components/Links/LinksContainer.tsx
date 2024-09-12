import type { ReactNode } from "react";

export default function LinksContainer(props: { children?: ReactNode }) {
  return (
    <div className="w-full flex flex-col gap-5 pt-7 p-10">{props.children}</div>
  );
}
