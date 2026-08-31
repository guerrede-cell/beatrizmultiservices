function Wrap({ children }: { children: React.ReactNode }) {
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
}

export function NotaryIcon() {
  return (
    <Wrap>
      <circle cx="110" cy="110" r="95" fill="none" stroke="#C79A46" strokeWidth={2} />
      <path d="M70 130 L120 80 L140 100 L90 150 Z" fill="none" stroke="#0B1235" strokeWidth={4} strokeLinejoin="round" />
      <path d="M120 80 L135 65" stroke="#0B1235" strokeWidth={4} strokeLinecap="round" />
      <circle cx="140" cy="60" r="10" fill="none" stroke="#C79A46" strokeWidth={3} />
      <path d="M75 145 L65 155 L80 160 Z" fill="#0B1235" />
      <path d="M60 165 h50" stroke="#C79A46" strokeWidth={3} strokeLinecap="round" />
    </Wrap>
  );
}

export function ImmigrationIcon() {
  return (
    <Wrap>
      <circle cx="110" cy="110" r="95" fill="none" stroke="#C79A46" strokeWidth={2} />
      <rect x="70" y="55" width="80" height="110" rx="6" fill="none" stroke="#0B1235" strokeWidth={4} />
      <circle cx="110" cy="95" r="18" fill="none" stroke="#0B1235" strokeWidth={3} />
      <path d="M85 140 h50 M85 150 h50" stroke="#0B1235" strokeWidth={3} strokeLinecap="round" />
      <path d="M95 65 h30" stroke="#C79A46" strokeWidth={3} strokeLinecap="round" />
    </Wrap>
  );
}

export function TaxIcon() {
  const dots = [
    [90, 105], [110, 105], [130, 105],
    [90, 122], [110, 122], [130, 122],
    [90, 139], [110, 139], [130, 139],
  ];
  return (
    <Wrap>
      <circle cx="110" cy="110" r="95" fill="none" stroke="#C79A46" strokeWidth={2} />
      <rect x="65" y="55" width="90" height="110" rx="6" fill="none" stroke="#0B1235" strokeWidth={4} />
      <rect x="80" y="70" width="60" height="18" rx="2" fill="none" stroke="#C79A46" strokeWidth={3} />
      {dots.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={5} fill="#0B1235" />
      ))}
    </Wrap>
  );
}

export function InterpreterIcon() {
  return (
    <Wrap>
      <circle cx="110" cy="110" r="95" fill="none" stroke="#C79A46" strokeWidth={2} />
      <path
        d="M55 75 h70 a10 10 0 0 1 10 10 v35 a10 10 0 0 1 -10 10 h-45 l-20 20 v-20 h-5 a10 10 0 0 1 -10 -10 v-35 a10 10 0 0 1 10 -10 Z"
        fill="none"
        stroke="#0B1235"
        strokeWidth={3.5}
      />
      <path
        d="M95 105 h95 a10 10 0 0 1 10 10 v30 a10 10 0 0 1 -10 10 h-5 v18 l-18 -18 h-42 a10 10 0 0 1 -10 -10 v-10"
        fill="none"
        stroke="#C79A46"
        strokeWidth={3.5}
      />
    </Wrap>
  );
}

export function DivorceIcon() {
  return (
    <Wrap>
      <circle cx="110" cy="110" r="95" fill="none" stroke="#C79A46" strokeWidth={2} />
      <rect x="60" y="55" width="60" height="80" rx="4" fill="none" stroke="#0B1235" strokeWidth={3.5} transform="rotate(-8 90 95)" />
      <rect x="100" y="60" width="60" height="80" rx="4" fill="none" stroke="#0B1235" strokeWidth={3.5} transform="rotate(8 130 100)" />
      <path d="M85 155 l10 15 l30 -35" stroke="#C79A46" strokeWidth={3.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Wrap>
  );
}
