import * as React from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import Switch from '../elements/Switch';

export default function General(): JSX.Element {
  const {
    showIgnored,
    setShowIgnored,
    showTags,
    setShowTags,
    hideDifficulty,
    setHideDifficulty,
    hideModules,
    setHideModules,
  } = React.useContext(UserDataContext);
  return (
    <div>
      <div className="space-y-1">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
          Options
        </h3>
      </div>
      <div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-4 flex items-center justify-between">
            <div className="flex flex-col">
              <p
                className="text-sm font-medium text-gray-500 dark:text-gray-300"
                id="privacy-option-1-label"
              >
                Problem Lists and Search: Show Tags
              </p>
            </div>
            <Switch checked={showTags} onChange={b => setShowTags(b)} />
          </li>
          <li className="py-4 flex items-center justify-between">
            <div className="flex flex-col">
              <p
                className="text-sm font-medium text-gray-500 dark:text-gray-300"
                id="privacy-option-1-label"
              >
                Problem Lists and Search: Hide Difficulty
              </p>
            </div>
            <Switch
              checked={hideDifficulty}
              onChange={b => setHideDifficulty(b)}
            />
          </li>
          <li className="py-4 flex items-center justify-between">
            <div className="flex flex-col">
              <p
                className="text-sm font-medium text-gray-500 dark:text-gray-300"
                id="privacy-option-1-label"
              >
                Problem Search: Hide Modules
              </p>
            </div>
            <Switch checked={hideModules} onChange={b => setHideModules(b)} />
          </li>
          <li className="py-4 flex items-center justify-between">
            <div className="flex flex-col">
              <p
                className="text-sm font-medium text-gray-500 dark:text-gray-300"
                id="privacy-option-2-label"
              >
                Dashboard: Show Ignored Problems & Modules
              </p>
            </div>
            <Switch checked={showIgnored} onChange={b => setShowIgnored(b)} />
          </li>
        </ul>
      </div>
    </div>
  );
}
