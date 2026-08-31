export default function DisclaimerBand({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-navy px-[7%] py-[50px]">
      <div className="mx-auto max-w-[820px] text-center">
        <div className="mb-[14px] flex justify-center text-[12px] tracking-[3px] uppercase text-gold-light">
          Important
        </div>
        <p className="text-[14.5px] leading-[1.8] text-[#C7CAE0]">{children}</p>
      </div>
    </section>
  );
}
