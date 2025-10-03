import { Button, Input, Skeleton } from "antd";
import { AppleOutlined } from "@ant-design/icons";
import Options from "../components/recipe-generator/Options";
import { dietaryOptions, preprationOptions } from "../utils/constant";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useRecipeGenerator from "../hook/useRecipeGenerator";
import Details from "../components/recipe-generator/Details";

const Home = () => {
  const [formData, setFormData] = useState({
    ingredients: "",
    dietary: [],
    preparation: [],
  });

  const { recipe, isLoading, error, handleGenerateRecipe } =
    useRecipeGenerator();

  const handleFormElement = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleGenerateRecipe(formData);
  }

  if (error) {
    toast.error("Xəta baş verdi!!!");
  }

  console.log(formData);

  return (
    <>
      <Toaster position="top-center" />
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
                value={formData.ingredients}
                onChange={(e) =>
                  handleFormElement("ingredients", e.target.value)
                }
                size="large"
                placeholder="e.g chicken, rice, broccoli"
                prefix={<AppleOutlined />}
              />
            </div>

            <div className="mt-8 flex">
              <Options
                title="Dietary Options"
                name="dietary"
                options={dietaryOptions}
                onChange={handleFormElement}
                value={formData.dietary}
              />
              <Options
                title="Prepration Time"
                name="preparation"
                options={preprationOptions}
                onChange={handleFormElement}
                value={formData.preparation}
              />
            </div>

            <div className="mt-8 flex items-center justify-center">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                disabled={isLoading}
              >
                Create Recipe
              </Button>
            </div>
          </form>
        </div>

        {isLoading && (
          <div className="flex items-center justify-center mt-12">
            <Skeleton.Node
              active={isLoading}
              style={{ width: 600, height: 600 }}
            />
          </div>
        )}

        {recipe && !isLoading && <Details recipe={recipe} />}
      </div>
    </>
  );
};

export default Home;
