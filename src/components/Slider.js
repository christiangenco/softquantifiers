import { useState } from "react";

export default function Slider({ value, setValue }) {
  // State to handle hover effect
  const [hoverValue, setHoverValue] = useState(value);

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
    <div className="flex dark:text-white">
      {Array.from({ length: 11 }, (_, index) => (
        <div
          key={index}
          className="mx-1 cursor-pointer text-4xl"
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {index === 0 ? "❌" : index <= hoverValue ? "🍎" : "🍏"}
        </div>
      ))}
      <div className="text-4xl">{hoverValue}/10</div>
    </div>
  );
}
