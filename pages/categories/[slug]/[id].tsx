import { useRouter } from "next/router";

const OneCategory = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className='custom-container'>
      { id }
    </div>
  )
}
export default OneCategory;
