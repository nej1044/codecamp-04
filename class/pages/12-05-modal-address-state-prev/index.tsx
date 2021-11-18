import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

const ModalAddressStatePrev = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddreess] = useState("");
  const [myZonecode, setMyZonecode] = useState("");

  // const showModal = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // const handleOk = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // const handleCancel = () => {
  //   setIsOpen((prev) => !prev);
  // };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    setIsOpen((prev) => !prev);
    setMyAddreess(data.address);
    setMyZonecode(data.zonecode);
  };

  return (
    <>
      <Button onClick={onToggleModal}>우편번호 검색</Button>
      <div>내 주소: {myAddress}</div>
      <div>내 우편번호: {myZonecode}</div>
      {isOpen && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
};

export default ModalAddressStatePrev;
