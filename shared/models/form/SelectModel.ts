interface ISelectDataItem {
  id: number;
  name: string;
  unavailable: boolean;
}

export type SelectDataModel = Array<SelectDataItemModel>;

export type SelectDataItemModel = ISelectDataItem | null;
