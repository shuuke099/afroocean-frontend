import React from "react";

interface Category {
  name: string;
  img: string;
}

interface CategoryScrollerProps {
  categories: Category[];
}

const CategoryScroller: React.FC<CategoryScrollerProps> = ({ categories }) => {
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="grid grid-rows-2 grid-flow-col auto-cols-max gap-x-4 gap-y-4 p-2">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="flex-none w-20 sm:w-24 text-center cursor-pointer"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full mx-auto"
            />
            <p className="mt-2 text-xs sm:text-sm">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryScroller;
