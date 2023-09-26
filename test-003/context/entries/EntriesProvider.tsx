import { useEffect, useReducer } from 'react';
import { EntriesContext, entriesReducer } from '.';
import { IEntry } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';
import entriesApi from '../../services/entriesApi';

export interface EntriesState {
  entries: IEntry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

type EntriesProviderT = {
  children: JSX.Element;
};
export function EntriesProvider({ children }: EntriesProviderT) {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addEntry = async (description: string) => {
    const newEntry: IEntry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending',
    };
    const { data } = await entriesApi.post<IEntry>('/entries', newEntry);
    dispatch({ type: '[Entry] - Add', payload: data });
  };

  const updateEntry = async (entry: IEntry) => {
    const { data } = await entriesApi.put<IEntry>('/entries', entry);

    dispatch({ type: '[Entry] - Update', payload: data });
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<IEntry[]>('/entries');
    dispatch({ type: '[Entry] - Refresh', payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider value={{ ...state, addEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
}
