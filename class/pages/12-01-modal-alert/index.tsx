import { Modal, Button, Space } from "antd";

const ModalAlertPage = () => {
  const onClickSuccess = () => {
    Modal.success({
      content: "게시물 등록에 성공했습니다.",
    });
  };

  const onClickFail = () => {
    Modal.error({ content: "게시물 등록에 실패했습니다." });
  };
  return (
    <>
      <button onClick={onClickSuccess}>알림창 나타나기(성공)</button>
      <button onClick={onClickFail}>알림창 나타나기(실패)</button>
    </>
  );
};

export default ModalAlertPage;
