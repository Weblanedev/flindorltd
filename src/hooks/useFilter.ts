import { products_data } from "@/data/products-data";
import useGlobalContext from "./use-context";

export const useFilter = (start: number, end: number) => {
  const {
    filterCategory,
    filterBrand,
    filterColor,
    filterSize,
    filterRating,
    selectData,
    filterRange,
  } = useGlobalContext();
  const filteredData = products_data?.filter((item) => {
    let passesCategory = true;
    let passesBrand = true;
    let passesColor = true;
    let passesSize = true;
    let passesRating = true;
    let passesStatus = true;
    let passesRange = true;

    if (filterCategory && item.category !== filterCategory) {
      passesCategory = false;
    }

    if (filterBrand.length && !filterBrand.includes(item.brand)) {
      passesBrand = false;
    }

    if (
      filterSize.length &&
      item.sizeArray &&
      !item.sizeArray.some((size) => filterSize.includes(size))
    ) {
      passesSize = false;
    }

    if (
      filterRating &&
      (item.rating < filterRating || item.rating > filterRating + 0.5)
    ) {
      passesRating = false;
    }

    if (selectData && item.status !== selectData) {
      passesStatus = false;
    }
    if (selectData === "Default") {
      passesStatus = true;
    }

    if (
      filterRange.length &&
      (item.price < filterRange[0] || item.price > filterRange[1])
    ) {
      passesRange = false;
    }

    return (
      passesCategory &&
      passesBrand &&
      passesColor &&
      passesSize &&
      passesRating &&
      passesStatus &&
      passesRange
    );
  });

  const filterByColor = products_data?.filter(
    (item) =>
      item.productColorArray &&
      item.productColorArray.some((color) => color.color === filterColor)
  );

  const result = filterByColor?.length ? filterByColor : filteredData.slice(start,end)
  return result;
};
