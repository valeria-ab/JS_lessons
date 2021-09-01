import {IGlobalState} from "./state";

export const selectAllCurrencyState = (state: IGlobalState) => state.currency;
export const selectCurrentCurrency = (state: IGlobalState) => state.currency.currentCurrency;