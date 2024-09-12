import type { ReactNode } from "react";

export default function ProfileDescription(props: { children?: ReactNode }) {
  return (
    <span className="text-[#BCBCBC] pt-6 font-inter-regular">
      {props.children}
    </span>
  );
}
