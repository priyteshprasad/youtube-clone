import { Button, Form, Input } from "antd";
import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const onFinish = (values) => {
    if (values.searchTerm !== undefined && values.searchTerm.trim() !== "") {
      onFormSubmit(values.searchTerm);
    }
  };

  return (
    <div className="">
      <Form
        name="searchForm"
        onFinish={onFinish}
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        <Form.Item label="Search" name="searchTerm" style={{ width: "500px" }}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SearchBar;
