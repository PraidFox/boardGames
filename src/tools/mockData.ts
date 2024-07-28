import {collection, collectionFullInfo} from "./interfaces/collectionsInterface";

export const mockCollections: collection[] = [
    {name: "favorite", id: 1, title: "Избранное"},
    {name: "wantToPlay", id: 2, title: "Хочу поиграть"},
    {name: "viewGames", id: 3, title: "Просмотренные игры"},
    {name: "wqdqcvfdgd", id: 4, title: "Топ игр с животными"},
    {name: "vsdffweewre", id: 5, title: "Как они прекрасны"},
]

export const mockCollectionsFullInfo: collectionFullInfo[] = [
    {
        img: "https://media.istockphoto.com/id/1361394182/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D0%B1%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%BE%D1%88%D0%B5%D1%80%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B2%D1%8B%D0%B3%D0%BB%D1%8F%D0%B4%D1%8F%D1%89%D0%B8%D0%B9-%D1%88%D0%BE%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B8%D0%BB%D0%B8-%D1%83%D0%B4%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC.jpg?s=612x612&w=0&k=20&c=yEEyxvdyb-jUxnHmr8nXSf9qQPS0WfkhBITLVIaj7OY=",
        collectionId: 1,
        description: "Какое-то описание и еще может быть что-нибудь",
        dataUpdate: "27.08.2024",
        name: "favorite", id: 1, title: "Избранное",
        byUserName: "Alex",
        likes: 23,
    },
    {
        img: "https://media.istockphoto.com/id/1361394182/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D0%B1%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%BE%D1%88%D0%B5%D1%80%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B2%D1%8B%D0%B3%D0%BB%D1%8F%D0%B4%D1%8F%D1%89%D0%B8%D0%B9-%D1%88%D0%BE%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B8%D0%BB%D0%B8-%D1%83%D0%B4%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC.jpg?s=612x612&w=0&k=20&c=yEEyxvdyb-jUxnHmr8nXSf9qQPS0WfkhBITLVIaj7OY=",
        collectionId: 2,
        description: "Какое-то описание и еще может быть что-нибудь",
        dataUpdate: "27.08.2024",
        name: "wantToPlay", id: 2, title: "Хочу поиграть",
        byUserName: "Alex",
        likes: 23,
    },
    {
        img: "https://media.istockphoto.com/id/1361394182/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D0%B1%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%BE%D1%88%D0%B5%D1%80%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B2%D1%8B%D0%B3%D0%BB%D1%8F%D0%B4%D1%8F%D1%89%D0%B8%D0%B9-%D1%88%D0%BE%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B8%D0%BB%D0%B8-%D1%83%D0%B4%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC.jpg?s=612x612&w=0&k=20&c=yEEyxvdyb-jUxnHmr8nXSf9qQPS0WfkhBITLVIaj7OY=",
        collectionId: 3,
        description: "Какое-то описание и еще может быть что-нибудь",
        dataUpdate: "27.08.2024",
        name: "viewGames", id: 3, title: "Просмотренные игры",
        byUserName: "Alex",
        likes: 23,

    },
    {
        img: "https://media.istockphoto.com/id/1361394182/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D0%B1%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%BE%D1%88%D0%B5%D1%80%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B2%D1%8B%D0%B3%D0%BB%D1%8F%D0%B4%D1%8F%D1%89%D0%B8%D0%B9-%D1%88%D0%BE%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B8%D0%BB%D0%B8-%D1%83%D0%B4%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC.jpg?s=612x612&w=0&k=20&c=yEEyxvdyb-jUxnHmr8nXSf9qQPS0WfkhBITLVIaj7OY=",
        collectionId: 4,
        description: "Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание модели развития. Равным образом начало повседневной работы по формированию позиции играет важную роль в формировании модели развития. Товарищи! укрепление и развитие структуры влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.",
        dataUpdate: "27.08.2024",
        name: "wqdqcvfdgd", id: 4, title: "Топ игр с животными",
        byUserName: "Alex",
        likes: 23,
    }
    ,
    {
        img: "https://media.istockphoto.com/id/1361394182/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D0%B1%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%BE%D1%88%D0%B5%D1%80%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%B2%D1%8B%D0%B3%D0%BB%D1%8F%D0%B4%D1%8F%D1%89%D0%B8%D0%B9-%D1%88%D0%BE%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B8%D0%BB%D0%B8-%D1%83%D0%B4%D0%B8%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC.jpg?s=612x612&w=0&k=20&c=yEEyxvdyb-jUxnHmr8nXSf9qQPS0WfkhBITLVIaj7OY=",
        collectionId: 5,
        description: "Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание модели развития. Равным образом начало повседневной работы по формированию позиции играет важную роль в формировании модели развития. Товарищи! укрепление и развитие структуры влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание модели развития. Равным образом начало повседневной работы по формированию позиции играет важную роль в формировании модели развития. Товарищи! укрепление и развитие структуры влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач.Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обу",
        dataUpdate: "27.08.2024",
        name: "wqdqcvfdgd", id: 5, title: "Как они прекрасны",
        byUserName: "Alex",
        likes: 23,
    }
]