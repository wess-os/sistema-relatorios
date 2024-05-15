import {
    UilEstate,
    UilUsersAlt,
    UilUser,
    UilPackage,
    UilReceipt,
    UilDollarAlt
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
        title: 'Clientes',
        color: {
            backGround: "linear-gradient(180deg, #1E90FF 0%, #4169E1 100%)",
            boxShadow: "0px 10px 20px 0px #87CEEB"
        },
        barValue: 105,
        value: "52003",
        png: UilUser,
        series: [
            {
                name: "Clientes",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: 'Ticket Médio',
        color: {
            backGround: "linear-gradient(180deg, #6495ED 0%, #4169E1 100%)",
            boxShadow: "0px 10px 20px 0px #87CEEB"
        },
        barValue: 101,
        value: "R$14.270,00",
        png: UilReceipt,
        series: [
            {
                name: "Ticket Médio",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        title: 'Faturamento',
        color: {
            backGround: "linear-gradient(180deg, #00BFFF 0%, #4682B4 100%)",
            boxShadow: "0px 10px 20px 0px #87CEEB"
        },
        barValue: 98,
        value: "R$4.270,00",
        png: UilDollarAlt,
        series: [
            {
                name: "Faturamento",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],
    },
]