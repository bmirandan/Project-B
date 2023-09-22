import { IEntry } from '../../interfaces';
import { EntriesState } from './';


type EntriesActionType = 
   | { type: '[Entry] - Add', payload: IEntry }
   | { type: '[Entry] - Update', payload: IEntry }; 


export const entriesReducer = ( state: EntriesState, action: EntriesActionType ): EntriesState => {

   switch (action.type) {
      case '[Entry] - Add':
         return {
            ...state,
            entries: [...state.entries, action.payload]
          }
      case '[Entry] - Update':
         return {
            ...state,
            entries: state.entries.map( entry => entry._id === action.payload._id ? action.payload : entry )
          }

       default:
          return state;
   }

}