
import React from 'react';

export const HubSpotCookieBanner: React.FC = () => {
  const handleShowBanner = () => {
    const _hsp = (window as any)._hsp = (window as any)._hsp || [];
    _hsp.push(['showBanner']);
  };

  return (
    <button
      type="button"
      id="hs_show_banner_button"
      onClick={handleShowBanner}
      className="bg-[#425b76] border border-[#425b76] rounded-sm px-4 py-2.5 text-white text-sm font-normal leading-normal text-left hover:bg-[#3a4f66] transition-colors duration-200"
    >
      Paramètres des cookies
    </button>
  );
};
