import { FC, MouseEventHandler, MouseEvent, useState, useEffect } from 'react';
import PublicApiService from '../../api/PublicApiService';
import ItemList from './item-list';

export interface TodoListProps {
  list?: string[];
}

const TodoList: FC<TodoListProps> = ({ list }) => {
  const [listItem, setListItem] = useState(' ');

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value }: { name: string; value: string } = event.target;
    setListItem(() => value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    list?.push(listItem);
    PublicApiService.createListItem({ list: list })
      .then((res: any) => console.log(res))
      .catch((e: any) => console.log('Bad'));
  };

  const handleDelete = (
    e: MouseEvent<HTMLButtonElement>,
    itemForDelete: string
  ): void => {
    e.preventDefault();
    const itemForDeleteResult = list?.filter((item) => item !== itemForDelete);
    PublicApiService.createListItem({ list: itemForDeleteResult })
      .then((res: any) => console.log('Deletion successful'))
      .catch((e: any) => console.log('Deletion failed'));
  };

  return (
    <div className="flex flex-col">
      <div className="flex m-auto w-full justify-center mt-10">
        <form onSubmit={handleSubmit}>
          <label className="block w-full">
            <span className=" after:ml-0.5 after:text-red-500 block font-medium text-slate-700 text-2xl">
              New good work
            </span>
            <input
              type="text"
              name="work"
              onChange={handleFormChange}
              value={listItem}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-80 rounded-md sm:text-sm focus:ring-1"
              placeholder="housework"
            />
          </label>
          <button
            className="border-sky-600 bg-sky-600 border-solid border-2 text-white w-32 rounded-md mt-5"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
      <div className="flex justify-center w-full flex-col items-center mb-10">
        <h1 className="text-2xl font-semibold mt-10 mb-3">
          List of good works
        </h1>
        <div className="flex items-center justify-between pl-2 w-8/12 h-10 my-2 flex-wrap">
          {list?.map((item) => (
            <ItemList item={item} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
