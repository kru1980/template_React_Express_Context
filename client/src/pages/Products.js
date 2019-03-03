import React from "react";
import { Row, Col } from "antd";
import TemplateContext from "../context/templateContext";
import MainNavigation from "../components/MainNavigation";
import TodoListRender from "../components/TodoListRender";
import FormCreatedTodo from "../components/FormCreatedTodo";
import "./Products.css";

// Контекст не пробрасываем не посредственно в TodoListRender тк данные для общего количесва задач, будут отображатья в шапке

const ProductsPage = props => {
  return (
    <TemplateContext.Consumer>
      {context => (
        <React.Fragment>
          <Row>
            <Col span={24}>
              <MainNavigation />
            </Col>
          </Row>

          <Row>
            <Col span={18}>
              <TodoListRender
                todos={context.todos}
                removeProductFromCart={context.removeProductFromCart}
              />
            </Col>
            <Col span={4} offset={1}>
              {" "}
              <FormCreatedTodo />
            </Col>
          </Row>
        </React.Fragment>
      )}
    </TemplateContext.Consumer>
  );
};

export default ProductsPage;
