import { HeartOutlined } from "@ant-design/icons";
import { Card } from "antd";

const SavedCard = ({ style }) => {
  return (
    <div style={style}>
      <Card
        cover={
          <img
            draggable={false}
            alt="example"
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
          />
        }
        actions={[<HeartOutlined key="setting" />]}
      >
        <p className="font-bold text-xl">Spicy Tai Green Curry</p>
        <p className="mt-2">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </p>
      </Card>
    </div>
  );
};

export default SavedCard;
