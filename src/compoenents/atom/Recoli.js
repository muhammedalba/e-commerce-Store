import { useRecoilState } from 'recoil';
import productsAtom from'./productsAtom';
function Recoil() {
const [product,setproduct] = useRecoilState(productsAtom)
    return(
<>
{/* {console.log(product)} */}

</>
    )
}
export default Recoil;