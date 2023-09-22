import { createContext } from 'react';
import { IEntry } from '../../interfaces';

interface IContextProps {
  entries: IEntry[];
  addEntry: (entry: string) => void;
  updateEntry: (entry: IEntry) => void;
}

export const EntriesContext = createContext({} as IContextProps);
