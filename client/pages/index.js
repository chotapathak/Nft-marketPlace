import { useConnect } from 'wagmi';
import DashBoard from './Dashboard';
import Layout from '../components/Layout';



const Home = () => {
  const [{ data: connectData, error: connectError }, connect] = useConnect();
  const connected = connectData.connected;

  return (
    <div className='py-12 text-center'>
      {connected ? (
        <>
          <DashBoard />
        </>
      ) : (
        <>
          <h1 className='text-2xl font-bold'>
            Welcome to Distro Market
          </h1>
          <p className='mt-10'>Connect your wallet:</p>
          <div className='mt-5 flex justify-center gap-6'>
            {connectData.connectors.map((x) => (
              <button
                className='rounded bg-slate-200 p-2'
                key={x.id}
                onClick={() => connect(x)}
              >
                {x.name}
                {!x.ready && ' (unsupported)'}
              </button>
            ))}
          </div>
          {connectError && (
            <p className='text-red-500'>
              {connectError?.message ?? 'Failed to connect'}
            </p>
          )}
        </>
      )}
      <InfoSection />
    </div>
  );
};

const InfoSection = () => (
  <div className='mt-10'>
    <hr className='my-4' />
    <h2 className='text-xl font-bold'>If you need help</h2>
    <div className='flex flex-col gap-2 mt-2'>
      <a
        href='https://wagmi.sh'
        target='_blank'
        className='underline text-gray-600'
      >
        Link to wagmi docs
      </a>
      <a
        href='https://github.com/dhaiwat10/create-web3-frontend'
        target='_blank'
        className='underline text-gray-600'
      >
        Open an issue on Github
      </a>
    </div>
  </div>
);

export default Home;
