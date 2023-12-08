import { Models } from "appwrite"
import Loader from "./Loader"
import GridPostList from "./GridPostList"

type SearchResultsProps = {
  isSearchFetching: boolean,
  searchedPost: Models.Document[]
}

const SearchResults = ({isSearchFetching, searchedPost}: SearchResultsProps) => {
  if (isSearchFetching) return <Loader />

  if (searchedPost && searchedPost.documents.length > 0) {
    return (
      <GridPostList posts={searchedPost.documents} />
    )
  }

  return (
    <p className="text-light-4 mt-10 text-center w-full">No results found</p>
  )
}

export default SearchResults