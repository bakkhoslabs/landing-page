type HeadingProps = {
  text: string;
  fadeUp?: boolean;
};

const GoldHeading1 = ({ text, fadeUp }: HeadingProps) => {
  return (
    <h1 className="h1 mb-4 bg-gradient-to-r from-amber-300 to-yellow-500 inline-block text-transparent bg-clip-text" data-aos={fadeUp ? "fade-up" : ""}>
      {text}
    </h1>
  )
}

const SlateHeading2 = ({ text, fadeUp }: HeadingProps) => {
  return (
    <h2 className="h2 mb-4 bg-gradient-to-r from-slate-300 to-slate-400 inline-block text-transparent bg-clip-text" data-aos={fadeUp ? "fade-up" : ""}>
      {text}
    </h2>
  )
}

const GoldHeading2 = ({ text, fadeUp }: HeadingProps) => {
  return (
    <h2 className="h2 mb-4 bg-gradient-to-r from-amber-300 to-yellow-500 inline-block text-transparent bg-clip-text" data-aos={fadeUp ? "fade-up" : ""}>
      {text}
    </h2>
  )
}

const SlateHeading4 = ({ text, fadeUp }: HeadingProps) => {
  return (
    <h4 className="h4 mb-4 bg-gradient-to-r from-slate-300 to-slate-400 inline-block text-transparent bg-clip-text" data-aos={fadeUp ? "fade-up" : ""}>
      {text}
    </h4>
  )
}

export { GoldHeading1, SlateHeading2, GoldHeading2, SlateHeading4 }