// components/MapEmbed.tsx
const address =
  "Barrio El Centro, calle Vicente Williams, Plaza Isabelle, Choluteca, Choluteca";

const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  address
)}&output=embed`;

export function MapEmbed() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border bg-white">
      <iframe
        src={MAPS_EMBED_URL}
        width="100%"
        height="380"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
