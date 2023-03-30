import {
  ComponentPropsWithRef,
  Dispatch,
  FC,
  forwardRef,
  Fragment,
  SetStateAction,
} from 'react';
import { Switch } from '@headlessui/react';

interface IProps extends ComponentPropsWithRef<any> {
  name?: string;
  fallbackLabel?: string;
  enabled?: boolean;
  defaultEnable?: boolean;
  onChange?: Dispatch<SetStateAction<boolean>> | (() => any);
}

const TwSwitch: FC<IProps> = forwardRef<HTMLInputElement, IProps>(
  (props, ref) => {
    const { name, enabled, defaultEnable, fallbackLabel, onChange } = props;
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
                  checked ? 'bg-blue-600 dark:bg-blue-950' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    checked ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
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
