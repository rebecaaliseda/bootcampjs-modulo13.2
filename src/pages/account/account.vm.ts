export interface AccountVm {
    type: string;
    name: string;
}

export interface AccountError {
    type: string;
    name: string;
}

export const createEmptyAccountVm = (): AccountVm => ({
    type: '',
    name: ''
});

export const createEmptyAccountError = (): AccountError => ({
    type: '',
    name: ''
});