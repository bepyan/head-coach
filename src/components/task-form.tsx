import { Button } from '~/components/ui/button';
import { Card, CardContent, CardFooter } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';

export function TaskForm() {
  return (
    <Card className="bg-muted/50">
      <CardContent className="grid gap-2 pt-6">
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2">
            <Label htmlFor="keyword">키워드</Label>
            <Input id="keyword" placeholder="" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1">
            <Label htmlFor="naverPlace">장소명</Label>
            <Input id="naverPlace" placeholder="" />
          </div>
          <div className="col-span-2">
            <Label htmlFor="naverView">뷰 링크</Label>
            <Input id="naverView" placeholder="" />
          </div>
        </div>
        <div className="grid gap-2"></div>
      </CardContent>
      <CardFooter>
        <Button size="sm" className="ml-auto">
          추가하기
        </Button>
      </CardFooter>
    </Card>
  );
}
