import { useGetCabins } from "./useGetCabins";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";


function CabinTable() {
  const { isLoading, cabins, error } = useGetCabins();
  const [searchParams] = useSearchParams()
  if (isLoading) return <Spinner />;
  if (!cabins.length) return <Empty resourceName={"cabins"} />

  if (error) console.error(error);

  // Filter function based on URL parameter
  const filterValue = searchParams.get("discount") || "";
  let filterCabins = cabins;
  if (filterValue === 'all') filterCabins = cabins;
  if (filterValue === 'no-discount') filterCabins = cabins.filter(cabin => cabin.discount === 0)
  if (filterValue === 'with-discount') filterCabins = cabins.filter(cabin => cabin.discount > 0)

  // Sorting function based on URL parameter
  const sortBy = searchParams.get('sortBy') || "startDate-asc";
  const [field, direction] = sortBy.split("-")
  const modifier = direction === "asc" ? 1 : -1;
  const sortcabins = filterCabins.sort((a, b) => (a[field] - b[field]) * modifier)

  // Pagination 

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
        <Table.Footer>
          {/* <Pagination count={countPage} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default CabinTable;
