export const useAppStyles = () => ({
  containerStyles: {
    py: 4,
    my: "auto",
    background: "white",
    borderRadius: 32,
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    maxW: "md",
  },
  headingStyles: {
    size: "2xl",
    mb: 4,
    fontWeight: 300,
    textAlign: "center" as const,
    color: "rgba(0, 0, 0, 0.6)",
  },
});
