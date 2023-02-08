import { FC, MouseEvent } from 'react';

export interface ItemListProps {
  item: string;
  handleDelete: (
    e: MouseEvent<HTMLButtonElement>,
    itemForDelete: string
  ) => void;
}

const ItemList: FC<ItemListProps> = ({ item, handleDelete }) => {
  return (
    <div className="flex items-centers justify-between pl-2 border-inherit rounded-sm border-2 w-2/12 h-20 my-2 mx-2">
      <div className="flex w-2/3">{item}</div>
      <button
        className="roundw-2/3ed-sm border-2 bg-red-600 decoration-white h-7"
        onClick={(e: MouseEvent<HTMLButtonElement>) => handleDelete(e, item)}
      >
        delete
      </button>
    </div>
  );
};

export default ItemList;
