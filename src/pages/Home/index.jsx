import { DrinkModalDetail } from "../../components/DrinkModalDetail";
import { DrinksList } from "../../components/DrinksList";
import { SearchForm } from "../../components/SearchForm";



export default function Home() {


  return (
    <div>
      <SearchForm />
      <DrinksList />
      <DrinkModalDetail />
    </div>
  )
}