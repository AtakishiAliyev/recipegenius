import { Checkbox } from "antd";

const Options = ({ title, options, setData }) => {
  const handleChange = (checkedValues) => {
    setData(checkedValues);
  };

  return (
    <div className="flex flex-col flex-1 gap-4">
      <h3 className="font-bold">{title}</h3>
      <div className="flex flex-col gap-4">
        <Checkbox.Group options={options} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Options;
