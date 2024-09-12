import type { ReactNode } from "react";

export default function ProfileName(props: { children?: ReactNode }) {
  return (
    <span className="text-white text-2xl font-inter-semi-bold">
      {props.children}
    </span>
  );
}
