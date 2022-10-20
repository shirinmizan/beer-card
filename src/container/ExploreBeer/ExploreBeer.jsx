import { useState } from "react";
import BeerCard from "../../component/BeerCard/BeerCard";
import SearchBox from "../../component/SearchBox/SearchBox";

const ExploreBeer = (props) => {
  const { albumsArr } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredAlbums = albumsArr.filter((album) => {
    const albumTitleLower = album.strAlbum.toLowerCase();

    return albumTitleLower.includes(searchTerm) && album.strAlbumThumb;
  });

  return (
    <>
      <SearchBox
        label={"albums"}
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <BeerCard title={"Results"} albumsArr={filteredAlbums} />
    </>
  );
};

export default ExploreBeer