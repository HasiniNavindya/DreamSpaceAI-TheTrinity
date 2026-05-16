export type InteriorStyle = {
  id: string;
  name: string;
  image: string;
  galleryImage?: string;
};

/** Styles shown on Popular Interior Styles carousel and Styles Gallery */
export const INTERIOR_STYLES: InteriorStyle[] = [
  {
    id: "modern",
    name: "Modern",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCi8vFGrojRfc9z1LZ1bh3NHNnJnbYuKJ8ytW2vxMIKMzTTEhHa3eZFf4VDGDp1wufGu4chXg_kBI2M7as1OTg34qiVfvl8hthwfyG31mVfS06zNws481hCTtiRBFtUIEjlCi3rYPjWYqJiH7ox-69s4rHJBBUWQE9LKvLxY5eOxWs5RokmLYkfzdMdp8LoQXvEPnE5vhHyzNybBcdmD4D3kTcGmXXN2_2AhA_5YQu0m3QFWCcN8eo98k_X10R1osrVaVZpHQvRWadg",
    galleryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdXPBP8PugpC4DeVDRNFzpxSoIq4nUtlhbM5onn5KOsJqcebKdTMGg1GID5eQKCb6PblvsxeoIWbOy0WkiY4-AgTlso7YDkdOLdbgrqSBTjHV4fLhEtS3JQS6AQJiOGMsDc69SKBfreuovLbx_kPfJK2uLg-Zq5GaUQxf5AxWwzHWRjW3KA-vxngWEsRuzMm61uBGrJa-Y4XuHH8JM3dltCvPRRsqXLXtLpHzeZ_OaGotEV-bvOoRZ8FlD3zX1xTKQCGKivtW2Ngkt",
  },
  {
    id: "minimal",
    name: "Minimal",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrTTy3OPmagQ31vMIrm0NtcuS-PEzcl0mSnINPUoYOQDH1ypZVnIgb3x8B35w5TEhmp6Kw9CeZddllE7a98ECvwUYwX9bfEwfzHAFtZZf4GLq0iUjBfSCs02cNpy2bIu12o8khRYtOs_DVFGWtewu26b7AVjgllIORGQfh7vl8SGBWCpIImtEvGdTYT8f8eHkn4VtVvZYRDy5ALZ4idC-qxistAZRYVa3puY0_ir_YiruULBTb0KzjGJwpm1LN9uKgOexgIkMHrDR4",
    galleryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9soLEvg7TGGkNr6N1Hr3HHJTVIkpgQxQjSJ9dxjmQz3pv13iGWDLUHRcVVI39MB_FKTFqw_fKS8DA8woCCARcQR-Lgj9AmTMRqMmHNSzEbgmwXGcPCog6_sccMXDHVBw8UuDGVpd_kY_2oP0YFvogLx10T7Rxe02JPJnu7EEUOAZWOgK51qJbQky7_3GqbEULrHWJh3oZ4KAD6YWTj-moUbLeL7ejJuEKtna2NF7XdKhZHAitGj_CdlOwg71a9--jD20WyJFTwsHx",
  },
  {
    id: "luxury",
    name: "Luxury",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTHeEnYxeR5ypyTzlknOkB3SseENzCC6LKND9GaRgYZt2rzyW-m9hKJMWoIwqlezbnRRcM6ZiY0RkQ7X41FR3WVB51uClfpm8IfFanGofCTF65bXNCPP7iKXiqXqwZQ4YL-iOjqFBmHO1rtDlZzjIB0EuJGDTSmX0NWGQQnq0jf9cFVF6-7FvHK7OTmgT5OdLHszIm-IzJ6Zk0h4N0qhn81UHDIAXgfUQKouSeadeBDMWiy5JRmu47w-y8_EWPKsLJfmaP6HPSFItL",
    galleryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnn9zXG7dg9roA08lLkK5IA4lMRyAeuJrbzZ-Edl2_63THg_xtRRQkjUctJneRHmntKtMQGdUxDo4ptJfDsSQN5kRJ9YDN9P73WGPwgwA4W0PWhsprjVUHMBrqtJtnZu1vDjJYEEWlp4HdKEvQ7hlPXTxQFun6CnCt-YeGN1hN1G6C8kCDXwmJOs3WY6JJwbZghnqo6bV4c5RdHMUOX8Yj_3wxkhI6VT61k3voGaM33hdyp2TnnDtAz4O10QSFqB0AZcm2bpi6ku3c",
  },
  {
    id: "scandinavian",
    name: "Scandinavian",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbmMKXBgu5LNe8j-pEUhlQdUMjaTpqvVJDcvpRGF5tabTgHUR_uxOjDwObzxeHp34rwXZGuewJ7aCQ-EQ_octn9k7uMbY5EAUn7C19qqdzL-iheX5Yq4Cuf4P3AGHijClYEXM0iJOQxnV78cDmp601U0FWS1xMNbkJEbn1h2eU1LODdE9AH51Oeldr1nE7wbd6gwK8cqoLAem7iIjiSHxwa33QonzKMDsESU6xNRLGngCbFhZv8smVZ64qcq59uAoufgq2c7hmeb1j",
    galleryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhvt7ZbPborAfkKtwCA1BaYQFyYz2fwNuOKICYCGEOopaL0va7jsN99UsUtQzIBG8gcwfsGOy1eYVRh_3cBgeGdR-jbkN2fe9uO_SAJrf40CFBBYctArr2L9nJn3JFI8uQ7nwpSZxn4l2hqEjO99soSx9llzzaSGhlIzGjZeFVIuSUdOBXG62U8YOmr0tz-5T5M7IXwPg1IJEJ9-bbbNKbxKxPKxD5JmfNE_58ZvEZ4Nn7JJQlsJCYIE_Ge9Eyge0Y_H1oRgrbEe3z",
  },
  {
    id: "korean-style",
    name: "Korean Style",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGTWL0TxTov2O6GMM4gJhZ75oR3BNPkXCCMcpm6mFYSI8OmhoxSY9j2uMLblNSXvNwVbKfWUp0E5tmCNIa3d_xczgK3KaEUly7bHXRVgBBvZOtDO14Qlsf2dOnFZe7M7sKHydYWz-SFwCBjyUYYUwKZpFPK7STWENr7oEgRj8hdXCd9GnbaZzNQUamEQGZuUyBF7OOwyyoKQgk68kZfqeco5aVGVeWFRYrrOYdlWeVcrSTn9rpmUGjv1AkD1eOBfQ4mieQEn_9Hiz7",
    galleryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeS5l98Bhy9BCNrMZt7AZufdZQe1HGJq31tvgiDbP4SM_zxuszotlb1kdJCXBiEy60te_cD0EdG5377bMc99FcE210CcFRpmIXHXZ8m3FjT2TdwmtQ9wca9syx6s4JLvQ-ZOfRvzY2jUG2i5t27aDYh-zC7MkrgLH-yMm8zV7MEKIjUalCrIfI5AMi1WRK_ElEBkbV7EChBuoZs9HG9ovSq0hUL5kyIzPnafJI5OIZFqj1oyrvsoRapRhyBgo1kQWLv5_Oo0r3eJCz",
  },
  {
    id: "gaming",
    name: "Gaming",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-y0SvMAU5AoalfuOvBCvU_5mLUTO5os_q2Yt8wVVBhvyxJuW8CywfP96Aa506bHzzuazXIiG05sNEQ0PHKX0YhIw9-Xif_mtUbRxmpcxSIyfzK8C2PBFBtiAeoeDpK0GntpVtb0knDcrr2Jq1kKcf76kOflUgv_oVw6z-YXI1qllEIGcgoXdkfOTkU57EHHL9jhOoWr-SOs77ubIA3-own3osrb_ucxls_ASksG-esJVOsiqoXtCLgggkjmTp51TmQqEyMWfAQCXb",
    galleryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAF8QNe5ANmw8JGEqE7Kgar8aGzqzaVvre9NvM_BqV7Na5tD9VUSTT7YCkSwVx58nIyDo4vCJTMx1nzeKMExGm1JRqTx3hDPHV44IES8RxE9qjEEXbz3iGuvsrLdC5QRcImyTthZROwbzJTNna7y3QFPbrC8tQWuvJUq2aCBckaANXYsDsSuVgy5K6otH8qvUtPoxeC0rtiw4Pk7hFwMZPH7caNEjVpfkui4cW2TVWTTNwkIuKNbAjyBPe3BN8GQd8INhIruBm2YCYg",
  },
  {
    id: "dark-aesthetic",
    name: "Dark Aesthetic",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCibHrRwgi9jXH2nYECZ_dugW999FJr61PqHIc_-XEPnu9xUXoQdHoGlsF7iyIqsnNnhTtOlBsDWXXWA2Cd81xaL5_TaLCx64kBFwU73m5-iBeBSzcKbBKs8zHhngslWIWA3y-j3IZy_VuBCThXPakd2vPzMxuDdgnCTAtzf8j_me7JiXI4UBb8QcNblEKdXPq2b_eJ_Q_3xhso8uKMXXjVJ15rayAz7DCeVWvga4_F6c4bB7z0IO3VPRnFP1PZqTOPFeT3GYwV9h93",
    galleryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCibHrRwgi9jXH2nYECZ_dugW999FJr61PqHIc_-XEPnu9xUXoQdHoGlsF7iyIqsnNnhTtOlBsDWXXWA2Cd81xaL5_TaLCx64kBFwU73m5-iBeBSzcKbBKs8zHhngslWIWA3y-j3IZy_VuBCThXPakd2vPzMxuDdgnCTAtzf8j_me7JiXI4UBb8QcNblEKdXPq2b_eJ_Q_3xhso8uKMXXjVJ15rayAz7DCeVWvga4_F6c4bB7z0IO3VPRnFP1PZqTOPFeT3GYwV9h93",
  },
  {
    id: "cafe-style",
    name: "Cafe Style",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDliyrD116xDYd6xbFz6XLRLL2WNWa0W2SsEN2z9OtseIPu7AJi7ZzJmdMbLVjGipoHEzdpYkOwMPtXjDX2PvwfA3zODXcMh7HPnL6Ehn4oh41w14Ctk4xLo0-2J8RhXMLzSJECfBt2x0mF1aqT8C3LaL1AHEL7GiGqF5QzfIAG0MbnT2SX9CojfRhDFPCUrXrQFbX8OHsXaQHySyVilr7KkXGvzizzEF1KTbkFLuojX1_r6piVe2DLvyLPLZdYzaJJzIuea3OotrrD",
    galleryImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADV-DdVgVoPmMYycSG8_HT8UQQ46PL3Agnq_kRZ6G4PpB5U1A2__X0S7E-jK9LS3a-mLYWJE8T-9j2xynbe81L0ZLIFpBguPB59C6Q-KetGHayW-UDJ2-ujckvapTcm2gKfFrQ8SMlatjXvkVMpNDfcdQeeTV6FtyJfu0RmJ8xYMbcPZExEesiehNOemKayt6pnKRCEx1wDkSQoBUiVJPtGSgrxIFA2bX-w8nlbPmpW2yQlvDxff88xIwwZhhjfNyxJg91LbyASRHS",
  },
];

export function getStyleGalleryImage(style: InteriorStyle): string {
  return style.galleryImage ?? style.image;
}
