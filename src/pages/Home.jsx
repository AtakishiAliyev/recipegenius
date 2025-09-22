import { Button, Input } from "antd";
import { AppleOutlined } from "@ant-design/icons";
import Options from "../components/recipe-generator/Options";
import { dietaryOptions, preprationOptions } from "../utils/constant";
import { useState } from "react";

const Home = () => {
  const [ingredients, setIngredients] = useState("");
  const [dietary, setDietary] = useState([]);
  const [prepration, setPrepration] = useState([]);

  function handleIngredients(e) {
    setIngredients(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(ingredients.split(","), dietary, prepration);
  }

  return (
    <div className="py-12 px-6">
      <div className="p-8 shadow-md max-w-[600px] mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold">AI-Powered Recipe Generator</h1>
          <p className="mt-4 text-gray-500 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            temporibus!
          </p>
        </div>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <p className="font-bold">Ingredients</p>
            <Input
              onChange={handleIngredients}
              size="large"
              placeholder="e.g chicken, rice, broccoli"
              prefix={<AppleOutlined />}
            />
          </div>

          <div className="mt-8 flex">
            <Options
              title="Dietary Options"
              options={dietaryOptions}
              setData={setDietary}
            />
            <Options
              title="Prepration Time"
              options={preprationOptions}
              setData={setPrepration}
            />
          </div>

          <div className="mt-8 flex items-center justify-center">
            <Button type="primary" htmlType="submit" size="large">
              Create Recipe
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
