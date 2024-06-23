import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductById } from '../../services/queries/useGetProductById';
import { WithRouterProps, withRouter } from '../../context/Router';

interface ProductProps extends Partial<WithRouterProps> { }

function Product({params, location, navigate }:ProductProps ): JSX.Element {
  const { id } = useParams();
  const { data, isLoading } = useGetProductById({ productId: Number(id) });
  const navigateHook = useNavigate();
  console.log({
    params,
    location,
    navigate
  });
  return (
    <div>
      <h1>Product {id}</h1>
      {isLoading && <p>Loading...</p>}
      <h2>{data?.title}</h2>
      <p>{data?.description}</p>
      <p>{data?.price}</p>
      <p>{data?.category}</p>
      <button onClick={() => navigateHook('/')}>Go back</button>
      <button onClick={() => navigate && navigate('/')}>Go back Using Hook</button>
    </div>
  );
}

export default withRouter(Product);
