const products = [
    {
        id: 1,
        name: "Naruto Uzumaki Figure",
        mainCategory: "figure",
        subCategory: "anime",
        series: "Naruto",
        price: 2590,
        shortDesc: "ฟิกเกอร์ Naruto งานละเอียด เหมาะสำหรับสะสม",
        fullDesc: "ฟิกเกอร์ Naruto Uzumaki จากอนิเมะ Naruto ผลิตจากวัสดุ PVC คุณภาพสูง รายละเอียดคมชัด เหมาะสำหรับนักสะสมและการตั้งโชว์",
        images: [	
				 "images/naruto1.jpg",
				 "images/naruto2.jpg",
				 "images/naruto3.jpg",
				 "images/naruto4.jpg",
				 "images/naruto5.jpg"],
		
        rating: 4.8,
        reviews: [
            {
                user: "ลูกค้า A",
                score: 5,
                comment: "งานสวยมาก รายละเอียดเหมือนในอนิเมะ"
            },
            {
                user: "ลูกค้า B",
                score: 4,
                comment: "วัสดุดี กล่องสมบูรณ์"
            }
        ]
    },

    {
        id: 2,
        name: "Luffy Gear 5 Figure",
        mainCategory: "figure",
        subCategory: "anime",
        series: "One Piece",
        price: 4200,
        shortDesc: "ฟิกเกอร์ Luffy Gear 5 รุ่นพิเศษ",
        fullDesc: "ฟิกเกอร์ Luffy Gear 5 จาก One Piece รุ่นพิเศษ ดีไซน์ท่าทางโดดเด่น งานพรีเมียม เหมาะสำหรับแฟนตัวจริง",
        images: ["images/luffy1.jpg",
				 "images/luffy2.jpg",
				 "images/luffy3.jpg"],
        rating: 4.9,
        reviews: [
            {
                user: "ลูกค้า C",
                score: 5,
                comment: "Gear 5 เท่มาก งานพรีเมียม"
            }
        ]
    },

    {
        id: 3,
        name: "Raiden Shogun Figure",
        mainCategory: "figure",
        subCategory: "game",
        series: "Genshin Impact",
        price: 3500,
        desc: "ฟิกเกอร์ Raiden Shogun",
        images: [
				"images/raiden1.jpg",
				"images/raiden2.jpg",
				"images/raiden3.jpg",
				"images/raiden4.jpg",
				"images/raiden5.jpg"],
        rating: 4.7,
        reviews: [
            {
                user: "ลูกค้า D",
                score: 5,
                comment: "เหมือนในเกมมาก รายละเอียดดี"
            },
            {
                user: "ลูกค้า E",
                score: 4,
                comment: "ฐานตั้งแข็งแรงดี"
            }
        ]
    },

    {
        id: 4,
        name: "Naruto Poster A2",
        mainCategory: "poster",
        subCategory: null,
        series: "Naruto",
        price: 299,
        desc: "โปสเตอร์ Naruto ลิขสิทธิ์แท้",
        images: ["images/naruto_poster.jpg"],
        rating: 4.4,
        reviews: [
            {
                user: "ลูกค้า F",
                score: 4,
                comment: "กระดาษดี สีสวย"
            }
        ]
    },

    {
        id: 5,
        name: "Genshin Impact Art Book",
        mainCategory: "book",
        subCategory: null,
        series: "Genshin Impact",
        price: 890,
        desc: "หนังสือรวมภาพอาร์ตเวิร์ก",
        images: ["images/genshin_book.jpg"],
        rating: 4.6,
        reviews: [
            {
                user: "ลูกค้า G",
                score: 5,
                comment: "ภาพสวยมาก เหมาะกับสะสม"
            }
        ]
    }
];