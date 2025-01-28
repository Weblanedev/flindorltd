"use client";
import useGlobalContext from "@/hooks/use-context";
import { useSearch } from "@/hooks/useSearch";
import Image from "next/image";
import Link from "next/link";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

const SearchComponent = () => {
  // search
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const searchRef = useRef(null);
  const {
    setFilterBrand,
    setFilterSize,
    setFilterRating,
    setFilterSearch,
    setFilterColor,
    setFilterCategory,
  } = useGlobalContext();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const currentRef = searchRef.current as HTMLElement | null;
      if (
        currentRef &&
        currentRef.contains &&
        !currentRef.contains(event.target as Node)
      ) {
        setOpenSearchBox(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setFilterSearch(event.target.value);
    setFilterSize([]);
    setFilterBrand([]);
    setFilterRating(0);
    setFilterColor("");
    setFilterCategory("");
    setOpenSearchBox(true);
    if (event.target.value === "") {
      setOpenSearchBox(false);
    }
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFilterSearch(searchQuery);
    setFilterSize([]);
    setFilterBrand([]);
    setFilterRating(0);
    setFilterColor("");
    setFilterCategory("");
  };

  const searchData = useSearch();
  return (
    <>
      <form
        ref={searchRef}
        onSubmit={handleSearchSubmit}
        className="filter-search-input header-search d-none d-xl-inline-block"
      >
        <input
          type="text"
          placeholder="Search Products....."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button>
          <i className="fal fa-search"></i>
        </button>
        <div
          className={`search-result-inner ${openSearchBox ? "open_search_box search_wrapper" : ""
            }`}
        >
          <div className="search-result-l">
            {searchData?.length ? (
              <>
                {searchData?.map((item, index) => {
                  return (
                    <div key={index} className="search_product header_search_three">
                      <div className="ecomart-common-search-result">
                        <div className="preview_img">
                          <Image src={item?.productImg} alt="img" />
                        </div>
                        <div className="preview_content">
                          <div className="single_product">
                            <Link href={`/shop-details/${item.id}`}>
                              {item.title}
                            </Link>
                          </div>
                          <div className="product-price">
                            <span className="price-now">£{item?.price}.00</span>
                            {item?.oldPrice ? (
                              <>
                                <span className="price-old">
                                  £{item?.oldPrice}.00
                                </span>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchComponent;
