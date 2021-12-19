import { createContext, useState, useContext, ReactElement, ReactNode, useEffect } from 'react';
import { Item, ItemContextState } from '../../interfaces';
import axios from 'axios';
import { isEmptyOrSpaces } from '../../utils/helpers';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  children: ReactNode;
}

// set default values for initializing
const contextDefaultValues: ItemContextState = {
  items: [
    {
      title: 'Black',
      description:
        'Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.',
      ingredients: ['Coffee'],
      category: 'hot',
      id: '1',
    },
  ],
  addItem: function (): void {
    throw new Error('Function not implemented.');
  },
  removeItem: function (): void {
    throw new Error('Function not implemented.');
  },
  removeAll: function (): void {
    throw new Error('Function not implemented.');
  },
  updateItem: function (): void {
    throw new Error('Function not implemented.');
  },
  updateSearchedItems: function (): void {
    throw new Error('Function not implemented.');
  },
  searchedItems: [],
  loading: true,
};

// created context with default values
const ItemContext = createContext<ItemContextState>(contextDefaultValues);

export const ItemProvider = ({ children }: Props): ReactElement => {
  // set default values
  const [items, setItems] = useState<Item[]>(contextDefaultValues.items);
  const [searchedItems, setSearchedItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(contextDefaultValues.loading);

  // fetch all items
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/coffee-list`);
        if (res) {
          setItems(res.data);
        } else {
          console.error('Something wrong happened while fetching coffee list data.');
        }
      } catch (err) {
        console.error('Error: ', err);
      }
      return setLoading(false);
    };
    fetchProducts();
  }, []);

  const updateSearchedItems = (searchField: { query: string }) => {
    let data: Item[] = [];
    if (!isEmptyOrSpaces(searchField.query)) {
      data = items.filter(
        (item) =>
          item.title.toLowerCase().includes(searchField.query.toLowerCase()) ||
          item.title.toLowerCase().replace(' ', '').includes(searchField.query.toLowerCase()),
      );
    } else {
      setSearchedItems([]);
    }

    setSearchedItems(data);
  };

  const addItem = (newItem: Item) =>
    // add item with new id generated
    setItems((Items) => [...Items, { ...newItem, id: uuidv4() }]);

  // remove item by using id value
  const removeItem = (id: string) => {
    const data = items;

    // find the item's index to remove it
    const index = data.findIndex((Item) => Item.id === id);

    // to check if the item exist in the list
    if (index < 0) {
      alert('No item found in the list');
      return;
    }

    // splice value found in the index
    data.splice(index, 1);

    // data list will be changed because we are editing on the reference. Therefore, it is enough
    // to spread data values
    setItems([...data]);
  };

  // Firstly, check if there any value exists in the list.
  // If does exist, set item list to an empty array otherwise, give alert to inform user.
  const removeAll = () =>
    items.length === 0 ? alert('There are no items found in the list!') : setItems([]);

  // Update item with id and item values.
  const updateItem = (id: string, item: Item) => {
    const data = items;
    const index = data.findIndex((item) => item.id === id);
    data[index] = item;
    setItems([...data]);
  };

  const values = {
    loading,
    setLoading,
    items,
    setItems,
    searchedItems,
    addItem,
    removeItem,
    removeAll,
    updateItem,
    updateSearchedItems,
  };

  // add values to provider to reach them out from another component
  return <ItemContext.Provider value={values}>{children}</ItemContext.Provider>;
};

// created custom hook
export const useItem = () => useContext(ItemContext);
