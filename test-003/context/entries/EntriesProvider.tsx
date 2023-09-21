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

  return <EntriesContext.Provider value={{ ...state }}>{children}</EntriesContext.Provider>;
}
