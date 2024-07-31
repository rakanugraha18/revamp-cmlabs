import React from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
const SearchBox = () => {
  return (
    <div className="flex justify-evenly gap-1">
      <Input
        type="search"
        placeholder="Search..."
        onChange={(e) => setEmail(e.target.value)}
        size={"small"}
      />
      <Button
        variant="primary"
        size="small"
        onClick={() => alert("Primary Button Clicked!")}
      >
        Go
      </Button>
    </div>
  );
};

export default SearchBox;
