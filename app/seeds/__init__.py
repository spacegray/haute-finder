from flask.cli import AppGroup
# from app.seeds.listings import seed_listings
from .users import seed_users, undo_users
from .listings import seed_listings, undo_listings
from .orders import seed_orders, undo_orders
from .orders_bags import seed_orders_bags, undo_orders_bags
# from .likes import seed_likes, undo_likes



# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_listings()
    seed_orders()
    seed_orders_bags()
    # seed_likes()
    # seed_brands()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    # undo_likes()
    undo_orders_bags()
    undo_orders()
    undo_listings()
    undo_users()
    # Add other undo functions here
