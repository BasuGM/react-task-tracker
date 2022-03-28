const Button = ({ color, title, onClick }) => {
  return <button onClick={onClick} style={{ backgroundColor: color }} className="btn">{title}</button>;
};

export default Button;
