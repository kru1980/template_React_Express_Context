import React from "react";

import { Form, Icon, Input, Button } from "antd";

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("todoTitle", {
            rules: [{ required: true, message: "Введите задачу!" }]
          })(
            <Input
              prefix={<Icon type="edit" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Задача"
            />
          )}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            add Task
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const FormCreatedTodo = Form.create({ name: "normal_login" })(NormalLoginForm);

export default FormCreatedTodo;
