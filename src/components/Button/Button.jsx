import css from "components/Button/Button.module.css";

export const Button = ({
  type,
  children,
  onClick,
  isDisabled = false,
  width = "136px",
}) => {
  return (
    <button
      type={type}
      className={css.button}
      onClick={onClick}
      disabled={isDisabled}
      style={{ width: width }}
    >
      {children}
    </button>
  );
};
