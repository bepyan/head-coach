import PageLayout from '~/components/page-layout';
import { TaskTable, type Task } from '~/components/tables/task-table';
import { TaskForm } from '~/components/task-form';

function getData(): Task[] {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      keyword: '부부상담',
      naverPlaceName: '밝은희망 부부상담클리닉',
      naverViewUrl: 'https://blog.naver.com/brighthope2016',
    },
    // ...
  ];
}

export default function TasksPage() {
  const data = getData();

  return (
    <PageLayout>
      <div>
        <TaskForm />
      </div>
      <div>
        <TaskTable data={data} />
      </div>
    </PageLayout>
  );
}
