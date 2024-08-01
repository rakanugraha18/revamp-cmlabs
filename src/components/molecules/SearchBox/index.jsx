import React from "react";
import InputForm from "../../atoms/Input";
import Button from "../../atoms/Button";
import { FaSearch } from "react-icons/fa"; // Import ikon pencarian

const SearchBox = () => {
  return (
    <div className="flex justify-evenly gap-1">
      <InputForm
        type="search"
        placeholder="Search..."
        onChange={(e) => setEmail(e.target.value)}
        icon={<FaSearch />} // Masukkan ikon ke dalam komponen Input
        responsiveSize={"md-lg"}
      />
      {/* <Button
        variant="primary"
        size="small"
        onClick={() => alert("Primary Button Clicked!")}
      >
        Go
      </Button> */}
    </div>
  );
};

export default SearchBox;
