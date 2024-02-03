import SearchBar from "../../SearchBar/SearchBar";

const Rooms = () => {
  return (
    <>
      <SearchBar
        onSearch={(searchText) => console.log("searchText ", searchText)}
      />
    </>
  );
};

export default Rooms;
