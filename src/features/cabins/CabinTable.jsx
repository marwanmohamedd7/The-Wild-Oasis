import { useGetCabins } from "./useGetCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

// const TableHeader = styled.header`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   padding: 1.6rem 2.4rem;
// `;

function CabinTable() {
  const { isLoading, cabins, error } = useGetCabins();
  const [searchParams] = useSearchParams()
  if (isLoading) return <Spinner />;
  if (error) console.error(error);

  // Filter function based on URL parameter
  const filterValue = searchParams.get("discount") || "";
  let filterCabins = cabins;
  if (filterValue === 'all') filterCabins = cabins;
  if (filterValue === 'no-discount') filterCabins = cabins.filter(cabin => cabin.discount === 0)
  if (filterValue === 'with-discount') filterCabins = cabins.filter(cabin => cabin.discount > 0)

  const sortBy = searchParams.get('sortBy') || "startDate-asc";
  // Sorting function based on URL parameter
  const [field, direction] = sortBy.split("-")
  console.log(field, direction)
  const modifier = direction === "asc" ? 1 : -1;
  const sortcabins = filterCabins.sort((a, b) => (a[field] - b[field]) * modifier)
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>cabin</div>
          <div>capacity</div>
          <div>price</div>
          <div>discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortcabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
