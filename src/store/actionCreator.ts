import { actionCreatorFactory } from "typescript-fsa";
import { asyncFactory } from "typescript-fsa-redux-thunk";
import { IAppState } from "app/store/index";

export const actionCreator = actionCreatorFactory();
export const asyncActionCreator = asyncFactory<IAppState>(actionCreator);
