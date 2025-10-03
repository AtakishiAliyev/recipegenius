import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import SavedCard from "../components/saved-recipe/SavedCard";
import { useState } from "react";

const SavedRecipe = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="py-4 px-6">
      <div className="mt-10">
        <h1 className="text-4xl font-bold">My Saved Recipe</h1>
        <p className="mt-4">
          Your Personal Collection of culinary inspirations.
        </p>
      </div>

      <form className="max-w-96 mt-10">
        <Input
          size="large"
          placeholder="Search your saved recipes..."
          prefix={<SearchOutlined />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <div className="flex gap-5 flex-wrap py-10">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
          <SavedCard key={el} style={{ width: "calc((100% - 60px) / 4)" }} />
        ))}
      </div>
    </div>
  );
};

export default SavedRecipe;
