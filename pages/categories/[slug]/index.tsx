import { useRouter } from "next/router";

const OneCategory = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className='custom-container'>
      { slug }
    </div>
  )
}
export default OneCategory;
