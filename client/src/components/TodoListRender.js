import React from "react";
import { List, Card } from "antd";
import { Link } from "react-router-dom";

const TodoListRender = ({ todos, removeProductFromCart }) => {
  return (
    <React.Fragment>
      {todos && (
        <List
          rowKey={todos}
          // loading={context.isLoading}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4
          }}
          dataSource={todos}
          renderItem={todo => (
            /* eslint-disable */
            // Отключил тк ссылку нельзя использовать бех href атрибута, надо заменить на кнопку
            <List.Item>
              <Card
                title={todo.title}
                extra={[
                  <Link key="1" to={`/cart${todo.id}`}>
                    more |
                  </Link>,
                  <a key="2" onClick={() => removeProductFromCart(todo.id)}>
                    {" "}
                    delete
                  </a>
                ]}
              >
                <h3>id:{todo.id}</h3>
                <p>completed:{todo.completed ? "true" : "false"}</p>
              </Card>
            </List.Item>
            /* eslint-enable */
          )}
        />
      )}
    </React.Fragment>
  );
};

export default TodoListRender;
