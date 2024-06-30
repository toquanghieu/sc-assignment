import * as React from 'react';
type CategoryListProps = {
  categories: Record<string, string>;
  currentCategory: string;
  onChangeCategory: (category: string) => void;
}
export const CategoryList = ({categories, currentCategory, onChangeCategory}:CategoryListProps) => (<div className="sm:ml-6 sm:block mt-6 overflow-x-auto no-scrollbar">
  <div className="flex space-x-4 flex-nowrap">
    {Object.keys(categories).map((key) => (
      <a
        key={key}
        href={`#${key}`}
        className={`${
          key === currentCategory
            ? 'bg-gray-50 font-semibold text-base'
            : 'text-gray-500 hover:bg-gray-50'
        } rounded-md px-3 py-2 text-base font-medium hover:font-semibold flex-none`}
        onClick={() => onChangeCategory(key)}
      >
        {categories[key]}
      </a>
    ))}
  </div>
</div>)