import React from 'react';
import { useNavigate, useLocation, useParams, NavigateFunction, Params } from 'react-router-dom';

export interface WithRouterProps {
  navigate?: NavigateFunction;
  location?: Location;
  params?: Params;
  state?: any;
}

export function withRouter<T extends WithRouterProps>(Component: React.ComponentType<T>) {
  return function WrappedComponent(props: T) {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    return <Component {...props} navigate={navigate} location={location} params={params} />;
  };
}
