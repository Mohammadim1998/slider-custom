import ImageSlide from "@/Components/ImageSlide"
import "../custom-styles/custom.css";
import Content from "@/Components/Content";
import ListOfSpeakers from "@/Components/ListsOfSpeakers";

export default function Home() {
  return (
    <main>
      <ImageSlide />
      <Content />
      <ListOfSpeakers />
    </main>
  )
}
