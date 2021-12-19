export interface Item {
  title: string;
  description: string;
  ingredients: string[];
  category: string;
  id: string;
}

export type Items = Item[];

export interface ItemContextState {
  items: Items;
  addItem: (newItem: Item) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  updateItem: (id: string, data: Item) => void;
  updateSearchedItems: (searchField: { query: string }) => void;
  searchedItems: Items;
  loading: boolean;
}
