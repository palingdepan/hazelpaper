/**
 * Heading
 *
 * @param {Object} props - React props
 * @param {"h1" | "h2" | "h3" |
 *         "h4" | "h5" | "h6"} [props.as] - render the component as specified tag, default to h1 if not suitable
 */
export default function Heading(props) {
  const { as, children } = props;
  const isValidAs = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(as);

  if (!isValidAs && as !== undefined) {
    console.warn(`Invalid "as" property, the heading is rendered as h1`);
  }

  const Root = isValidAs ? as : "h1";
  const tag = isValidAs ? as : "h1";
  const [_, order] = tag.split("");

  const SIZES = [
    {
      font: 40,
      lineHeight: 48,
    },
    {
      font: 32,
      lineHeight: 38,
    },
    {
      font: 28,
      lineHeight: 34,
    },
    {
      font: 24,
      lineHeight: 28,
    },
    {
      font: 20,
      lineHeight: 24,
    },
    {
      font: 16,
      lineHeight: 18,
    },
  ];

  return (
    <Root className="heading">
      {children}
      <style jsx>{`
        .heading {
          margin: 0;
          font-weight: 500;
          font-size: ${SIZES[order - 1].font}px;
          line-height: ${SIZES[order - 1].lineHeight}px;
        }
      `}</style>
    </Root>
  );
}
