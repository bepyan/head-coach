import PageSidebar from '~/components/page-sidebar';
import { Separator } from '~/components/ui/separator';

const sidebarNavItems = [
  {
    title: 'Home',
    href: '/me/home',
  },
  {
    title: 'Setting',
    href: '/me/setting',
  },
];

interface MeLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: MeLayoutProps) {
  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block">
      <div className="flex items-center gap-6">
        <div className="h-10 w-10 rounded-full bg-slate-950"></div>
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Head Coach</h2>
          <p className="text-muted-foreground">Manage your search ranking.</p>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <PageSidebar items={sidebarNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  );
}
