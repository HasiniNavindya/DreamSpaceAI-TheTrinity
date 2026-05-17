export type MoodboardCategory = "all" | "furniture" | "lighting" | "decor" | "colors";

export type MoodboardItem = {
  id: string;
  label: string;
  image: string;
  category: Exclude<MoodboardCategory, "all">;
  /** CSS aspect-ratio for Pinterest-style variable pin heights */
  aspectRatio: string;
};

export const MOODBOARD_CATEGORIES: { id: MoodboardCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "furniture", label: "Furniture" },
  { id: "lighting", label: "Lighting" },
  { id: "decor", label: "Decor" },
  { id: "colors", label: "Colors" },
];

export const MOODBOARD_ITEMS: MoodboardItem[] = [
  {
    id: "minimal-decor",
    label: "Minimal vase & pampas",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1tD8mfCC5Y95l63TWeMgHgvX_Wo_UCs0S-BR5lkkHC49C8a9noQwLxIjCz7GLk86AjErgy_TDxioEz7Xb8XZNBHpMxGH9Zo3RjMlstEMKo7HaLhH7AW4L8cpgqh3DL6qBLVTTU-LEZwGmkN3IOcMnnzMfWADwav3oaFcF2QYp_A1RelAZqjnq5rA3FFT-O05dIkqMCdCPf3i1v7H-upvHeOQ-3DSAdyPMhQ_-3OEi3MkS4r3aSL5kQuGIg4tDYlEyQu7KYFHE4frU",
    category: "decor",
    aspectRatio: "4 / 5",
  },
  {
    id: "walnut-linen",
    label: "Walnut & linen armchair",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbfSz3bDTtJCKFjFHLY7QMo1xgMl0uC11OMkSwlilgtDaPYebau7refaS42V-2EW3Kx3zj9En-rGQ9F3UIFiyD_lQldrU4H2jDeLKIt6u8O0LRx9x8I5ENuKzSmTtUHHr6QQer8m5Ayg8UJkxMNzV6fkriIpYHNdFI5SEMTkLFInBWqkIqcDVheF1vBhTvH6-ANBJDKqYj-a9A0HI_qTYZpo4QII94411Tw_-PNeP4v56JWQeimndIEv4l-pJqxwTZV9tYzu-DTJBa",
    category: "furniture",
    aspectRatio: "3 / 4",
  },
  {
    id: "japandi",
    label: "Japandi corner",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmLDTlbOxFmDZH2wD60bdriB8YTSDsMO_fQiS88LnAcH767gLU82tq1LPUyEagK1gIAi5SHnRyW4t9X1-KiOMw_iiL_bvV-oqn5ZR3lkGrR_Xmx8yDlb053MRIfEYflHHzuL8dopIf8pg7xObnVLNO2Unzup6M0NmhQ-FMHX2rOXJ8Nho5wbjflQbU1S8r26XyZZldmFbahbCunouhGUs1OuFxcO4tu1Z0J-yMsnAHMRdIjsJ_2rQ3Em2SkMQOnSGQpE7lzjoBCTcQ",
    category: "furniture",
    aspectRatio: "2 / 3",
  },
  {
    id: "warm-tones",
    label: "Warm tones palette",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCgvo4ALES99BRbQvhBxdeRldEJsOmxTWnzxs6shb_tAonzij2YNKb2JCKdi3qbDfvwN5u43bQXDCFk9W2g7woRlyRgQeAP14FAmPlE3N4gq3z6DAL87rBjazSFmGENm0YE1nyrgbhq8EZK9UnDS5KbhMdp9ylZ64iuWNpslOfdHATq22FDdsJgziXFloKhUZ9-QZFQxj8oIv1ljYBst8p33eIY8UcboDGmdNhPnkxb1gAwexoPlXsRvtt-I9UZt2rZBZuxUQ_J_TlM",
    category: "colors",
    aspectRatio: "1 / 1",
  },
  {
    id: "cozy",
    label: "Cozy reading nook",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8FI4pBM53WFBImdb6uHk2H9kC2Kx8bCD7Y8PnNK7irzzhWqp7UVBEggmaBfgtmvzynRkYJCwWVZCLsT-D1MznI_7DxVyZG1Wb4iveD0sp9MWa0y4G1-r46XsJXJwenty10fc6B2aGPF7mDeZNGFzXwtte3YJ3zy8MIqA0j12B234qS__03Omz4fht812_B-yyXTSfawGiqn4docOII7LMe3wOsEA2yIW3__5TAL6JJl2yvYql_qbjNfIfSVQxToLS5dJoSOJxYqZH",
    category: "furniture",
    aspectRatio: "5 / 6",
  },
  {
    id: "scandinavian-light",
    label: "Scandinavian pendant",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCloq5VR5p4mu42isBI5kGqOlw08UG3y7tt3p-HnYjcEt8hKqHpZDob-BlS8RV0ohPS6DXsFCoOgttWyoBlJLHvXsEDxGjPFTFeylt_i_2PR-iEPT4Sin9GKsU6fySvH3bKMF5ruljYYY_FGR39VojP1ol7hdm9qHxq8Tj6emmVIAWRvlXUYqY3l527_jEMeJi6Gv8WWwHxEmdLkPZQR2wNYcpkXy-0BcnegxPgEb5yvjM_7mpWxQ3jVDmmIFitWLKQFDpLlLIT23i6",
    category: "lighting",
    aspectRatio: "3 / 5",
  },
  {
    id: "luxury-textures",
    label: "Luxury velvet sofa",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8sXe7Lakt3bouRgyeS1AuZrha2Vx13usSSDz8XKVkAxt3puYPSY5joXFtbAclJy2TMc5sOW73C1hzvAjCDBYrSWFm5MnoQUoN92pp9iNl2oxNvwcITCISLWIkB3urr-pTzMz8KdT7I5XL3kwRJVjKW48EiIJor4P5uh3vd9Q6EyoGVsRq8og5s1hUN2t742Q4DVyYCVghmHDHhpDb7UTNu2oyujuDuySlTOFct7JzpcubFiVF7P4kqBXrseT5PL0FDYgyCsLp8Z3e",
    category: "furniture",
    aspectRatio: "4 / 5",
  },
  {
    id: "terracotta-throw",
    label: "Terracotta throw",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhvt7ZbPborAfkKtwCA1BaYQFyYz2fwNuOKICYCGEOopaL0va7jsN99UsUtQzIBG8gcwfsGOy1eYVRh_3cBgeGdR-jbkN2fe9uO_SAJrf40CFBBYctArr2L9nJn3JFI8uQ7nwpSZxn4l2hqEjO99soSx9llzzaSGhlIzGjZeFVIuSUdOBXG62U8YOmr0tz-5T5M7IXwPg1IJEJ9-bbbNKbxKxPKxD5JmfNE_58ZvEZ4Nn7JJQlsJCYIE_Ge9Eyge0Y_H1oRgrbEe3z",
    category: "decor",
    aspectRatio: "3 / 4",
  },
  {
    id: "brass-sconce",
    label: "Brass wall sconce",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnn9zXG7dg9roA08lLkK5IA4lMRyAeuJrbzZ-Edl2_63THg_xtRRQkjUctJneRHmntKtMQGdUxDo4ptJfDsSQN5kRJ9YDN9P73WGPwgwA4W0PWhsprjVUHMBrqtJtnZu1vDjJYEEWlp4HdKEvQ7hlPXTxQFun6CnCt-YeGN1hN1G6C8kCDXwmJOs3WY6JJwbZghnqo6bV4c5RdHMUOX8Yj_3wxkhI6VT61k3voGaM33hdyp2TnnDtAz4O10QSFqB0AZcm2bpi6ku3c",
    category: "lighting",
    aspectRatio: "2 / 3",
  },
  {
    id: "linen-sheets",
    label: "Linen bedding set",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9soLEvg7TGGkNr6N1Hr3HHJTVIkpgQxQjSJ9dxjmQz3pv13iGWDLUHRcVVI39MB_FKTFqw_fKS8DA8woCCARcQR-Lgj9AmTMRqMmHNSzEbgmwXGcPCog6_sccMXDHVBw8UuDGVpd_kY_2oP0YFvogLx10T7Rxe02JPJnu7EEUOAZWOgK51qJbQky7_3GqbEULrHWJh3oZ4KAD6YWTj-moUbLeL7ejJuEKtna2NF7XdKhZHAitGj_CdlOwg71a9--jD20WyJFTwsHx",
    category: "decor",
    aspectRatio: "5 / 4",
  },
  {
    id: "oak-dining",
    label: "Oak dining table",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdXPBP8PugpC4DeVDRNFzpxSoIq4nUtlhbM5onn5KOsJqcebKdTMGg1GID5eQKCb6PblvsxeoIWbOy0WkiY4-AgTlso7YDkdOLdbgrqSBTjHV4fLhEtS3JQS6AQJiOGMsDc69SKBfreuovLbx_kPfJK2uLg-Zq5GaUQxf5AxWwzHWRjW3KA-vxngWEsRuzMm61uBGrJa-Y4XuHH8JM3dltCvPRRsqXLXtLpHzeZ_OaGotEV-bvOoRZ8FlD3zX1xTKQCGKivtW2Ngkt",
    category: "furniture",
    aspectRatio: "16 / 10",
  },
  {
    id: "sage-paint",
    label: "Sage green accent",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADV-DdVgVoPmMYycSG8_HT8UQQ46PL3Agnq_kRZ6G4PpB5U1A2__X0S7E-jK9LS3a-mLYWJE8T-9j2xynbe81L0ZLIFpBguPB59C6Q-KetGHayW-UDJ2-ujckvapTcm2gKfFrQ8SMlatjXvkVMpNDfcdQeeTV6FtyJfu0RmJ8xYMbcPZExEesiehNOemKayt6pnKRCEx1wDkSQoBUiVJPtGSgrxIFA2bX-w8nlbPmpW2yQlvDdff88xIwwZhhjfNyxJg91LbyASRHS",
    category: "colors",
    aspectRatio: "4 / 3",
  },
  {
    id: "ceramic-lamp",
    label: "Ceramic table lamp",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAF8QNe5ANmw8JGEqE7Kgar8aGzqzaVvre9NvM_BqV7Na5tD9VUSTT7YCkSwVx58nIyDo4vCJTMx1nzeKMExGm1JRqTx3hDPHV44IES8RxE9qjEEXbz3iGuvsrLdC5QRcImyTthZROwbzJTNna7y3QFPbrC8tQWuvJUq2aCBckaANXYsDsSuVgy5K6otH8qvUtPoxeC0rtiw4Pk7hFwMZPH7caNEjVpfkui4cW2TVWTTNwkIuKNbAjyBPe3BN8GQd8INhIruBm2YCYg",
    category: "lighting",
    aspectRatio: "3 / 4",
  },
  {
    id: "abstract-art",
    label: "Abstract wall art",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCibHrRwgi9jXH2nYECZ_dugW999FJr61PqHIc_-XEPnu9xUXoQdHoGlsF7iyIqsnNnhTtOlBsDWXXWA2Cd81xaL5_TaLCx64kBFwU73m5-iBeBSzcKbBKs8zHhngslWIWA3y-j3IZy_VuBCThXPakd2vPzMxuDdgnCTAtzf8j_me7JiXI4UBb8QcNblEKdXPq2b_eJ_Q_3xhso8uKMXXjVJ15rayAz7DCeVWvga4_F6c4bB7z0IO3VPRnFP1PZqTOPFeT3GYwV9h93",
    category: "decor",
    aspectRatio: "1 / 1",
  },
];
