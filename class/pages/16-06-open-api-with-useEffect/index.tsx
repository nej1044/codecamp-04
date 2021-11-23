import axios from "axios";
import { useState, useEffect } from "react";

const OpenApiWithUseEffectPage = () => {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const fetchDog = async () => {
      const result: any = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setDogUrl(result.data.message);
    };
    fetchDog();
  });

  return (
    <>
      <div>오픈API 연습</div>
      <img src={dogUrl} />
    </>
  );
};

export default OpenApiWithUseEffectPage;
