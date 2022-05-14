import React, { useState } from "react";
import "antd/dist/antd.css";
import style from "./room.module.css";
import { Modal, Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const onSearch = (value) => consoe.log(value);
const Room = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <button className={style.newGroup} type="primary" onClick={showModal}>
        {" "}
        Өрөө үүсгэх <PlusOutlined />
      </button>
      <Modal
        title="Өрөө үүсгэх"
        visible={isModalVisible}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        style = {{
            // width:300,
            // height:500,
            // backgroundColor: 'blue',
        }}
      >
        <Input
          placeholder="Харилцагч нэмэх"
          onSearch={onSearch}
          style={{
            width: 100,
          }}
        />

        {/* <Button className = {style.room} placeholder="Хайх" ></Button> */}

        <p>Хэрэглэгч 1</p>
        <p>Хэрэглэгч 2</p>
      </Modal>
    </>
  );
};

export default Room;
