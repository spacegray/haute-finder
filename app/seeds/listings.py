from app.models import db, Listing


def seed_listings():
    louisBackpack = Listing(
        name='Louis Vuitton Backpack',
        description='Adorable and chic authentic Louis Vuitton Palm Springs Mini in classic monogram. Extremely hard to find in boutiques. Excellent, like new condition, just a few light scratches on hardware. Corners are pristine. Made in Spain 🇪🇸',
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/louis-vuitton-backpack_ocuurr.jpg",
        price=2000,
        userId=3,
        brandId=1
    )
    torySandals = Listing(
        name="Tory Burch Sandals",
        description="Like new condition, used 2-3 times. Bright Red. Comes with shoe box and dust bag size 9 but fit a true size 8.5. This style runs small",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/red-tory-burch-sandals_u0rzsp.jpg",
        price=125, userId=1, brandId=2
    )
    layeredNecklace = Listing(
        name="Oxbow layered Necklace",
        description="Boho gorgeous! Dainty multi-layered boho choker necklace. Round gold beads and high choker layers accented with metal disc charms. The longest strand features a crescent oxbow/ox horn-shaped pendant. Metaltone zinc alloy, nickel-free.",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637193195/HauteFinder/Images/listingPhotos/oxbow-boho-layered-necklace_fqvsyu.jpg",
        price=40, userId=2, brandId=None
    )
    michaelKorsHeels = Listing(
        name="Michael Kors Heels", description="""Michael Kors Sandra Caged Platform 9.5. 
        Material: Suede
        Color: Terra
        Toe: Open Round Toe
        Heel: Stiletto Style. Measures approximately 4 inches in height.
        Platform: Measures approximately 1 inch in height.
        Closure: Adjustable ankle strap with buckle closure.
        Other: T- Strap with Caged detail.""",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/michael-kors-heels_p9vzev.jpg",
        price=75, userId=7, brandId=3
    )
    fendiSunglasses = Listing(
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
        price=265, userId=9, brandId=4
    )
    bohoRings = Listing(
        name="Boho Ring Set",
        description="An instant favorite! Big set of NINE silver tone tribal Boho Midi Rings featuring turquoise bead settings! Cactus, tribal, and desert sun/cow skull scene designs! Meant to fit on a variety of fingers to wear all at once, mix & match or pick favorites! Boutique - brand new! Nickel-free zinc alloy, acrylic/resin.",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/boho-rings-turquoise-silver_btrass.jpg",
        price=18, userId=7, brandId=None
    )
    whiteBlouse = Listing(
        name="White Zara Blouse",
        description="Women’s grid print long sleeve blouse. White and black color. Size Medium",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/white-blouse_ptoyfv.jpg",
        price=49, userId=8, brandId=5
    )
    mensNike = Listing(
        name="Nike Airmax",
        description="Nike Mens Air Max Wright Wolf Grey Red Size 9. Excellent condition, small dust mark on one shoe see photo.",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/mens-nike-airmax_yhyxm0.jpg",
        price=108, userId=3, brandId=6
    )
    reformationGown = Listing(
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
        price=299, userId=5, brandId=7
    )
    whitePolkaDots = Listing(
        name="White Polka Dot Dress", description="Beautiful dress for any occaision. Size Small",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/white-derek-lam-dress-dots_asg7ru.jpg",
        price=100, userId=7, brandId=None
    )
    mensTimbJacket = Listing(
        name="Mens Timberland Jacket",
        description="Great Jacket for all occasions. Never worn. Color is black, Size Large",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/mens-timberland-jacket_cfgl13.jpg",
        price=50, userId=6, brandId=8
    )
    mensNorthFace = Listing(
        name="Mens North Face Jacket",
        description="""Excellent Pre-Owned Condition. Very minor discoloration on zipper as pictured.
        -Covered, secure-zip chest pocket and hand pockets
        -Windproof fabric with non-PFC DWR finish for added protection
        -Reverse-coil center front zip
        -Hem cinch-cord""", imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637194776/HauteFinder/Images/listingPhotos/mens-northface-jacket_syo1w0.jpg",
        price=60, userId=5, brandId=9
    )
    louisPurse = Listing(
        name="Louis Vuitton Purse",
        description=""" Louis Vuitton chain link shoulder bag. 
        1.Brand New with Tags and product unopened.
        2.All items fit true to official size and available.
        3.All the goods are Authentic and Good service.
        4.It comes with the original packaging box, dust bag, and a new label""",
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637207413/HauteFinder/Images/listingPhotos/louis-purse_zeyerf.jpg",
        price=1000, userId=7, brandId=1
    )

    db.session.add(louisBackpack)
    db.session.add(torySandals)
    db.session.add(layeredNecklace)
    # db.session.add(michaelKorsHeels)
    # db.session.add(fendiSunglasses)
    # db.session.add(bohoRings)
    # db.session.add(whiteBlouse)
    # db.session.add(mensNike)
    # db.session.add(reformationGown)
    # db.session.add(whitePolkaDots)
    # db.session.add(mensTimbJacket)
    # db.session.add(mensNorthFace)
    # db.session.add(louisPurse)

    db.session.commit()



# Without userId
# def seed_listings():
#     louisBackpack = Listing(
#         name='Louis Vuitton Backpack', 
#         description='Adorable and chic authentic Louis Vuitton Palm Springs Mini in classic monogram. Extremely hard to find in boutiques. Excellent, like new condition, just a few light scratches on hardware. Corners are pristine. Made in Spain 🇪🇸', 
#         imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/louis-vuitton-backpack_ocuurr.jpg", 
#         price=2000,  
#         brandId=1
#     )
#     torySandals = Listing(
#         name="Tory Burch Sandals", 
#         description="Like new condition, used 2-3 times. Bright Red. Comes with shoe box and dust bag size 9 but fit a true size 8.5. This style runs small", 
#         imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/red-tory-burch-sandals_u0rzsp.jpg", 
#         price=125, brandId=2
#     )
#     layeredNecklace = Listing(
#         name="Oxbow layered Necklace", 
#         description="Boho gorgeous! Dainty multi-layered boho choker necklace. Round gold beads and high choker layers accented with metal disc charms. The longest strand features a crescent oxbow/ox horn-shaped pendant. Metaltone zinc alloy, nickel-free.", 
#         imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637193195/HauteFinder/Images/listingPhotos/oxbow-boho-layered-necklace_fqvsyu.jpg", 
#         price=40, brandId=None
#     )
#     michaelKorsHeels = Listing(
#         name="Michael Kors Heels", description="""Michael Kors Sandra Caged Platform 9.5. 
#         Material: Suede
#         Color: Terra
#         Toe: Open Round Toe
#         Heel: Stiletto Style. Measures approximately 4 inches in height.
#         Platform: Measures approximately 1 inch in height.
#         Closure: Adjustable ankle strap with buckle closure.
#         Other: T- Strap with Caged detail.""", 
#         imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/michael-kors-heels_p9vzev.jpg", 
#         price=75, brandId=3
#     )
#     fendiSunglasses = Listing(
#         name="Fendi Sunglasses", description="""100% AUTHENTIC FENDI SUNGLASSES
#         Brand Fendi
#         Frame Shape Cat Eye
#         Frame Color Gold/Havana
#         Frame Material Metal
#         Frame Type Full Rim
#         Lens Color Brown
#         Lens Material Polycarbonate
#         Size 58/21/140
#         Model Number FF 0290/S
#         Color Code VH8 HV M2
#         Gender Women

#         Made in Italy

#         Comes with original packaging and all accessories""", 
#         imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/fendi-cateye-glasses_uynlct.jpg", 
#         price=265, brandId=4
#     )
#     bohoRings = Listing(
#         name="Boho Ring Set", 
#         description="An instant favorite! Big set of NINE silver tone tribal Boho Midi Rings featuring turquoise bead settings! Cactus, tribal, and desert sun/cow skull scene designs! Meant to fit on a variety of fingers to wear all at once, mix & match or pick favorites! Boutique - brand new! Nickel-free zinc alloy, acrylic/resin.", 
#         imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/boho-rings-turquoise-silver_btrass.jpg", 
#         price=18, brandId=None
#     )
#     whiteBlouse = Listing(
#         name="White Zara Blouse", 
#         description="Women’s grid print long sleeve blouse. White and black color. Size Medium", 
#         imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/white-blouse_ptoyfv.jpg", 
#         price=49, brandId=5
#     )
#     mensNike = Listing(
#         name="Nike Airmax", 
#         description="Nike Mens Air Max Wright Wolf Grey Red Size 9. Excellent condition, small dust mark on one shoe see photo.", 
#         imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/mens-nike-airmax_yhyxm0.jpg", 
#         price=108, brandId=6
#     )
#     reformationGown = Listing(
#         name="Reformation Sienna Gown", 
#         description="""Reformation Siena Dress Maxi Gown Silk in Red Size 4

#         This is a floor length silk dress with adjustable shoulder ties, a detached belt, and a v neckline.

#         Beautiful, elegant and timeless.
#         100% Silk
#         Adjustable shoulder ties
#         Center back zipper
#         Double layered bodice
#         Sold out, rare style
#         Worn once""", 
#         imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/reformation-siena-gown-red_sihfbi.jpg", 
#         price=299,  brandId=7
#     )
#     whitePolkaDots = Listing(
#         name="White Polka Dot Dress", description="Beautiful dress for any occaision. Size Small", 
#         imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/white-derek-lam-dress-dots_asg7ru.jpg", 
#         price=100, brandId=None
#     )
#     mensTimbJacket = Listing(
#         name="Mens Timberland Jacket", 
#         description="Great Jacket for all occasions. Never worn. Color is black, Size Large", 
#         imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/mens-timberland-jacket_cfgl13.jpg", 
#         price=50, brandId=8
#     )
#     mensNorthFace = Listing(
#         name="Mens North Face Jacket", 
#         description="""Excellent Pre-Owned Condition. Very minor discoloration on zipper as pictured.

#         -Covered, secure-zip chest pocket and hand pockets
#         -Windproof fabric with non-PFC DWR finish for added protection
#         -Reverse-coil center front zip
#         -Hem cinch-cord""", imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637194776/HauteFinder/Images/listingPhotos/mens-northface-jacket_syo1w0.jpg", 
#         price=60, brandId=9
#     )
#     louisPurse = Listing(
#         name="Louis Vuitton Purse", 
#         description=""" Louis Vuitton chain link shoulder bag. 
#         1.Brand New with Tags and product unopened.
#         2.All items fit true to official size and available.
#         3.All the goods are Authentic and Good service.
#         4.It comes with the original packaging box, dust bag, and a new label""", 
#         imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637207413/HauteFinder/Images/listingPhotos/louis-purse_zeyerf.jpg", 
#         price=1000, brandId=1
#     )

    
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
    

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_listings():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
