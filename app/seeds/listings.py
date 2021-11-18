from app.models import db, Listing
from app.models.listing import Listing


# Adds a demo user, you can add other users here if you want
def seed_listings():
    louisBackpack = Listing(
        name='Louis Vuitton Backpack', description='Adorable and chic authentic Louis Vuitton Palm Springs Mini in classic monogram. Extremely hard to find in boutiques. Excellent, like new condition, just a few light scratches on hardware. Corners are pristine. Made in Spain 🇪🇸', imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/louis-vuitton-backpack_ocuurr.jpg", price=2000, user_id=3, brand_id=1
    ),
    torySandals = Listing(
        name="Tory Burch Sandals", description="Like new condition, used 2-3 times. Bright Red. Comes with shoe box and dust bag size 9 but fit a true size 8.5. This style runs small", imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/red-tory-burch-sandals_u0rzsp.jpg", price=125, user_id=1, brand_id=2
    )
    layeredNecklace = Listing(
        name="Oxbow layered Necklace", description="Boho gorgeous! Dainty multi-layered boho choker necklace. Round gold beads and high choker layers accented with metal disc charms. The longest strand features a crescent oxbow/ox horn-shaped pendant. Metaltone zinc alloy, nickel-free.", imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637193195/HauteFinder/Images/listingPhotos/oxbow-boho-layered-necklace_fqvsyu.jpg", price=40, user_id=2, brand_id=None
    ), 
    michaelKorsHeels = Listing(
        name="Michael Kors Heels", description="""Michael Kors Sandra Caged Platform 9.5. 
        Material: Suede
        Color: Terra
        Toe: Open Round Toe
        Heel: Stiletto Style. Measures approximately 4 inches in height.
        Platform: Measures approximately 1 inch in height.
        Closure: Adjustable ankle strap with buckle closure.
        Other: T- Strap with Caged detail.""", imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/michael-kors-heels_p9vzev.jpg", price=75, user_id=7, brand_id=3
    ),
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

        Comes with original packaging and all accessories""", imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/fendi-cateye-glasses_uynlct.jpg", price=265, user_id=9, brand_id=4
    )
    bohoRings = Listing(
        name="Boho Ring Set", description="An instant favorite! Big set of NINE silver tone tribal Boho Midi Rings featuring turquoise bead settings! Cactus, tribal, and desert sun/cow skull scene designs! Meant to fit on a variety of fingers to wear all at once, mix & match or pick favorites! Boutique - brand new! Nickel-free zinc alloy, acrylic/resin.", imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/boho-rings-turquoise-silver_btrass.jpg", price=18, user_id=7, brand_id=None
    )
    whiteBlouse = Listing(
        name="White Zara Blouse", description="Women’s grid print long sleeve blouse. White and black color. Size Medium", imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/white-blouse_ptoyfv.jpg", price=49, user_id=8, brand_id=5
    )
    mensNike = Listing(
        name="Nike Airmax", description="Nike Mens Air Max Wright Wolf Grey Red Size 9. Excellent condition, small dust mark on one shoe see photo.", imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/mens-nike-airmax_yhyxm0.jpg", price=108, user_id=3, brand_id=6
    )
    reformationGown = Listing(
        name="Reformation Sienna Gown", description="""Reformation Siena Dress Maxi Gown Silk in Red Size 4

        This is a floor length silk dress with adjustable shoulder ties, a detached belt, and a v neckline.

        Beautiful, elegant and timeless.
        100% Silk
        Adjustable shoulder ties
        Center back zipper
        Double layered bodice
        Sold out, rare style
        Worn once""", imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/reformation-siena-gown-red_sihfbi.jpg", price=299, user_id=5, brand_id=7
    )
    whitePolkaDots = Listing(
        name="White Polka Dot Dress", description="", imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/white-derek-lam-dress-dots_asg7ru.jpg", price=100, user_id=7, brand_id=None
    )
    mensTimbJacket = Listing(
        name="Mens Timberland Jacket", description="Great Jacket for all occasions. Never worn. Color is black, Size Large", imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637190929/HauteFinder/Images/listingPhotos/mens-timberland-jacket_cfgl13.jpg", price=50, user_id=6, brand_id=8
    )
    mensNorthFace = Listing(
        name="Mens North Face Jacket", description="""Excellent Pre-Owned Condition. Very minor discoloration on zipper as pictured.

        -Covered, secure-zip chest pocket and hand pockets
        -Windproof fabric with non-PFC DWR finish for added protection
        -Reverse-coil center front zip
        -Hem cinch-cord""", imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637194776/HauteFinder/Images/listingPhotos/mens-northface-jacket_syo1w0.jpg", price=60, user_id=5, brand_id=9
    )
    louisPurse = Listing(
        name="Louis Vuitton Purse", description=""" Louis Vuitton chain link shoulder bag. 
        1.Brand New with Tags and product unopened.
        2.All items fit true to official size and available.
        3.All the goods are Authentic and Good service.
        4.It comes with the original packaging box, dust bag, and a new label""", imageURL="http://", price=1000, user_id=7, brand_id=1
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
    

    db.session.add()

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
