export const useTaskEntryStyles = () => ({
  flexStyles: {
    gap: 2,
    py: 1,
  },
  textStyles: {
    fontSize: 20,
  },
  checkboxStyles: {
    size: "lg",
    borderRadius: 8,
  },
});

export const useTaskListStyles = () => ({
  tabsStyles: {
    display: "flex",
    flexDirection: "column" as const,
    isFitted: true,
    mt: 4,
  },
  flexStyles: {
    mt: "auto",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tabPanelsStyles: {
    h: 400,
    overflow: "auto",
  },
});

export const useTaskTabStyles = () => ({
  boxStyles: {
    gap: 0,
  },
});
