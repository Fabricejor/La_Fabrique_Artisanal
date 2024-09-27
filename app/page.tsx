import Banner from "@/components/main/Banner";
import FollowUs from "@/components/main/FollowUs";
import ShopSAle from "@/components/main/ShopSAle";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Banner/>
      <ShopSAle/>
      <FollowUs/>
      <Footer/>
    </main>
  );
}
