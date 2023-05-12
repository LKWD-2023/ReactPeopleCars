import { useParams } from 'react-router-dom';

function withRouteParams(WrappedComponent) {
  return function(props) {
    const params = useParams();

    return <WrappedComponent {...props} routeParams={params} />;
  }
}

export default withRouteParams;