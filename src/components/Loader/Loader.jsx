import { Watch } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Watch
      height="250"
      width="250"
      radius="48"
      color="#FF6B08"
      ariaLabel="watch-loading"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};
