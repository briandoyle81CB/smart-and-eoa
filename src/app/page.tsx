'use client';
import WalletComponents from '@/components/WalletComponents';

export default function Page() {
  return (
    <div className="flex flex-col w-96 md:w-[600px]">
      <section className="flex flex-col w-full mb-6 pb-6 border-b border-sky-800">
        <aside className="flex mb-6">
          <h2 className="text-xl">Wallet</h2>
        </aside>
        <WalletComponents />
      </section>
    </div>
  );
}
