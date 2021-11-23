// # this way works if ALL values on form are updated (not just one)

// # @listing_routes.route('/<id>/', methods=['PUT'])
// # def edit_listing(id):
// #     form = ListingForm()
// #     listing = Listing.query.get(id)
// #     name = listing.get('name')
// #     description = listing.get('description')
// #     imageURL = listing.get('imageURL')
// #     price = listing.get('price')

// #     if len(form.data['name']) == 0:
// #         listing.name = name

// #     if len(form.data['description']) > 0:
// #         listing.description = form.data['description']

// #     if len(form.data['imageURL']) > 0:
// #         listing.imageURL = form.data['imageURL']

// #     listing.price = form.data['price']

// #     db.session.commit()
// #     return listing.to_dict()

// # @listing_routes.route('/add', methods=['POST'])
// # # @login_required
// # def add_listing():

// #     if request.method == 'POST':
// #         form = ListingForm()
// #         form['csrf_token'].data = request.cookies['csrf_token']
// #         if form.validate_on_submit():
// #             data = Listing()
// #             form.populate_obj(data)
// #             db.session.add(data)
// #             db.session.commit()
// #         return data.to_dict()

// # @listing_routes.route('/add', methods=['POST'])
// # # @login_required
// # def add_listing():
// #     form = ListingForm()
// #     form['csrf_token'].data = request.cookies['csrf_token']

// #     if form.validate_on_submit():
// #         new_listing = Listing(
// #             userId = current_user.id,
// #             name = form.data['name'],
// #             description = form.data['description'],
// #             imageUrl=form.data['imageUrl'],
// #             price=form.data['price']
// #         )

// #         db.session.add(new_listing)
// #         db.session.commit()
// #         print(new_listing.to_dict())
// #         return {'listing': new_listing.to_dict()}
// #     return {'errors': validation_errors_list(form.errors)}


// # @listing_routes.route('/<int:id>/edit', methods=['POST'])
// # def edit_listing(id):

// #     form = ListingForm()
// #     form['csrf_token'].data = request.cookies['csrf_token']
// #     if form.validate_on_submit():
// #         data = form.data
// #         listing = Listing.query.get(id)
// #         listing.name = data['title']
// #         listing.description = data['description']
// #         listing.imageURL = data['imageURL']
// #         listing.price = data['price']
// #         db.session.commit()
// #         return listing.to_dict()