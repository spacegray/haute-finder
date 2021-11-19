from app.models import db, Brand

def seed_brands():
    louisVuitton = Brand(
        name='Louis Vuitton', description="""Everyone knows the famous Monogram, but do you know the actual history of the Louis Vuitton company? The original Louis Vuitton company was founded by Louis Vuitton in 1854 on Rue Neuve des Capucines in Paris, France. Originally a luggage maker, Louis Vuitton realized that flat trunks could be stacked, as opposed to the rounded trunks that were more popular at the time. In 1858, Vuitton introduced his flat-bottom trunks and France went wild. Everywhere, luggage makers or malletiers, started to imitate Louis Vuitton’s designs.
        In 1892, Louis Vuitton died, and the company's management passed to his son, Georges Vuitton. Georges Vuitton had a vision for the company and wanted to grow it into a worldwide company. Then, in 1896... something huge: Georges Vuitton created the iconic Monogram Canvas.  By 1913, the Louis Vuitton Building opened on the Champs-Elysees, which was the largest travel-goods store in the world at the time. Soon after, stores were opened in New York, Bombay, Washington, London, Alexandria, and Buenos Aires.""", 
        imageURL='https://res.cloudinary.com/dexkxkrfp/image/upload/v1637197715/HauteFinder/Images/brandImages/LV-emblem-black_uwi031.jpg',
    )
    toryBurch = Brand(
        name='Tory Burch', description='Giving back and supporting other women was part of the plan when Tory started the company. In 2009, she established the Tory Burch Foundation to advance women’s empowerment and entrepreneurship by providing access to capital, education and digital resources, and tackling stereotypes that hold women back.',
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637197715/HauteFinder/Images/brandImages/tory-Burch_prlrus.png"
    )
    michaelKors = Brand(
        name="Michael Kors", description="""ABOUT US. Michael Kors is a world-renowned, award-winning designer of luxury accessories and ready-to-wear. His namesake company, established in 1981, currently produces a range of products under his signature Michael Kors Collection, MICHAEL Michael Kors and Michael Kors Mens labels.""", 
        imageURL="https: // res.cloudinary.com/dexkxkrfp/image/upload/v1637197715/HauteFinder/Images/brandImages/Michael-Kors-symbol-black_jm6loq.jpg"
    )
    fendi = Brand(
        name="Fendi", description="Fendi Logo. Fendi is a well-known Italian fashion house established in 1925 by Edoardo and Adele Fendi. A subsidiary of LVMH, the company specializes in luxury merchandise, and its 'baguette' handbags are much coveted and appreciated. Fendi's current artistic director is Karl Lagerfeld.", 
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637197716/HauteFinder/Images/brandImages/Fendi_TM_logo-1_tw0s31.png"
        )
    zara = Brand(
        name="Zara", description="Zara is a Spanish clothes and accessories brand, it is the flagship brand of the Inditex group. Few clothing brands keep up with the latest fashion, are of high quality and yet, affordable. It is probably the amalgamation of all these qualities that made Zara, the Spanish clothing brand become the go-to fashion brand for all.", 
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637198172/HauteFinder/Images/brandImages/zara-new-logo-00_d0vpgn.jpg"
        )
    nike = Brand(
        name="Nike", description="Founded as an importer of Japanese shoes, NIKE, Inc. (Nike) has grown to be the world's largest marketer of athletic footwear, holding a g lobal market share of approximately 37 percent. In the United States, Nike products are sold through about 22,000 retail accounts; worldwi de, the company's products are sold in more than 160 countries.", 
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637198054/HauteFinder/Images/brandImages/Nike-emblem_xqdlja.jpg"
        )
    reformation = Brand(
        name="Reformation", description="We've got women's clothing, accessories, sustainable fashion, and eco-friendly things for your wearing pleasure. Filter by color, size, print, type, and price to find whatever you're looking for, or keep browsing and keep it casual. From weddings and bridesmaid dresses to hanging out at home, we've got stuff that'll work for most situations.", 
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637197715/HauteFinder/Images/brandImages/reformation_fkyfoo.jpg"
        )
    timberland = Brand(
        name="Timberland", description="Our mission is to equip people to make a difference in the world. We do this by creating outstanding products and by trying to make a difference in the communities in which we live and work. We demonstrate this philosophy across all facets of our company from our products to our employee involvement in our communities.", 
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637198127/HauteFinder/Images/brandImages/timberland-white_rqnz8r.jpg"
        )
    northface = Brand(
        name="Northface", description="Our Story: Behind The Brand. We are named for the coldest, most unforgiving side of a mountain. We have helped explorers reach the most unfathomable heights of the Himalayas. But The North Face® legend begins, ironically, on a beach. More precisely, San Francisco's North Beach neighborhood, at an altitude of only 150 feet above sea level.", 
        imageURL="https://res.cloudinary.com/dexkxkrfp/image/upload/v1637197715/HauteFinder/Images/brandImages/the-north-face-logo_qomzdx.jpg"
        )

    db.session.add(louisVuitton)
    db.session.add(toryBurch)
    db.session.add(michaelKors)
    db.session.add(fendi)
    db.session.add(zara)
    db.session.add(nike)
    db.session.add(reformation)
    db.session.add(timberland)
    db.session.add(northface)

def undo_brands():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()