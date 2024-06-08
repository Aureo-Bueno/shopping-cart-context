import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductById } from '../../services/queries/useGetProductById';

export function Product(): JSX.Element {
  const { id } = useParams();
  const { data, isLoading } = useGetProductById({ productId: Number(id) });
  const navigate = useNavigate();

  return (
    <div>
      <h1>Product {id}</h1>
      {isLoading && <p>Loading...</p>}
      <h2>{data?.title}</h2>
      <p>{data?.description}</p>
      <p>{data?.price}</p>
      <p>{data?.category}</p>
      <button onClick={() => navigate('/')}>Go back</button>
    </div>
  );
}
