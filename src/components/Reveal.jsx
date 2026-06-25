export default function Reveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 900,
  as: Component = "div",
  className = "",
  ...props
}) {
  return (
    <Component
      className={className}
      data-aos={animation}
      data-aos-duration={duration}
      {...(delay ? { "data-aos-delay": delay } : {})}
      {...props}
    >
      {children}
    </Component>
  );
}
