const Details = ({ recipe }) => {
  const { title, description, ingredients, steps } = recipe;

  return (
    <div className="p-8 shadow-md max-w-[600px] mx-auto mt-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-bold">Ingredients</h3>
        <ul className="mt-2 flex flex-col gap-2 list-disc">
          {ingredients?.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-bold">Instructions</h3>
        <ul className="mt-2 flex flex-col gap-2 list-disc">
          {steps?.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
