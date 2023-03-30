import {
  ComponentPropsWithRef,
  Dispatch,
  FC,
  forwardRef,
  Fragment,
  ReactComponentElement,
  SetStateAction,
} from 'react';
import { Switch } from '@headlessui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import DefaultIcon from './icons/Default';

interface IProps extends ComponentPropsWithRef<any> {
  name?: string;
  fallbackLabel?: string;
  enabled?: boolean;
  defaultEnable?: boolean;
  onChange?: Dispatch<SetStateAction<boolean>> | (() => any);
  activeIcon?: FC<any>;
  inActiveIcon?: FC<any>;
}

const TwSwitch: FC<IProps> = forwardRef<HTMLInputElement, IProps>(
  (props, ref) => {
    const {
      name,
      enabled,
      defaultEnable,
      fallbackLabel,
      onChange,
      activeIcon,
      inActiveIcon,
    } = props;

    const DefaultIc = (
      <DefaultIcon
        classNames={
          'inline-block h-4 w-4 transform rounded-ful transition bg-white'
        }
      />
    );

    const ActiveIcon = activeIcon || DefaultIcon;
    const InActiveIcon = inActiveIcon || DefaultIcon;
    return (
      <Switch.Group>
        <div className="items-center inline-flex">
          <Switch.Label className="mr-4 sr-only">{fallbackLabel}</Switch.Label>
          <Switch
            name={name}
            checked={enabled}
            onChange={onChange}
            defaultChecked={defaultEnable}
            as={Fragment}
          >
            {({ checked }) => (
              <button
                className={`${
                  checked ? 'bg-blue-600 dark:bg-blue-950' : 'bg-gray-800'
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                {checked ? (
                  <ActiveIcon
                    size={'100%'}
                    className={`translate-x-6 text-yellow-400 inline-block h-4 w-4 transform rounded-full transition bg-white`}
                  />
                ) : (
                  <InActiveIcon
                    size={'100%'}
                    className={`translate-x-1 text-yellow-400 inline-block h-4 w-4 transform rounded-full transition bg-white`}
                  />
                )}
                <input
                  type="hidden"
                  name={name}
                  value={checked.toString()}
                  ref={ref}
                />
              </button>
            )}
          </Switch>
        </div>
      </Switch.Group>
    );
  }
);

TwSwitch.displayName = 'TwSwitch';

export default TwSwitch;
