import { Rate } from "antd";
import { useState } from "react";

const LibraryStarPage = () => {
  const [value, setValue] = useState(3);

  const handleChange = (value: number) => {
    setValue(value);
  };
  console.log(value);
  return (
    <span>
      <Rate onChange={handleChange} value={value} />
    </span>
  );
};

export default LibraryStarPage;
