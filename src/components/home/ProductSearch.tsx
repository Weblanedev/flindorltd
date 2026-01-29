"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import useGlobalContext from "@/hooks/use-context";

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();
  const { setFilterSearch } = useGlobalContext();

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setFilterSearch(searchQuery.trim());
      router.push("/products");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className="product-search-area pt-60 pb-30">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form onSubmit={handleSearchSubmit} className="product-search-form">
              <div
                className="input-group"
                style={{ display: "flex", gap: "10px" }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={handleInputChange}
                  style={{
                    flex: 1,
                    padding: "12px 20px",
                    border: "1px solid #e5e5e5",
                    borderRadius: "4px",
                    fontSize: "16px",
                  }}
                />
                <button
                  className="fill-btn"
                  type="submit"
                  style={{
                    padding: "12px 30px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <i className="fal fa-search me-2"></i>
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSearch;
