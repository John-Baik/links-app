import type { ReactNode } from "react";

export default function CardContainer(props: { children?: ReactNode }) {
  return (
    <div className="w-[400px] h-full rounded-xl flex flex-col justify-center items-center bg-[#1F1F1F]">
      {props.children}
    </div>
  );
}
