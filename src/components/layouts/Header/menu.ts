type BaseMenuItem = {
  label: string;
};

type WithPath = BaseMenuItem & {
  path: string;
  items?: never;
};

type WithChildren = BaseMenuItem & {
  items: IMenuItem[];
  path?: never;
};

export type IMenuItem = WithPath | WithChildren;

export const menu: IMenuItem[] = [
  {
    label: "Giới thiệu",
    items: [
      {
        label: "Tìm hiểu về đấu thầu",
        items: [
          {
            label: "Đấu thầu là gì?",
            items: [
              {
                label: "Tại sao cần đấu thầu?",
                path: "/",
              },
            ],
          },
          {
            label: "Tại sao cần đấu thầu?",
            path: "/",
          },
        ],
      },
      {
        label: "Giới thiệu về DauThau.info",
        items: [
          {
            label: "DauThau.info là gì?",
            path: "/",
          },
          {
            label: "Lịch sử hình thành",
            path: "/",
          },
        ],
      },
      {
        label: "Tính năng các gói phần mềm",
        path: "/",
      },
      {
        label: "Các mốc lịch sử",
        path: "/",
      },
      {
        label: "Báo chi viết về DauThau.info",
        path: "/",
      },
      {
        label: "Khách hàng nói về DauThau.info",
        path: "/",
      },
    ],
  },
  {
    label: "Bảng giá",
    items: [],
  },
  {
    label: "Tin tức",
    items: [],
  },
  {
    label: "Đấu thầu",
    items: [],
  },
  {
    label: "Đấu giá",
    items: [],
  },
  {
    label: "Thành viên",
    items: [],
  },
  {
    label: "Hướng dẫn",
    items: [],
  },
  {
    label: "Hỗ trợ",
    items: [],
  },
];
