import clsx from "clsx";
import { ReactNode } from "react";

export interface ILabelProps {
  htmlFor?: string;
  children: ReactNode;
  className?: string;
}

const Label = ({ htmlFor, children, className }: ILabelProps) => {
  return <>
    <label htmlFor={htmlFor} className={clsx("font-bold tracking-wide", className)}>{children}</label>
  </>
}

export default Label