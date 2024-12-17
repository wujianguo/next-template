'use client'

import { MemberDto } from "@/module/members/dto/member.dto";
import { useMemberList } from "@/module/members/hooks/use-member-list";
import { DateCell, TextCell } from "@/components/table/cells";
import { DataTableColumnHeader } from "@/components/table/column-header";
import { DataTable } from "@/components/table/data-table";
import { ColumnDef } from "@tanstack/react-table";

const columns: ColumnDef<MemberDto>[] =  [
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"ID"} />,
    cell: ({ row }) => <TextCell size={60}>{row.original.id}</TextCell>,
  },
  {
    accessorKey: "displayName",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"Display Name"} />,
    cell: ({ row }) => <TextCell size={200}>{row.original.name}</TextCell>,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"Created At"} />,
    cell: ({ row }) => <DateCell date={new Date(row.original.createdAt)}></DateCell>,
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => <Actions row={row} />,
  // },
];

export default function TablePage() {
  const { data } = useMemberList()
  // const [apps, setApps] = useState(data)
  // useEffect(() => {
  //   setApps(data)
  // }, [data]);

  return (
    <DataTable data={data || []} columns={columns} />
  )
}
