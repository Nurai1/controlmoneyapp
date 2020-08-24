import {
    ADD_EXPENSES,
    ADD_PURCHASE,
    ADD_GENERAL_SUM,
} from './constants';

export interface ExpensePayload {
    value: number;
    name: string;
}

export interface PurchasePayload {
    expenseId: number;
    value: number;
    name: string;
}

export type addExpenseAction = {
    type: typeof ADD_EXPENSES;
    payload: ExpensePayload;
}

export interface addPurchaseAction {
    type: typeof ADD_PURCHASE;
    payload: PurchasePayload;
}

export interface addGeneralSumAction {
    type: typeof ADD_GENERAL_SUM;
    value: number;
}

export type appActionTypes = addExpenseAction | addPurchaseAction | addGeneralSumAction

export interface Purchase {
    value: number;
    name: string;
}

export interface Expense {
    id: number;
    value: number;
    name: string;
    isExpensePositive: boolean;
    purchases: Purchase[];
}

export interface AppState {
    generalSum: number;
    currentSum: number;
    isCurrentSumPositive: boolean;
    expenses: Expense[];
}