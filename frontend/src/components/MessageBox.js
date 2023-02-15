import Alert from 'react-bootstrap/Alert';

const MessageBox = (props) => {
  console.log(props);
  console.log(props.variant);
  return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
};
export default MessageBox;
