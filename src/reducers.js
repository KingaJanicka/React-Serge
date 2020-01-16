import { Observable } from "rxjs";

const cableReducer = (state = new Map(), action) => {
  switch (action.type) {
    case "connect":
      const output = state.get(action.output);
      output.subscribe(action.input);
    case "disconnect":
      const output = state.get(action.output);
      output.unsubscribe(action.input);
  }
};
