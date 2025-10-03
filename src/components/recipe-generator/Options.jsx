import { Checkbox } from "antd";

const Options = ({ title, name, options, onChange, value = [] }) => {
  return (
    <div className="flex flex-col flex-1 gap-4">
      <h3 className="font-bold">{title}</h3>
      <div className="flex flex-col gap-4">
        <Checkbox.Group
          options={options}
          value={value}
          onChange={(checkedValues) => onChange(name, checkedValues)}
        />
      </div>
    </div>
  );
};

export default Options;
