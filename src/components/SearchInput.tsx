import { SearchIcon } from '~/components/Icons';
import * as React from 'react';
type SearchInputProps = {
  changeInput: (search: string) => void;
}
export const SearchInput = ({changeInput}: SearchInputProps) => (<div className="group relative">
  {SearchIcon}
  <input
    className="focus:outline-none focus:shadow-lg appearance-none bg-gray-50 w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10"
    type="text"
    aria-label="Filter Restaurant"
    placeholder="맛집 이름을 검색해보세요"
    onChange={(e) => {
      changeInput(e.target.value);
    }}
  />
</div>)