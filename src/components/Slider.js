import { useState, useEffect } from "react";

export default function Slider({ value, setValue }) {
  // State to handle hover effect
  const [hoverValue, setHoverValue] = useState(value);

  useEffect(() => {
    setHoverValue(value);
  }, [value]);

  // Function to handle click event on apple emojis
  const handleClick = (index) => {
    setValue(index);
  };

  // Function to handle mouse enter event on apple emojis
  const handleMouseEnter = (index) => {
    setHoverValue(index);
  };

  // Function to handle mouse leave event on apple emojis
  const handleMouseLeave = () => {
    setHoverValue(value);
  };

  return (
    <div className="flex dark:text-white text-xl md:text-4xl">
      {Array.from({ length: 11 }, (_, index) => (
        <div
          key={index}
          className="mx-0.5 md:mx-1 cursor-pointer"
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {index === 0 ? "0️⃣" : index <= hoverValue ? "🍎" : "🍏"}
        </div>
      ))}
      {hoverValue !== null && hoverValue !== undefined && (
        <div className="">{hoverValue}/10</div>
      )}
    </div>
  );
}
