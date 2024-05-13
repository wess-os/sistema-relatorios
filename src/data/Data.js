import {
    UilEstate,
    UilUsersAlt,
    UilClipboardAlt,
    UilPackage,
    UilUsdSquare,
    UilMoneyWithdrawal
} from "@iconscout/react-unicons";

export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard"
    },
    {
        icon: UilUsersAlt,
        heading: "Atendimentos"
    },
    {
        icon: UilPackage,
        heading: "Estoque"
    }
];

export const CardsData = [
    {
        title: 'Vendas',
        color: {
            backGround: "linear-gradient(180deg, #1E90FF 0%, #4169E1 100%)",
            boxShadow: "0px 10px 20px 0px #87CEEB"
        },
        barValue: 70,
        value: "25.970,00",
        png: UilUsdSquare,
        series: [
            {
                name: "Vendas",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: 'Vendas',
        color: {
            backGround: "linear-gradient(180deg, #6495ED 0%, #4169E1 100%)",
            boxShadow: "0px 10px 20px 0px #87CEEB"
        },
        barValue: 80,
        value: "14.270,00",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Vendas",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        title: 'Vendas',
        color: {
            backGround: "linear-gradient(180deg, #00BFFF 0%, #4682B4 100%)",
            boxShadow: "0px 10px 20px 0px #87CEEB"
        },
        barValue: 60,
        value: "4.270,00",
        png: UilClipboardAlt,
        series: [
            {
                name: "Vendas",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],
    },
]