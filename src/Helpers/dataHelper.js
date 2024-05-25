export const transformDataToOptionNodes = (data) => {
  return data.map((category) => ({
    id: category.id,
    name: category.category,
    description: category.description, 
    children: category.brands.map((brand) => ({
      id: brand.id,
      name: brand.brand,
      description: brand.description ,
      children: brand.models.map((model) => ({
        id: model.id,
        name: model.model,
        description: model.description,
        children: model.variants.map((variant) => ({
          id: variant.id,
          name: variant.name,
          description: variant.description,
          children: null,
        })),
      })),
    })),
  }));
};
