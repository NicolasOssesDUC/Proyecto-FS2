const productos = [
    // Teclados
    {
        id: 1,
        nombre: 'Teclado Blue Hiragana',
        precio: 69000,
        categoria: 'Teclados',
        subcategoria: '60%',
        imagen: 'assets/img/bluehiragana1.webp',
        stock: 15,
        descripcion: ''
    },
    {
        id: 2,
        nombre: 'Teclado BlackWidow 75%',
        precio: 89000,
        categoria: 'Teclados',
        subcategoria: '75%',
        imagen: 'assets/img/Razer-BlackWidow-V4-75-Hot-Swappable-Mechanical-Gaming-Keyboard-RGB-Chroma-Black_effe0aa5-8503-4285-9de7-e5bf74665895.5a5ae658a4ebf40dc56b3fa1c756aa72.webp',
        stock: 12,
        descripcion: ''
    },
    {
        id: 3,
        nombre: 'Teclado BlackWidow Pro',
        precio: 110000,
        categoria: 'Teclados',
        subcategoria: 'Full Size',
        imagen: 'assets/img/Razer-BlackWidow-V4-Pro-Wired-Mechanical-PC-Gaming-Keyboard-Wrist-Rest-Chroma-RGB-Black_2a924a0f-da63-423e-acec-90b20cbbda78.b4de0d4d6e9d254aed7b22c21d5d562d.webp',
        stock: 10,
        descripcion: ''
    },
    {
        id: 4,
        nombre: 'Teclado Ducky One 2 Mini',
        precio: 78000,
        categoria: 'Teclados',
        subcategoria: '60%',
        imagen: 'assets/img/TecladoDuckyOne2MiniFrozenLama.jpg',
        stock: 20,
        descripcion: ''
    },
    {
        id: 5,
        nombre: 'Teclado Red Dragon',
        precio: 99000,
        categoria: 'Teclados',
        subcategoria: '60%',
        imagen: 'assets/img/TecladoRedragon1.png',
        stock: 18,
        descripcion: ''
    },
    {
        id: 6,
        nombre: 'Teclado Fantech K613L Figther Full Size',
        precio: 110000,
        categoria: 'Teclados',
        subcategoria: 'Full Size',
        imagen: 'assets/img/Fantech K613L Fighter.jpg',
        stock: 7,
        descripcion: ''
    },
    {
        id: 7,
        nombre: 'Teclado HyperX MKW100 Full Size',
        precio: 135000,
        categoria: 'Teclados',
        subcategoria: 'Full Size',
        imagen: 'assets/img/HyperX MKW100.webp',
        stock: 9,
        descripcion: ''
    },
    {
        id: 8,
        nombre: 'Teclado RedDragon Valhein',
        precio: 123000,
        categoria: 'Teclados',
        subcategoria: 'Full Size',
        imagen: 'assets/img/RedDragon valhein.webp',
        stock: 11,
        descripcion: ''
    },
    {
        id: 9,
        nombre: 'Teclado Logitech G413',
        precio: 155000,
        categoria: 'Teclados',
        subcategoria: 'Full Size',
        imagen: 'assets/img/G413 Logitech.webp',
        stock: 5,
        descripcion: ''
    },
    // Keycaps
    {
        id: 10,
        nombre: 'KeyCaps HammerHead Shark ABS',
        precio: 88000,
        categoria: 'Keycaps',
        subcategoria: 'ABS',
        imagen: 'assets/img/61qTBJD7cEL._UF1000,1000_QL80_.jpg',
        stock: 25,
        descripcion: ''
    },
    {
        id: 11,
        nombre: 'KeyCaps Ajjaz Pro 75% ABS',
        precio: 55000,
        categoria: 'Keycaps',
        subcategoria: 'ABS',
        imagen: 'assets/img/86d6480d400307382f0d4d7de8825e60.webp',
        stock: 30,
        descripcion: ''
    },
    {
        id: 12,
        nombre: 'KeyCaps Cupid Cherry ABS',
        precio: 110000,
        categoria: 'Keycaps',
        subcategoria: 'ABS',
        imagen: 'assets/img/Cupid-red-on-white-cherry-mx-keycap-keycaps-set-pbt-thock-king-mechanical-keyboard-keyboards-3.webp',
        stock: 14,
        descripcion: ''
    },
    {
        id: 13,
        nombre: 'KeyCaps Fantech Nautilus ABS',
        precio: 65000,
        categoria: 'Keycaps',
        subcategoria: 'ABS',
        imagen: 'assets/img/descarga.webp',
        stock: 22,
        descripcion: ''
    },
    {
        id: 14,
        nombre: 'KeyCaps Thrine Thru Emblem ABS',
        precio: 118000,
        categoria: 'Keycaps',
        subcategoria: 'ABS',
        imagen: 'assets/img/MD-13559_20151130234208_b87df6bcdcec9702.jpg',
        stock: 10,
        descripcion: ''
    },
    // Switches
    {
        id: 15,
        nombre: 'Switches Lin Game 1989',
        precio: 25000,
        categoria: 'Switches',
        subcategoria: 'Lineales',
        imagen: 'assets/img/GAME_1989_Classic-2_720x.webp',
        stock: 100,
        descripcion: ''
    },
    {
        id: 16,
        nombre: 'Switches Lin Yellow',
        precio: 18000,
        categoria: 'Switches',
        subcategoria: 'Lineales',
        imagen: 'assets/img/switches_79fbaff5-ba04-4481-b8da-b30846b9ffbc_720x.webp',
        stock: 150,
        descripcion: ''
    },
    {
        id: 17,
        nombre: 'Switches Lin Piano Pro',
        precio: 36000,
        categoria: 'Switches',
        subcategoria: 'Lineales',
        imagen: 'assets/img/V3-Piano-Pro-Switch-4_720x.webp',
        stock: 80,
        descripcion: ''
    },
    {
        id: 18,
        nombre: 'Switches Lin Akko RoseWood',
        precio: 44000,
        categoria: 'Switches',
        subcategoria: 'Lineales',
        imagen: 'assets/img/Akko-Rosewood-Switch-XQ-Q-GX_720x.webp',
        stock: 70,
        descripcion: ''
    },
    {
        id: 19,
        nombre: 'Switches Lin WS Yellow',
        precio: 53000,
        categoria: 'Switches',
        subcategoria: 'Lineales',
        imagen: 'assets/img/WS_Yellow_Switch_Lifestyle_2_720x.webp',
        stock: 90,
        descripcion: ''
    },
    {
        id: 20,
        nombre: 'Switch Gateron Blue 90u',
        precio: 24990,
        categoria: 'Switches',
        subcategoria: 'Clicky',
        imagen: 'assets/img/gateron-blue.jpg',
        stock: 120,
        descripcion: ''
    },
    {
        id: 21,
        nombre: 'Switch KTT Purple 90u',
        precio: 22990,
        categoria: 'Switches',
        subcategoria: 'Clicky',
        imagen: 'assets/img/KTT PURPLE.webp',
        stock: 110,
        descripcion: ''
    },
    {
        id: 22,
        nombre: 'Switch Gateron Brown 90u',
        precio: 20000,
        categoria: 'Switches',
        subcategoria: 'Tactiles',
        imagen: 'assets/img/GATERONBROWN.jpg',
        stock: 130,
        descripcion: ''
    },
    {
        id: 23,
        nombre: 'Switch Gateron Red 90u',
        precio: 17990,
        categoria: 'Switches',
        subcategoria: 'Tactiles',
        imagen: 'assets/img/GATERONRED.webp',
        stock: 140,
        descripcion: ''
    },
    // Cases
    {
        id: 24,
        nombre: 'Case Holy 80% EVA Edition',
        precio: 100000,
        categoria: 'Cases',
        subcategoria: '80%',
        imagen: 'assets/img/Holy80_.webp',
        stock: 10,
        descripcion: ''
    },
    {
        id: 25,
        nombre: 'Case Tofu 60% Black',
        precio: 69990,
        categoria: 'Cases',
        subcategoria: '60%',
        imagen: 'assets/img/tofu60_.webp',
        stock: 15,
        descripcion: ''
    },
    {
        id: 26,
        nombre: 'Case Holy 60% Black',
        precio: 59990,
        categoria: 'Cases',
        subcategoria: '60%',
        imagen: 'assets/img/Holy60_.webp',
        stock: 20,
        descripcion: ''
    }
];
