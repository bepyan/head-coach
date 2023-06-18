import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
} from '@tanstack/react-table';

import { EditIcon, LineChartIcon, MoreHorizontalIcon, TrashIcon } from 'lucide-react';
import * as React from 'react';
import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { Input } from '~/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Task = {
  id: string;
  keyword: string;
  naverPlaceName?: string;
  naverViewUrl?: string;
};

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: 'keyword',
    header: '키워드',
  },
  {
    accessorKey: 'naverPlaceName',
    header: '장소명',
  },
  {
    accessorKey: 'naverViewUrl',
    header: '뷰 링크',
  },
  {
    id: 'actions',

    cell: ({ row }) => {
      const task = row.original;

      return (
        <div className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => void navigator.clipboard.writeText(task.id)}>
                <LineChartIcon className="mb-0.5 mr-1.5 h-4 w-4 text-muted-foreground/70" />
                통계 보기
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <EditIcon className="mb-0.5 mr-1.5 h-4 w-4 text-muted-foreground/70" /> 수정
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TrashIcon className="mb-0.5 mr-1.5 h-4 w-4 text-muted-foreground/70" /> 삭제
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

interface TaskTableProps<TData> {
  data: TData[];
}

export function TaskTable({ data }: TaskTableProps<Task>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="키워드 검색..."
          value={(table.getColumn('keyword')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('keyword')?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  검색 결과 없음
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
