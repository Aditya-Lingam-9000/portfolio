import "./GradientText.css";

export default function GradientText({
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#ff4080", "#facc15"], 
  animationSpeed = 8,
  showBorder = false,
}) {
  // 1. We create a "seamless" string by repeating the first color at the end
  const seamlessColors = [...colors, colors[0]].join(", ");

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${seamlessColors})`,
    animationDuration: `${animationSpeed}s`,
    // 2. We set size to 200%. This makes the "A-B-C-D-A" sequence 
    // stretch so that "A" to "A" is exactly the width of the container.
    backgroundSize: "200% 100%", 
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={gradientStyle}>{children}</div>
    </div>
  );
}