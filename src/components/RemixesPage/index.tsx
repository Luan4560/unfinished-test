import { useGetRemixesQuery } from '@/graphql/types/_server';
import { RemixesTable } from '@/shared/Table';
import './styles.css';

export const RemixesPage = () => {
  const { data, loading, error } = useGetRemixesQuery();

  return (
    <div className="container">
      {loading && <div>Spinner...</div>}

      <RemixesTable remixInfo={data} />

      {error && <h3>Error on request...{error.message}</h3>}
    </div>
  );
};
