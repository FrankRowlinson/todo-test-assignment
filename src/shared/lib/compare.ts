import { isEqual } from "lodash";

export const compareStates = (oldState: unknown, newState: unknown) =>
  isEqual(oldState, newState);
