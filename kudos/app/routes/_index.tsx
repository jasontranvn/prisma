import type { V2_MetaFunction } from '@remix-run/node';
import { LoaderFunction } from '@remix-run/node';
import { requireUserId } from '~/utils/auth.server';

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return null;
};

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }];
};

export default function Index() {
  return (
    <div className="h-screen bg-slate-700 flex justify-center items-center">
      <h2 className="text-blue-600 font-extrabold text-5xl">
        TailwindCSS Is Working!
      </h2>
    </div>
  );
}
