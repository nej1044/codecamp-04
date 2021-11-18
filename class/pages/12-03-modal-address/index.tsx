import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

const ModalBasicPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myAddress, setMyAddreess] = useState("");
  const [myZonecode, setMyZonecode] = useState("");
  const [myAddressDeatil, SetMyAddressDetail] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleComplete = (data: any) => {
    setIsModalVisible(false);
    setMyAddreess(data.address);
    setMyZonecode(data.zonecode);
  };

  return (
    <>
      <Button onClick={showModal}>우편번호 검색</Button>
      {isModalVisible && (
        <Modal visible={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
      <div>내 주소: {myAddress}</div>
      <div>내 우편번호: {myZonecode}</div>
    </>
  );
};

export default ModalBasicPage;
