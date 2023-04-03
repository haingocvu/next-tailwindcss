import { Listbox, Transition } from '@headlessui/react';
import {
  Dispatch,
  FC,
  FocusEventHandler,
  Fragment,
  PropsWithRef,
  SetStateAction,
} from 'react';
import { HiChevronUpDown } from 'react-icons/hi2';
import { BsCaretDownFill } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import {
  SelectDataItemModel,
  SelectDataModel,
} from '@app/shared/models/form/SelectModel';

export interface ISelectProps extends PropsWithRef<any> {
  data: SelectDataModel;
  value?: SelectDataItemModel;
  onChange?:
    | ((_val?: SelectDataItemModel) => void)
    | Dispatch<SetStateAction<SelectDataItemModel>>;
  obBlur?: FocusEventHandler<HTMLElement> | undefined;
  name?: string;
  placehoder?: string;
}

const TwSelect: FC<ISelectProps> = (props) => {
  const {
    data,
    value,
    onChange,
    obBlur,
    name,
    placehoder = 'Please select',
  } = props;

  return (
    <Listbox
      as="div"
      name={name}
      className="w-52 inline-block relative"
      value={value}
      onChange={onChange}
      onBlur={obBlur}
    >
      {({ open }) => (
        <>
          <Listbox.Button className="rounded-md bg-slate-50 px-2 py-1 w-full flex justify-between items-center relative">
            {value ? value?.name : placehoder}
            <HiChevronUpDown />
            {open && (
              <Transition
                className="absolute left-1/2 top-full text-slate-50  -ml-2 -mt-2"
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <BsCaretDownFill size="22" />
              </Transition>
            )}
          </Listbox.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Listbox.Options className="bg-slate-50 mt-4 rounded-md absolute w-full z-50">
              {data.map((p) => (
                <Listbox.Option
                  as={Fragment}
                  key={p?.id}
                  value={p}
                  disabled={p?.unavailable}
                >
                  {({ active, disabled }) => {
                    const isSelected = value?.id === p?.id;
                    return (
                      <li
                        className={`${
                          active
                            ? 'bg-orange-200'
                            : disabled
                            ? 'bg-slate-200 cursor-not-allowed'
                            : ''
                        } px-2 py-1 flex justify-between items-center`}
                      >
                        <span>{p?.name}</span>
                        {isSelected && <AiOutlineCheck />}
                      </li>
                    );
                  }}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  );
};

export default TwSelect;
