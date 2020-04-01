import * as React from "react";

export type Props = {
  label: string;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
};

export const Button: React.FunctionComponent<Props> = ({
  label,
  href,
  target,
  className,
  rel
}) => {
  if (href) {
    return (
      <a className={className} href={href} target={target} rel={rel}>
        {label}
      </a>
    );
  }
  return <button className={className}>{label}</button>;
};
