import { useState } from "react";
import { Modal, Button } from "antd";

const ModalBasicPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>모달창열기</Button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        비밀번호 입력 <input type="password" />
      </Modal>
    </>
  );
};

export default ModalBasicPage;
