import {
  Progress,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/react';
import { Stat } from '../../types/pokemon';
import { capitalize } from '@/libs/formater';

type PokemonTableT = {
  stats: Stat[];
};
export default function PokemonTable({ stats }: PokemonTableT) {
  return (
    <>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn className="max-w-30">STAT NAME</TableColumn>
          <TableColumn>BASE</TableColumn>
        </TableHeader>
        <TableBody>
          {stats?.map((statData, index) => (
            <TableRow key={`stat-${index}`}>
              <TableCell className="max-w-30">{capitalize(statData.stat.name)}</TableCell>
              <TableCell>
                {
                  <Progress
                    aria-label="Loading..."
                    label={statData.base_stat}
                    value={statData.base_stat}
                    className="max-w-md"
                  />
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
