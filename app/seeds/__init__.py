from flask.cli import AppGroup
from app.seeds.listings import seed_listings
from .users import seed_users, undo_users
from .listings import seed_listings, undo_listings
from .brands import seed_brands, undo_brands
from .orders import seed_orders, undo_orders

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_brands()
    seed_listings()
    seed_orders()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_listings()
    undo_brands()
    undo_users()
    undo_orders()
    # Add other undo functions here
