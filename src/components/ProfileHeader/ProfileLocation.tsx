import type { ReactNode } from "react";

export default function ProfileLocation(props: { children?: ReactNode }) {
  return (
    <span className="text-[#B4D83B] font-inter-bold text-sm">
      {props.children}
    </span>
  );
}
