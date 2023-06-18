import { usePathname } from 'next/navigation';
import PageSidebar from '~/components/page-sidebar';
import { Separator } from '~/components/ui/separator';

const sidebarNavItems = [
  {
    title: '대시보드',
    href: '/me/dashboard',
  },
  {
    title: '검색어',
    description: '검색어를 등록하고 일별로 검색순위를 확인해 보세요.',
    href: '/me/tasks',
  },
  {
    title: '설정',
    href: '/me/settings',
  },
];

interface MeLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: MeLayoutProps) {
  const pathname = usePathname();
  const item = sidebarNavItems.find((item) => item.href === pathname);

  return (
    <div className="pb-16">
      <div className="container mx-auto flex items-center gap-6 pt-10">
        <div className="h-10 w-10 rounded-full bg-slate-950"></div>
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">수석코치</h2>
          <p className="text-sm text-muted-foreground">나의 검색순위를 쉽게 모니터링 하자.</p>
        </div>
      </div>
      <Separator className="mt-8" />
      <div className="container mx-auto mt-10 flex flex-row space-x-12">
        <aside className="-mx-4 w-1/5">
          <PageSidebar items={sidebarNavItems} />
        </aside>
        <div className="mx-auto max-w-5xl flex-1 space-y-6">
          <div>
            <h3 className="text-xl font-semibold">{item?.title}</h3>
            {item?.description && (
              <p className="text-sm text-muted-foreground">{item.description}</p>
            )}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
