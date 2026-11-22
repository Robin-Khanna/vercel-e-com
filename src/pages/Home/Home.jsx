import CustomerReview from "../../components/Developer/CustomerReview/CustomerReview"
import PublicFooter from "../../components/navigation/Public/PublicFooter/PublicFooter"
import PublicWraper from "../../components/navigation/Public/PublicWrapear/PublicWraper"



function Home() {
  return (
    <>
    <PublicWraper/>
    <CustomerReview/>
    <PublicFooter/>
    </>
  )
}

export default Home