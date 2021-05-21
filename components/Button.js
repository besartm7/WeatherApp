function Button({ children, style, action }) {
  return (
    <button
      className={style}
      onClick={action}
    >{ children }</button>
  );
}

export default Button;
