import { FC, PropsWithRef } from 'react';
import { useController } from 'react-hook-form';
import TwSelect from './Select';
import { SelectDataModel } from '@app/shared/models/form/SelectModel';
import { IControllerProps } from '@app/shared/models/form/ControllerProps';

interface IProps extends PropsWithRef<any>, IControllerProps {
  data: SelectDataModel;
  placehoder?: string;
}

const SelectController: FC<IProps> = (props) => {
  const { data, control, name, rules } = props;
  const { field, fieldState } = useController({ name, control, rules });

  const renderError = () => {
    return fieldState?.invalid && fieldState?.error?.message;
  };

  return (
    <div className="flex-col inline-flex">
      <TwSelect
        onChange={field.onChange}
        obBlur={field.onBlur}
        value={field.value}
        data={data}
      />
      <span className="px-2 text-red-600 text-sm italic">{renderError()}</span>
    </div>
  );
};

export default SelectController;
