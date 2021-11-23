import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";

const LifeCyclePage = () => {
  const [isChange, setChange] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickChange = () => {
    setChange(true);
  };

  const onClickMove = () => {
    router.push("/");
  };

  useEffect(() => {
    console.log("Rendered!");
    inputRef.current?.focus();

    return () => {
      console.log("Bye!");
    };
  }, []);

  useEffect(() => {
    console.log("Changed!");
  }, [onClickChange]);

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={onClickChange}>변경{isChange}</button>
      <button onClick={onClickMove}>이동</button>
    </>
  );
};

export default LifeCyclePage;
