interface SeedData {
  entries: ISeedEntry[];
}

interface ISeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pending: Aliqua enim consequat laborum fugiat deserunt aliqua.',
      status: 'pending',
      createdAt: Date.now() - 1000000,
    },
    {
      description: 'InProgress: Magna dolore aute voluptate ex quis elit cupidatat ex.',
      status: 'inProgress',
      createdAt: Date.now(),
    },
    {
      description:
        'Finished: Excepteur nisi occaecat ut eiusmod sunt ea fugiat irure qui proident est.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};
