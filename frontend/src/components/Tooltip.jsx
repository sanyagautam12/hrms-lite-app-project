import "./tooltip.css";

const Tooltip = ({ text, children }) => {
  return (
    <span className="tooltip-wrapper">
      {children}
      <span className="tooltip">{text}</span>
    </span>
  );
};

export default Tooltip;
