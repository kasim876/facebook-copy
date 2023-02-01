import React from 'react';

const RightSide = () => {
  return (
    <div className="sticky top-[var(--header-height)] min-w-[280px] max-w-[360px] min-h-[inherit] shrink-[9999] w-full">
      <div className="min-h-[initial] mt-4">
        <h2 className="text-[var(--text-secondary)] text-lg font-semibold px-2">Групповые переписки</h2>
        <div className="px-2">
          <div className="relative py-2">
            <a
              href="/"
              className="group"
            >
              <div className="flex items-center px-2 w-full">
                <div className="flex items-center justify-center w-9 h-9 bg-gray-200 mr-3 rounded-full shrink-0">
                  <i className="bg-[url('../assets/images/images4.png')] bg-[0_-1015px] w-5 h-5"></i>
                </div>
                <div className="w-full">
                  <span className="text-sm">Создать группу</span>
                </div>
              </div>
              <div className="absolute left-0 top-0 w-full h-full opacity-0 rounded-2xl bg-black/5 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;