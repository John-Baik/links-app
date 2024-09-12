import type { ReactNode } from "react";

export default function LinkButton(props: { children: ReactNode }) {
  return (
    <button className="w-full font-inter-bold text-[#FFFFFF] py-4 rounded-lg bg-[#333333]">
      {props.children}
    </button>
  );
}
