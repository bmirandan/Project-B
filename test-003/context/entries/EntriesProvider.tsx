import { useReducer } from 'react';
import { EntriesContext, entriesReducer } from '.';
import { IEntry } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
  entries: IEntry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Pending: Aliqua enim consequat laborum fugiat deserunt aliqua.',
      status: 'pending',
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: 'InProgress: Magna dolore aute voluptate ex quis elit cupidatat ex.',
      status: 'inProgress',
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        'Finished: Excepteur nisi occaecat ut eiusmod sunt ea fugiat irure qui proident est.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};

type EntriesProviderT = {
  children: JSX.Element;
};
export function EntriesProvider({ children }: EntriesProviderT) {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addEntry = (description: string) => {
    const newEntry: IEntry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending',
    };

    dispatch({ type: '[Entry] - Add', payload: newEntry });
  };

  const updateEntry = (entry: IEntry) => {
    dispatch({ type: '[Entry] - Update', payload: entry });
  };

  return (
    <EntriesContext.Provider value={{ ...state, addEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
}
