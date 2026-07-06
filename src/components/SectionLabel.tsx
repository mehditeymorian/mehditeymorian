export function SectionLabel({ index, title, note }: { index: string; title: string; note: string }) {
  return (
    <div className="slabel">
      <span className="slabel__idx">{index}</span>
      <span className="slabel__title">{title}</span>
      <span className="slabel__note">— {note}</span>
    </div>
  )
}
