import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Skeleton } from "../components/ui/skeleton";

export default function SkeletonVerify() {
  const skeletonCard = (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-6 w-2/3" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-2">
          <dt className="font-semibold">
            <Skeleton className="h-4 w-1/2" />
          </dt>
          <dd>
            <Skeleton className="h-4 w-1/3" />
          </dd>
          <dt className="font-semibold">
            <Skeleton className="h-4 w-1/2" />
          </dt>
          <dd>
            <Skeleton className="h-4 w-1/3" />
          </dd>
          <dt className="font-semibold">
            <Skeleton className="h-4 w-1/2" />
          </dt>
          <dd>
            <Skeleton className="h-4 w-1/3" />
          </dd>
        </dl>
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-7xl mx-auto p-4 mt-52">
      <h1 className="text-xl font-bold mb-6">Order Verification</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {skeletonCard}
        {skeletonCard}
        {skeletonCard}
        {skeletonCard}
      </div>
    </div>
  );
}
