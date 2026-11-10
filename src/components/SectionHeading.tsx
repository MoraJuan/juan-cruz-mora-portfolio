type SectionHeadingProps = {
  id?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  id,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl md:mb-14">
      <h2
        id={id}
        className="font-display text-2xl font-medium tracking-tight text-text md:text-[1.85rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-[1.02rem] leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
