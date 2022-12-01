import { Input } from "antd";
const InputCustom = ({ form, ...rest }) => {
//     let error = form?.getFieldError(rest.name)[0];
//   let value = form?.getFieldValue(rest.name);
  return (
    <div>
        <Input {...rest} />
    </div>
  );
};

export default InputCustom;