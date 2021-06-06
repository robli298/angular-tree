export interface TreeViewModel {
    key: number;
    parentKey: number | null,
    text: string;
    children: TreeViewModel[];
}