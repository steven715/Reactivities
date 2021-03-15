import { AxiosResponse } from "axios";
import React from "react";
import { Message } from "semantic-ui-react";

interface IPros {
  error: AxiosResponse;
  text?: string;
}

const ErrorMessgae: React.FC<IPros> = ({ error, text }) => {
  return (
    <Message error>
      <Message.Header>{error.statusText}</Message.Header>
      {error.data && Object.keys(error.data.errors).length > 0 && (
        <Message.List>
          {Object.values(error.data.errors).flat().map((err, i) => (
            <Message.Item key={i}>{err}</Message.Item>
          ))}
        </Message.List>
      )}
      {text && <Message.Content content={text} />}
    </Message>
  );
};

export default ErrorMessgae;
