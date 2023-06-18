import PageLayout from '~/components/page-layout';

export default function DashboardPage() {
  return (
    <PageLayout>
      <div className="space-y-4">
        <div className="col-span-3 rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-lg font-semibold leading-none tracking-tight">
              Recent Task Ranking
            </h3>
            <p className="text-sm text-muted-foreground">You have registered {10} tasks.</p>
          </div>
          <div className="p-6 pt-0">
            <div className="space-y-8">
              <div className="flex items-center text-sm">
                <div className="">
                  <p className="font-medium leading-none">부부상담</p>
                </div>
                <div className="ml-4">
                  <p className="text-muted-foreground">밝은희망 부부상담클리닉</p>
                </div>
                <div className="ml-auto flex gap-4">
                  <p>
                    <span className="font-medium leading-none">네이버 View</span>
                    <span className="ml-1 text-muted-foreground">1등</span>
                  </p>
                  <div>
                    <span className="font-medium leading-none">네이버 플레이스</span>
                    <span className="ml-1 text-muted-foreground">1등</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
