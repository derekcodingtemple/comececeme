from server import create_app, cli, db
from server.cli import blueprint
from server.blueprints.faqs.models import HairTip

app = create_app()
app.cli.add_command(blueprint)

@app.shell_context_processor
def makeShellContext():
    return dict(db=db, app=app, HairTip=HairTip)