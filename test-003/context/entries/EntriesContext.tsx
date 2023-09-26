import { createContext } from 'react';
import { IEntry } from '../../interfaces';

interface IContextProps {
  entries: IEntry[];
  getEntry: (id: string) => Promise<IEntry>;
  addEntry: (entry: string) => void;
  updateEntry: (entry: IEntry) => void;
}

export const EntriesContext = createContext({} as IContextProps);
