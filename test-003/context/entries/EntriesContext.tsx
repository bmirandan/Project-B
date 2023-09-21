import { createContext } from 'react';
import { IEntry } from '../../interfaces';

interface IContextProps {
  entries: IEntry[];
}

export const EntriesContext = createContext({} as IContextProps);
