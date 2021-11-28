from app.models import db, Listing


def seed_listings():
    louisBackpack = Listing(
        userId=3,
        name='Louis Vuitton Backpack',
        description='Adorable and chic authentic Louis Vuitton Palm Springs Mini in classic monogram. Extremely hard to find in boutiques. Excellent, like new condition, just a few light scratches on hardware. Corners are pristine. Made in Spain 🇪🇸',
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/louis-vuitton-backpack_ocuurr.jpg",
        price=2000,
        
    )
    torySandals = Listing(
        userId=1,
        name="Tory Burch Sandals",
        description="Like new condition, used 2-3 times. Bright Red. Comes with shoe box and dust bag size 9 but fit a true size 8.5. This style runs small",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/red-tory-burch-sandals_u0rzsp.jpg",
        price=125 
    )
    layeredNecklace = Listing(
        userId=2,
        name="Oxbow layered Necklace",
        description="Boho gorgeous! Dainty multi-layered boho choker necklace. Round gold beads and high choker layers accented with metal disc charms. The longest strand features a crescent oxbow/ox horn-shaped pendant. Metaltone zinc alloy, nickel-free.",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637193195/HauteFinder/Images/listingPhotos/oxbow-boho-layered-necklace_fqvsyu.jpg",
        price=40  
    )
    michaelKorsHeels = Listing(
        userId=1,
        name="Michael Kors Heels", description="""Michael Kors Sandra Caged Platform 9.5. 
        Material: Suede
        Color: Terra
        Toe: Open Round Toe
        Heel: Stiletto Style. Measures approximately 4 inches in height.
        Platform: Measures approximately 1 inch in height.
        Closure: Adjustable ankle strap with buckle closure.
        Other: T- Strap with Caged detail.""",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/michael-kors-heels_p9vzev.jpg",
        price=75
    )
    fendiSunglasses = Listing(
        userId=1,
        name="Fendi Sunglasses", description="""100% AUTHENTIC FENDI SUNGLASSES
        Brand Fendi
        Frame Shape Cat Eye
        Frame Color Gold/Havana
        Frame Material Metal
        Frame Type Full Rim
        Lens Color Brown
        Lens Material Polycarbonate
        Size 58/21/140
        Model Number FF 0290/S
        Color Code VH8 HV M2
        Gender Women
        Made in Italy
        Comes with original packaging and all accessories""",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/fendi-cateye-glasses_uynlct.jpg",
        price=265
    )
    bohoRings = Listing(
        userId=1,
        name="Boho Ring Set",
        description="An instant favorite! Big set of NINE silver tone tribal Boho Midi Rings featuring turquoise bead settings! Cactus, tribal, and desert sun/cow skull scene designs! Meant to fit on a variety of fingers to wear all at once, mix & match or pick favorites! Boutique - brand new! Nickel-free zinc alloy, acrylic/resin.",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/boho-rings-turquoise-silver_btrass.jpg",
        price=18
    )
    whiteBlouse = Listing(
        userId=1,
        name="White Zara Blouse",
        description="Women’s grid print long sleeve blouse. White and black color. Size Medium",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/white-blouse_ptoyfv.jpg",
        price=49
    )
    mensNike = Listing(
        userId=1,
        name="Nike Airmax",
        description="Nike Mens Air Max Wright Wolf Grey Red Size 9. Excellent condition, small dust mark on one shoe see photo.",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/mens-nike-airmax_yhyxm0.jpg",
        price=108
    )
    reformationGown = Listing(
        userId=1,
        name="Reformation Sienna Gown",
        description="""Reformation Siena Dress Maxi Gown Silk in Red Size 4
        This is a floor length silk dress with adjustable shoulder ties, a detached belt, and a v neckline.
        Beautiful, elegant and timeless.
        100% Silk
        Adjustable shoulder ties
        Center back zipper
        Double layered bodice
        Sold out, rare style
        Worn once""",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/reformation-siena-gown-red_sihfbi.jpg",
        price=299
    )
    whitePolkaDots = Listing(
        userId=1,
        name="White Polka Dot Dress", description="Beautiful dress for any occaision. Size Small",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/white-derek-lam-dress-dots_asg7ru.jpg",
        price=100
    )
    mensTimbJacket = Listing(
        userId=1,
        name="Mens Timberland Jacket",
        description="Great Jacket for all occasions. Never worn. Color is black, Size Large",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/mens-timberland-jacket_cfgl13.jpg",
        price=50
    )
    mensNorthFace = Listing(
        userId=1,
        name="Mens North Face Jacket",
        description="""Excellent Pre-Owned Condition. Very minor discoloration on zipper as pictured.
        -Covered, secure-zip chest pocket and hand pockets
        -Windproof fabric with non-PFC DWR finish for added protection
        -Reverse-coil center front zip
        -Hem cinch-cord""", imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637194776/HauteFinder/Images/listingPhotos/mens-northface-jacket_syo1w0.jpg",
        price=60
    )
    louisPurse = Listing(
        userId=7,
        name="Louis Vuitton Purse",
        description=""" Louis Vuitton chain link shoulder bag. 
        1.Brand New with Tags and product unopened.
        2.All items fit true to official size and available.
        3.All the goods are Authentic and Good service.
        4.It comes with the original packaging box, dust bag, and a new label""",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637207413/HauteFinder/Images/listingPhotos/louis-purse_zeyerf.jpg",
        price=1000
    )
    michaelKorsJetSet = Listing(
        userId=3,
        name="Michael Kors Jet Set Shoulder bag",
        description="""Destined to go places, this Signature-print Jet Set shoulder bag will lend architectural flair to everyday looks. Convenient side pockets and a secure top-zip fastening render this carryall the perfect travel companion, while a spacious interior boasts more than enough room for your daily essentials.""",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637197716/HauteFinder/Images/listingPhotos/Michael-Kors-Brown-MK-Signature-JS-Travel-Chain-Shoulder-Bag-Tote-and-Wallet-0_uou15x.jpg",
        price=250
    )
    whiteFleeceJkt = Listing(
        userId=7,
        name="Relaxed White Fleece Jacket",
        description="""Plaid Faux Fur Jacket Overcoat
        COLORS: Black, White, Gray
        -Long
        -Pockets
        -Soft
        -Button Up
        -Extra button
        -Warm""",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637567290/HauteFinder/Images/listingPhotos/relaxed-fleece-jacket_uqptl9.jpg",
        price=50
    )
    mensRaybans = Listing(
        userId=12,
        name="Tortoise Shell Raybans",
        description="""Guaranteed Authentic.
        Style: Rayban Erika matte Tortoise
        Model # RB4171
        STANDARD SIZE : 54-21-145mm (eye-bridge-temple)
        Tortoise matte Frame - brown lenses
        POLARIZED
        UNISEX

        🎁box, case, cleaning cloth, Ray-ban manufacturers information booklets included🎁""",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1638074523/HauteFinder/Images/listingPhotos/Ray-ban_Erika-Tortoise-POLARIZED_s3nvct.jpg",
        price=70
    )
    PorscheDesignsMens = Listing(
        userId=6,
        name="Porsche Design URBAN HYBRID COAT",
        description="""PORSCHE DESIGN URBAN HYBRID COAT
        Salt 'n Pepper / Jet Black
        Size XL""",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637721348/HauteFinder/Images/listingPhotos/porsche-design-urban-900_y5pttm.jpg",
        price=300
    )
    redPlaidJkt = Listing(
        userId=7,
        name="Delilah Red Plaid Jacket",
        description="""Delilah Brand | Size 4

        Red Buffalo plaid flannel zip up jacket with hood. Two front hand pockets and a breast pocket. Machine washable. 100% cotton.

        In great condition without flaws.""",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637721349/HauteFinder/Images/listingPhotos/delilah-red-plaid-jacket_jzirbd.jpg",
        price=55
    )
    pinkFlashRaybans = Listing(
        userId=1,
        name="Ray Ban Aviators Pink Rose Gold Flash",
        description="""New with Tags

        Aviators RB3026

        62mm ( Size)

        Pink Rose Gold Flash (Mirror) Non Polarized Lenses

        Gold Frames

        Comes with All Pictured (case may be black or brown)""",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1638077909/HauteFinder/Images/listingPhotos/raybans-pink-flash_kxwxxu.jpg",
        price=68
    )
    mensMontBellJkt = Listing(
        userId=5,
        name="Mont-Bell Mens NavyPuffer Jacket",
        description="""Mount Bell Mens Navy Full Zip Long Sleeve Zipper Pockets, Goose down Puffer Jacket Size M.

        Brand: Mount Bell
        Type: Jacket
        Department: Men
        Size: S
        Style: Puffer Jacket
        Color: Brown
        Size Type: Regular
        Sleeve Length: Long Sleeve
        Closure: Zip
        Garment Care: Dry Clean""",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637721348/HauteFinder/Images/listingPhotos/mount-bell-mens-puffer-jacket_souuco.jpg",
        price=95
    )
    bwPatternSwtr = Listing(
        userId=8,
        name="Black and White Geo Pattern Sweater",
        description="""Geo pattern hooded cardigan. FullLong Sleeve

        KEYWORDS: luxury ladies woman’s wear fall winter all season shirts & blouses 
        jersey tops party day going out shirts white accessories 
        dress style cocktail sleeves cardigan pair with sweater
        boho trendy vogue posh sassy girly date night elegant dressy 
        fashionable chic tomboy simple bold fun classy office classy 
        wedding party cocktail business preppy fall winter""",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637721349/HauteFinder/Images/listingPhotos/black-white-pattern-sweater_djd5fj.jpg",
        price=95
    )
    paparazziGlasses = Listing(
        userId=7,
        name="Oversized Sunglasses",
        description="""Brand new boutique item! Stylish oversized square rimless sunglasses in gradient brown with gold accents and bee emblems on lenses. UV400 protection.""",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637721349/HauteFinder/Images/listingPhotos/Glasses-fleece-jacket-tan_ox1dix.jpg",
        price=65
    )
    whiteBlazer = Listing(
        userId=12,
        name="Women Brian Casual Blazer",
        description="""Features: Basic lapel collar blazer for women, long sleeve open front jackets for ladies, with two function flap pockets, perfect to carry some daily necessaries
        Occasion: Womens blazer and suit jackets, great for your daily wear, office, work, shopping, dating, party, travel, vacation""",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637721348/HauteFinder/Images/listingPhotos/Women-Brian-Casual-Blazer_oswck3.jpg",
        price=50
    )
    winterHat = Listing(
        userId=13,
        name="Blue Wool Winter Hat",
        description="""Made in and imported from Ireland

        This stylish European hat will give any outfit that extra bit of sophistication.

        100% Cotton hat that is waxed to handle the elements - wool trim and rosette with satin polyester inner lining.

        Women's Medium- 23.5 inch circumference

        Available in Black/Gray (has gray/black/multi-colored fleck wool trim and rosette) or Black/Dark Olive Green (has green/golds/multi-colored fleck wool trim).""",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637567712/HauteFinder/Images/listingPhotos/winter-hat-blue_vilkma.jpg",
        price=65
    )
    mensSpyderPullover = Listing(
        userId=5,
        name="Spyder Outboard Half-Zip Pullover",
        description="""Spyder Outboard Half-Zip Textured Pullover Sweater M NWOT
        New without tags
        100% Polyester
        Mixed-texture pullover featuring zipped mock neck with brushed microfiber inner and contrast panels at underarm and sides
        Raglan-seam sleeves
        Logo at chest and shoulder
        Electric blue and black with bright orange zipper details and logo""",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637721348/HauteFinder/Images/listingPhotos/Spyder-outboard-pullover_rcltdu.jpg",
        price=45
    )
    tyeDyeBohoDress = Listing(
        userId=9,
        name="Boho Tie Dye Halter Bodycon Dress",
        description="""Ribbed bodycon halter dress in a black cream dye blend.

        Machine wash. Model wears size 12.""",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637721349/HauteFinder/Images/listingPhotos/boho-dress-size-12_zdm0hc.jpg",
        price=35
    )
    adidasSweatshirt = Listing(
        userId=10,
        name="Adidas Originals Sweatshirt",
        description="""Cocoon style oversized sweatshirt
        Great condition except two tiny pulls on front shown. Size medium
        Pink""",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1638080151/HauteFinder/Images/listingPhotos/pink-adidas-sweatshirt_onm7on.jpg",
        price=35
    )
    
    db.session.add(louisBackpack)
    db.session.add(torySandals)
    db.session.add(layeredNecklace)
    db.session.add(michaelKorsHeels)
    db.session.add(fendiSunglasses)
    db.session.add(bohoRings)
    db.session.add(whiteBlouse)
    db.session.add(mensNike)
    db.session.add(reformationGown)
    db.session.add(whitePolkaDots)
    db.session.add(mensTimbJacket)
    db.session.add(mensNorthFace)
    db.session.add(louisPurse)
    db.session.add(michaelKorsJetSet)
    db.session.add(whiteFleeceJkt)
    db.session.add(mensRaybans)
    db.session.add(PorscheDesignsMens)
    db.session.add(redPlaidJkt)
    db.session.add(pinkFlashRaybans)
    db.session.add(mensMontBellJkt)
    db.session.add(bwPatternSwtr)
    db.session.add(paparazziGlasses)
    db.session.add(whiteBlazer)
    db.session.add(winterHat)
    db.session.add(mensSpyderPullover)
    db.session.add(tyeDyeBohoDress)
    db.session.add(adidasSweatshirt)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_listings():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
