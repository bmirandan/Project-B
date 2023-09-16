import { Card, Skeleton } from '@nextui-org/react';

export default function PokeCardSkeleton() {
  return (
    <Card className="w-[auto] h-[300px] space-y-5 p-4" radius="md">
      <Skeleton className="w-5 rounded-lg">
        <div className="h-5 w-5/3 rounded-lg bg-default-200"></div>
      </Skeleton>
      <Skeleton className="rounded-lg">
        <div className="h-60 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-300 rounded-lg">
          <div className="h-5 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
      </div>
    </Card>
  );
}
