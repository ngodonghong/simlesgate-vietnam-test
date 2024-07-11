import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "outlined";
  size?: "small" | "medium" | "large";
}

const Button = ({
  children,
  className,
  variant = "primary",
  size = "medium",
  ...restProps
}: IButtonProps) => {
  const _classNames = classNames({
    [styles.btn]: true,
    [styles.primary]: variant === "primary",
    [styles.outlined]: variant === "outlined",
    [styles.btnSmall]: size === "small",
    [styles.btnMedium]: size === "medium",
    [styles.btnLarge]: size === "large",
  });

  return (
    <button {...restProps} className={_classNames}>
      {children}
    </button>
  );
};

export default Button;
