import PageLayout from '~/components/page-layout';
import { Separator } from '~/components/ui/separator';

export default function SettingPage() {
  return (
    <PageLayout>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Setting</h3>
          <p className="text-sm text-muted-foreground">
            This is how others will see you on the site.
          </p>
        </div>
        <Separator />
        {/* <ProfileForm /> */}
      </div>
    </PageLayout>
  );
}
